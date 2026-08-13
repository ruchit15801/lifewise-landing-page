import fs from "fs";

const files = [
  "components/FamilyHub.tsx",
  "components/ReminderSection.tsx",
  "components/LifeScore.tsx",
  "components/Automation.tsx",
  "components/AISection.tsx"
];

for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  s = s.replace(/import \{ useRef \} from "react";\r?\n/, "");
  s = s.replace(
    /import \{ motion, useScroll, useTransform \} from "framer-motion";/,
    'import { motion } from "framer-motion";'
  );
  s = s.replace(
    /\r?\n  const containerRef = useRef<HTMLDivElement>\(null\);\r?\n  const \{ scrollYProgress \} = useScroll\(\{ target: containerRef, offset: \["start end", "end start"\] \}\);\r?\n  const y = useTransform\(scrollYProgress, \[0, 1\], \[[^\]]+\]\);\r?\n/,
    "\n"
  );
  s = s.replace(
    /<div ref=\{containerRef\} className="relative space-y-6">/g,
    '<div className="relative space-y-6">'
  );
  s = s.replace(
    /<motion\.div style=\{\{ y \}\} className="([^"]*)">/g,
    '<div className="$1">'
  );
  // Fix orphaned closings that belonged to y-parallax wrappers: leave as </motion.div>
  // Manual: replace the specific pattern </motion.div> after those blocks is hard;
  // instead count — for FamilyHub the y wrapper closes with </motion.div> before sibling.
  fs.writeFileSync(f, s);
  console.log("updated", f);
}
