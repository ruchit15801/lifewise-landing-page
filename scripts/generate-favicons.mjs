/**
 * Build favicon + PWA icons from public/logo.png
 * Run: npm run icons
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public", "logo.png");

/** Turn near-black canvas pixels transparent so trim can crop tight. */
async function knockoutBlack(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < 18 && g < 18 && b < 18) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .trim({ threshold: 8 })
    .png()
    .toBuffer();
}

/**
 * @param {Buffer} mark
 * @param {number} size
 * @param {{ zoom?: number, padRatio?: number, bg?: { r:number,g:number,b:number,alpha:number } }} opts
 */
async function renderIcon(mark, size, opts = {}) {
  const zoom = opts.zoom ?? 1;
  const padRatio = opts.padRatio ?? 0.06;
  const bg = opts.bg ?? { r: 0, g: 0, b: 0, alpha: 0 };

  const meta = await sharp(mark).metadata();
  const w = meta.width || size;
  const h = meta.height || size;
  const side = Math.min(w, h);
  const crop = Math.max(8, Math.round(side / zoom));
  const left = Math.round((w - crop) / 2);
  const top = Math.round((h - crop) / 2);

  const cropped = await sharp(mark)
    .extract({
      left: Math.max(0, left),
      top: Math.max(0, top),
      width: Math.min(crop, w),
      height: Math.min(crop, h)
    })
    .toBuffer();

  const inner = Math.round(size * (1 - padRatio * 2));
  const pad = Math.max(0, Math.floor((size - inner) / 2));

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: bg
    }
  })
    .composite([
      {
        input: await sharp(cropped)
          .resize(inner, inner, {
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png()
          .toBuffer(),
        left: pad,
        top: pad
      }
    ])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

async function writePng(filePath, buffer) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, buffer);
  console.log("wrote", path.relative(root, filePath), `(${buffer.length} bytes)`);
}

async function main() {
  if (!fs.existsSync(src)) throw new Error(`Missing source logo: ${src}`);

  const mark = await knockoutBlack(src);
  const outPublic = path.join(root, "public");
  const outApp = path.join(root, "app");

  // Small tab icons: zoom into colorful heart so 16px stays readable
  const png16 = await renderIcon(mark, 16, { zoom: 1.55, padRatio: 0.02 });
  const png32 = await renderIcon(mark, 32, { zoom: 1.45, padRatio: 0.03 });
  const png48 = await renderIcon(mark, 48, { zoom: 1.35, padRatio: 0.04 });

  // Touch / PWA: keep full emblem, solid bg for Apple (no transparency surprises)
  const png180 = await renderIcon(mark, 180, {
    zoom: 1.05,
    padRatio: 0.04,
    bg: { r: 15, g: 23, b: 42, alpha: 1 }
  });
  const png192 = await renderIcon(mark, 192, { zoom: 1.05, padRatio: 0.05 });
  const png512 = await renderIcon(mark, 512, { zoom: 1.02, padRatio: 0.04 });
  const png512Maskable = await renderIcon(mark, 512, {
    zoom: 1,
    padRatio: 0.16,
    bg: { r: 15, g: 23, b: 42, alpha: 1 }
  });

  await writePng(path.join(outPublic, "favicon-16x16.png"), png16);
  await writePng(path.join(outPublic, "favicon-32x32.png"), png32);
  await writePng(path.join(outPublic, "apple-touch-icon.png"), png180);
  await writePng(path.join(outPublic, "icon-192.png"), png192);
  await writePng(path.join(outPublic, "icon-512.png"), png512);
  await writePng(path.join(outPublic, "icon-512-maskable.png"), png512Maskable);
  await writePng(path.join(outPublic, "icon.png"), png512);

  await writePng(path.join(outApp, "icon.png"), png512);
  await writePng(path.join(outApp, "apple-icon.png"), png180);

  const ico = await pngToIco([png16, png32, png48]);
  fs.writeFileSync(path.join(outPublic, "favicon.ico"), ico);
  fs.writeFileSync(path.join(outApp, "favicon.ico"), ico);
  console.log("wrote public/favicon.ico + app/favicon.ico", `(${ico.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
