"use client";

import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import VolumeUp from "./icons/VolumeUp";
import VolumeDown from "./icons/VolumeDown";

export default function VideoPlayer(props: ComponentPropsWithoutRef<"video">) {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setMuted] = useState(true);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            player.play().catch(() => {});
          } else {
            player.pause();
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(player);
    return () => {
      observer.disconnect();
    };
  }, []);

  const muteToggle = useCallback(() => {
    setMuted(!isMuted);
  }, [isMuted]);

  return (
    <div className="relative">
      <video
        ref={playerRef}
        className="-z-20"
        muted={isMuted}
        {...props}
      ></video>
      <button
        onClick={muteToggle}
        className="absolute bottom-4 left-4 z-20 text-agro-green-100 rounded-full bg-black/50 p-2 opacity-30 hover:opacity-100 active:bg-agro-green-300/50"
      >
        {!isMuted ? <VolumeUp size={20} /> : <VolumeDown size={20} />}
      </button>
    </div>
  );
}
