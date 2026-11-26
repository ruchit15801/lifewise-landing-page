"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { VideoModal } from "@/components/VideoModal";
import { trackVideo75, trackVideoPlay } from "@/lib/analytics";

const DEMO_SRC = "/videos/lifewise-demo.mp4";
const DEMO_POSTER = "/videos/lifewise-demo-poster.jpg";

export function DemoVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [muted, setMuted] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const playedRef = useRef(false);
  const hit75Ref = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Lazy-attach src only when section nears viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onTimeUpdate = useCallback(() => {
    const el = videoRef.current;
    if (!el || !el.duration || hit75Ref.current) return;
    if (el.currentTime / el.duration >= 0.75) {
      hit75Ref.current = true;
      trackVideo75();
    }
  }, []);

  const onPlay = useCallback(() => {
    setPlaying(true);
    setShowPoster(false);
    if (playedRef.current) return;
    playedRef.current = true;
    trackVideoPlay();
  }, []);

  const onPause = useCallback(() => setPlaying(false), []);

  const togglePlay = async () => {
    const el = videoRef.current;
    if (!el) return;
    setShouldLoad(true);
    if (el.paused) {
      try {
        el.muted = muted;
        await el.play();
      } catch {
        // user gesture may still fail on some browsers
      }
    } else {
      el.pause();
    }
  };

  const toggleMute = () => {
    const el = videoRef.current;
    const next = !muted;
    setMuted(next);
    if (el) el.muted = next;
  };

  return (
    <SectionShell
      id="demo"
      eyebrow="20-sec demo"
      title="See LifeWise in one short film."
      subtitle="Papa's reminder, bill scan, Family Hub — watch how the day changes."
      className="py-5 sm:py-7"
    >
      <Reveal>
        <div
          ref={sectionRef}
          className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-950 shadow-premium dark:border-white/10"
        >
          <div className="relative aspect-video w-full bg-slate-900">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={DEMO_POSTER}
              playsInline
              muted={muted}
              preload={shouldLoad ? "metadata" : "none"}
              onPlay={onPlay}
              onPause={onPause}
              onTimeUpdate={onTimeUpdate}
              onEnded={() => {
                setPlaying(false);
                setShowPoster(true);
              }}
            >
              {shouldLoad ? <source src={DEMO_SRC} type="video/mp4" /> : null}
            </video>

            {showPoster ? (
              <Image
                src={DEMO_POSTER}
                alt="LifeWise — Your Money. Your Life. Your Family. One Place."
                fill
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="pointer-events-none object-cover"
              />
            ) : null}

            {!playing ? (
              <button
                type="button"
                onClick={() => void togglePlay()}
                aria-label="Play LifeWise demo"
                className={
                  showPoster
                    ? "group absolute inset-0 flex items-end justify-center bg-transparent pb-3 transition-colors hover:bg-slate-950/[0.03] sm:pb-5"
                    : "group absolute inset-0 grid place-items-center bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-transparent"
                }
              >
                <span
                  className={
                    showPoster
                      ? "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-xs font-bold text-white shadow-[0_12px_30px_rgba(79,70,229,0.35)] ring-2 ring-white/90 transition group-hover:scale-[1.04] sm:px-6 sm:py-3 sm:text-sm"
                      : "inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-xl ring-1 ring-white/40 transition group-hover:scale-[1.03]"
                  }
                >
                  <Play
                    className={
                      showPoster
                        ? "h-4 w-4 fill-current text-white sm:h-5 sm:w-5"
                        : "h-5 w-5 fill-current text-indigo-600"
                    }
                  />
                  Play demo
                </span>
              </button>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-slate-950/95 px-3 py-2.5 sm:px-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => void togglePlay()}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-white/10 px-3.5 text-sm font-semibold text-white hover:bg-white/15"
                aria-label={playing ? "Pause demo" : "Play demo"}
              >
                {playing ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4 fill-current" />
                )}
                {playing ? "Pause" : "Play"}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/15"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                videoRef.current?.pause();
                setModalOpen(true);
              }}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Maximize2 className="h-4 w-4" />
              Full screen
            </button>
          </div>
        </div>
      </Reveal>

      <VideoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </SectionShell>
  );
}
