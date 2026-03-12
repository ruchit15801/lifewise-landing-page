"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(109,93,246,0.22),transparent_60%),radial-gradient(700px_380px_at_90%_20%,rgba(34,197,94,0.18),transparent_60%)] dark:bg-[radial-gradient(900px_450px_at_10%_10%,rgba(109,93,246,0.22),transparent_62%),radial-gradient(800px_420px_at_90%_20%,rgba(34,197,94,0.14),transparent_62%)]" />
      <motion.div
        className="absolute -inset-24 opacity-60"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(109,93,246,0.22), rgba(79,70,229,0.0), rgba(34,197,94,0.18))",
          backgroundSize: "200% 200%"
        }}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)] bg-[linear-gradient(to_bottom,rgba(15,23,42,0.06),transparent)] dark:bg-[linear-gradient(to_bottom,rgba(248,250,252,0.06),transparent)]" />
    </div>
  );
}

