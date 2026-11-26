"use client";

import { useEffect, useRef, useState } from "react";

interface HeroTypewriterProps {
  text: string;
  className?: string;
  cursorClassName?: string;
  speed?: number;
  showCursor?: boolean;
  onComplete?: () => void;
}

function getGraphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    try {
      const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    } catch {
      // Fallback below
    }
  }
  return Array.from(text);
}

export function HeroTypewriter({
  text,
  className = "",
  cursorClassName = "",
  speed = 28,
  showCursor = true,
  onComplete
}: HeroTypewriterProps) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const graphemes = useRef<string[]>([]);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const items = getGraphemes(text);
    graphemes.current = items;

    if (prefersReducedMotion) {
      setDisplayedCount(items.length);
      setIsTyping(false);
      onCompleteRef.current?.();
      return;
    }

    setDisplayedCount(0);
    setIsTyping(true);

    let currentIndex = 0;
    const interval = window.setInterval(() => {
      currentIndex += 1;
      setDisplayedCount(currentIndex);

      if (currentIndex >= items.length) {
        window.clearInterval(interval);
        setIsTyping(false);
        onCompleteRef.current?.();
      }
    }, speed);

    return () => {
      window.clearInterval(interval);
    };
  }, [text, speed]);

  const output = graphemes.current.slice(0, displayedCount).join("");

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Invisible ghost text reserves the exact multi-line layout bounding box from frame 0 */}
      <span className="invisible select-none" aria-hidden="true">
        {text}
      </span>
      {/* Visible typed characters overlaid in the exact reserved box without layout shift */}
      <span className="absolute inset-0 select-text">
        {output}
        {showCursor && (
          <span
            aria-hidden="true"
            className={`inline-block ml-0.5 w-[2px] h-[0.9em] align-middle bg-emerald-500 dark:bg-emerald-400 ${
              isTyping ? "opacity-100" : "animate-pulse"
            } ${cursorClassName}`}
          />
        )}
      </span>
    </span>
  );
}
