"use client";
import { useEffect, useRef, useState } from "react";

const useScrollProgress = (): {
  progress: number;
  elementRef: React.RefObject<HTMLDivElement | null>;
} => {
  const [progress, setProgress] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let rafId: number | null = null;

    const handleScroll = (): void => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate how much of the element has been scrolled through
        const totalScrollableDistance = rect.height - viewportHeight;

        // If element is smaller than viewport, progress is either 0 or 1
        if (totalScrollableDistance <= 0) {
          const isFullyVisible = rect.top >= 0 && rect.bottom <= viewportHeight;
          setProgress(isFullyVisible ? 1 : 0);
        } else {
          // Normal case: element is taller than viewport
          const scrolledDistance = -rect.top;
          const progress = Math.max(
            0,
            Math.min(1, scrolledDistance / totalScrollableDistance),
          );
          setProgress(progress);
        }

        rafId = null;
      });
    };

    // Initial calculation
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return { progress, elementRef };
};

// Usage in your component
const ScrollProgressComponent: React.FC = () => {
  const { progress, elementRef } = useScrollProgress();

  return (
    <div>
      <div className="sticky top-20 left-0 progress-indicator">
        Scroll Progress: {(progress * 100).toFixed(1)}%
      </div>

      <div
        ref={elementRef}
        className="content-to-track"
        style={{
          height: "50vh",
          background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
        }}
      >
        {/* Your content here */}
        <div className="fixed top-40 left-0 z-50" style={{ padding: "20px" }}>
          <h2>Track this content</h2>
          <p>Scroll progress: {progress.toFixed(3)}</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressComponent;
