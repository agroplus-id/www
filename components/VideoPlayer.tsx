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
        muted={isMuted}
        playsInline
        {...props}
        controls={false}
      >
        {props.children}
      </video>
      {props.controls && (
        <button
          onClick={muteToggle}
          className={`absolute bottom-4 left-4 text-agro-green-100 rounded-full bg-black/50 p-2 hover:opacity-100 active:bg-agro-green-300/50 ${!isMuted ? "opacity-100" : "opacity-30"}`}
        >
          {!isMuted ? <VolumeUp size={20} /> : <VolumeDown size={20} />}
        </button>
      )}
    </div>
  );
}
