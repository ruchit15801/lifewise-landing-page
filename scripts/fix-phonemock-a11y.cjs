const fs = require("fs");
const path = "d:/Work/lifewise-landing page/components/PhoneMock.tsx";
let s = fs.readFileSync(path, "utf8");

const marker = "___REAL_TAB_BUTTON___";
s = s.replace(
  /\{TABS\.map\(\(tab\) => \{[\s\S]*?<button(\r?\n\s+key=\{tab\.id\})/,
  (m) => m.replace("<button", `<button ${marker}`)
);

s = s.replace(/<button(\s)/g, "<div$1");
s = s.replace(/<\/button>/g, "</div>");
s = s.replace(`<div ${marker}`, "<button");

if (!s.includes("aria-label={`Show ${tab.label} screen`}")) {
  s = s.replace(
    /(<button\r?\n\s+key=\{tab\.id\}\r?\n\s+type="button"\r?\n\s+onClick=\{\(\) => setActiveTab\(tab\.id\)\})/,
    `$1\n                          aria-label={\`Show \${tab.label} screen\`}\n                          aria-pressed={isActive}`
  );
}

s = s.replace(
  /<h3 className="text-\[14px\] font-bold text-slate-900">/g,
  '<div className="text-[14px] font-bold text-slate-900">'
);
s = s.replace(
  /<h3 className="text-\[13px\] font-bold text-slate-900">/g,
  '<div className="text-[13px] font-bold text-slate-900">'
);
s = s.replace(
  /<h3 className="text-\[16px\] font-bold text-slate-900">/g,
  '<div className="text-[16px] font-bold text-slate-900">'
);
s = s.replace(/<\/h3>/g, "</div>");
s = s.replace(
  /<h2 className="text-\[14px\] font-bold text-slate-900 mb-2\.5">Trend<\/h2>/,
  '<div className="text-[14px] font-bold text-slate-900 mb-2.5">Trend</div>'
);

fs.writeFileSync(path, s);
console.log("buttons left:", (s.match(/<button/g) || []).length);
console.log("has tab aria-label:", s.includes("Show ${tab.label} screen"));
