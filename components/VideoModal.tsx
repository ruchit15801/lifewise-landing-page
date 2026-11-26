"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { trackVideo75, trackVideoPlay } from "@/lib/analytics";

const DEMO_SRC = "/videos/lifewise-demo.mp4";
const DEMO_POSTER = "/videos/lifewise-demo-poster.jpg";

export function VideoModal({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const [shouldLoad, setShouldLoad] = useState(false);
  const playedRef = useRef(false);
  const hit75Ref = useRef(false);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      playedRef.current = false;
      hit75Ref.current = false;
      const el = videoRef.current;
      if (el) {
        el.pause();
        el.currentTime = 0;
      }
      return;
    }

    setShouldLoad(true);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const root = document.getElementById("lifewise-demo-modal");
      if (!root) return;
      const focusable = root.querySelectorAll<HTMLElement>(
        'button, [href], video, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open || !shouldLoad) return;
    const el = videoRef.current;
    if (!el) return;

    const tryPlay = async () => {
      try {
        el.muted = true;
        el.playsInline = true;
        await el.play();
      } catch {
        // Autoplay blocked — user can tap play
      }
    };

    const t = window.setTimeout(() => void tryPlay(), 50);
    return () => window.clearTimeout(t);
  }, [open, shouldLoad]);

  const onTimeUpdate = useCallback(() => {
    const el = videoRef.current;
    if (!el || !el.duration || hit75Ref.current) return;
    if (el.currentTime / el.duration >= 0.75) {
      hit75Ref.current = true;
      trackVideo75();
    }
  }, []);

  const onPlay = useCallback(() => {
    if (playedRef.current) return;
    playedRef.current = true;
    trackVideoPlay();
  }, []);

  if (!open) return null;

  return (
    <div
      id="lifewise-demo-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-6"
      onClick={() => onCloseRef.current()}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id={titleId} className="sr-only">
          LifeWise 20-second demo
        </h2>
        <button
          ref={closeRef}
          type="button"
          onClick={() => onCloseRef.current()}
          aria-label="Close demo video"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/55 text-white ring-1 ring-white/20 backdrop-blur hover:bg-black/75"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-video w-full bg-slate-900">
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            poster={DEMO_POSTER}
            controls
            playsInline
            muted
            preload={shouldLoad ? "metadata" : "none"}
            onPlay={onPlay}
            onTimeUpdate={onTimeUpdate}
          >
            {shouldLoad ? <source src={DEMO_SRC} type="video/mp4" /> : null}
            Your browser does not support the video tag.
          </video>
        </div>

        <p id={descId} className="px-4 py-3 text-center text-xs text-slate-300 sm:text-sm">
          LifeWise demo · tap unmute if you want sound
        </p>
      </div>
    </div>
  );
}
