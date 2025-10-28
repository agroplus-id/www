"use client";

import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import type { EmblaEventType } from "embla-carousel";

const CarouselIndicator = ({ emblaApi }: { emblaApi?: EmblaCarouselType }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [snapList, setSnapList] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setSnapList(emblaApi.scrollSnapList());
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("init", onInit).on("reInit", onInit).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollIndicators = snapList.map((_, i) => {
    return (
      <button
        key={i}
        className={`${activeIndex === i ? "bg-agro-green-100 w-6" : "bg-agro-green-100/50 w-2"} h-2 rounded-full transition-all duration-150`}
      />
    );
  });
  return (
    <div className="flex flex-row gap-x-1 justify-center">
      {scrollIndicators}
    </div>
  );
};

type CarouselProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Carousel({ children, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, containScroll: false },
    [Autoplay()],
  );
  const tweenFactor = useRef<number>(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType) => {
    tweenNodes.current = emblaApi.slideNodes().map((slide) => {
      return slide.querySelector(".embla__slide__children") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = 0.1 * emblaApi?.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScroll = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIdx) => {
        let diffToTarget = Math.abs(scrollSnap - scrollProgress);
        const slidesInSnap = engine.slideRegistry[snapIdx];

        slidesInSnap.forEach((slideIdx) => {
          if (isScroll && !slidesInView.includes(slideIdx)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIdx === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1) {
                  diffToTarget = Math.abs(scrollSnap - (1 + scrollProgress));
                }
                if (sign === 1) {
                  diffToTarget = Math.abs(scrollSnap + (1 - scrollProgress));
                }
              }
            });
          }

          const tweenValue = 1 - tweenFactor.current * diffToTarget;
          const scale = Math.min(Math.max(tweenValue, 0), 1);
          const tweenNode = tweenNodes.current[slideIdx];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale)
      .on("select", tweenScale);

    emblaApi?.reInit();

    return () => {
      emblaApi
        .off("reInit", setTweenNodes)
        .off("reInit", setTweenFactor)
        .off("reInit", tweenScale)
        .off("scroll", tweenScale)
        .off("slideFocus", tweenScale)
        .off("select", tweenScale);
    };
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes]);

  const slides = React.Children.map(children, (child, i) => (
    <div
      key={i}
      className={`embla__slide flex-[0_0_80%] min-w-0 translate-x-0 translate-y-0 translate-z-0`}
    >
      <div className="embla__slide__children">{child}</div>
    </div>
  ));

  return (
    <>
      <div
        className={`flex flex-col gap-8 justif-start ${className}`}
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 20%, black 20%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 20%, black 20%, black 90%, transparent)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex flex-row touch-pan-y touch-pinch-zoom">
            {slides}
          </div>
        </div>
        <CarouselIndicator emblaApi={emblaApi} />
      </div>
    </>
  );
}
