/**
 * Build favicon + PWA icons from public/favicon.png (main brand icon).
 * Run: npm run icons
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public", "favicon.png");

/**
 * Resize the full app icon. Source already has gradient + heart.
 * @param {number} size
 * @param {{ padRatio?: number }} opts - padRatio shrinks mark for maskable safe zone
 */
async function renderIcon(size, opts = {}) {
  const padRatio = opts.padRatio ?? 0;
  const inner = Math.max(1, Math.round(size * (1 - padRatio * 2)));
  const pad = Math.max(0, Math.floor((size - inner) / 2));

  const resized = await sharp(src)
    .resize(inner, inner, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

  if (padRatio <= 0) return resized;

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: resized, left: pad, top: pad }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

async function writePng(filePath, buffer) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, buffer);
  console.log("wrote", path.relative(root, filePath), `(${buffer.length} bytes)`);
}

async function main() {
  if (!fs.existsSync(src)) throw new Error(`Missing source icon: ${src}`);

  const meta = await sharp(src).metadata();
  console.log(
    `source: public/favicon.png (${meta.width}x${meta.height}, ${meta.format})`
  );

  const outPublic = path.join(root, "public");
  const outApp = path.join(root, "app");

  const png16 = await renderIcon(16);
  const png32 = await renderIcon(32);
  const png48 = await renderIcon(48);
  const png180 = await renderIcon(180);
  const png192 = await renderIcon(192);
  const png512 = await renderIcon(512);
  // Maskable: keep ~80% safe zone so Android doesn't crop the heart
  const png512Maskable = await renderIcon(512, { padRatio: 0.1 });

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
  console.log("done — all favicons from public/favicon.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
