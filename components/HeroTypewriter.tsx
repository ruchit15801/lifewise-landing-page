"use client";

import { useEffect, useRef, useState } from "react";

interface HeroTypewriterProps {
  text: string;
  className?: string;
  cursorClassName?: string;
  speed?: number;
  startDelay?: number;
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
  speed = 65,
  startDelay = 220,
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
    let intervalId: number | undefined;

    const delayId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        currentIndex += 1;
        setDisplayedCount(currentIndex);

        if (currentIndex >= items.length) {
          if (intervalId !== undefined) window.clearInterval(intervalId);
          setIsTyping(false);
          onCompleteRef.current?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(delayId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  const output = graphemes.current.slice(0, displayedCount).join("");

  return (
    <span className={`inline ${className}`}>
      {/* Expand inline background-clip box slightly so Gujarati/Hindi top & bottom matras never clip */}
      <span className="inline py-[0.22em] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-300">
        {output}
      </span>
      {showCursor && (
        <span
          aria-hidden="true"
          className={`inline-block ml-1 w-[2.5px] h-[0.82em] align-baseline rounded-sm bg-emerald-500 dark:bg-emerald-400 ${
            isTyping ? "opacity-100" : "animate-pulse"
          } ${cursorClassName}`}
        />
      )}
    </span>
  );
}
