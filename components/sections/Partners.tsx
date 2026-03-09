"use client";
import { useMemo } from "react";
import Image from "next/image";

export default function PartnersSection() {
  const partners = useMemo(
    () => [
      {
        name: "Gerakan Nasioinal 1000 Startup Digital",
        path: "/images/partners/1000-startup.png",
      },

      {
        name: "British Embassy Jakarta",
        path: "/images/partners/british-embassy.png",
      },
      {
        name: "Instellar Impact",
        path: "/images/partners/instellar-impact.png",
      },
      {
        name: "DIKST UB",
        path: "/images/partners/DIKST-transparent.png",
      },
      {
        name: "KOMDIGI",
        path: "/images/partners/KOMDIGI.png",
      },
      {
        name: "UK International Development",
        path: "/images/partners/UKID.png",
      },
      {
        name: "UK Indonesia Tech HUB",
        path: "/images/partners/UKID-tech-hub.png",
      },
    ],
    [],
  );

  return (
    <>
      <section
        id="partners"
        className="section-bg bg-agro-green-100 text-agro-green-600"
      >
        <div className="section-content py-16 flex flex-col gap-16 items-center">
          <div id="comprof-header" className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <h2 className="flex-1 heading-2">
              Mitra yang Berperan Bersama Kami dalam Mewujudkan Layanan Terbaik
              bagi Petani Indonesia
            </h2>
            <p className="flex-1">
              <span className="font-bold">Agroplus</span> tidak dapat mewujudkan misi yang kami cita-citakan
              sendirian. Dukungan dari berbagai institusi dan mitra strategis
              menjadi bagian penting dalam perjalanan kami untuk menghadirkan
              layanan terbaik bagi petani di seluruh Indonesia. Melalui
              kolaborasi ini, <span className="font-bold">Agroplus</span> terus memperkuat komitmennya dalam
              membangun ekosistem pertanian yang lebih inklusif, efisien, dan
              berkelanjutan.
            </p>
          </div>
          <div
            className="marquee-outer"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="marquee-track">
              {[...partners, ...partners].map((v, i) => (
                <div className="marquee-item" key={i}>
                  <Image
                    src={v.path}
                    alt={v.name}
                    className="object-contain"
                    loading="lazy"
                    fill
                    sizes="192px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style>
        {`
          .marquee-outer {
            width: 100%;
            overflow: hidden;
          }

          .marquee-track {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            width: max-content;
            animation: marquee 28s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          .marquee-item {
            position: relative;
            width: 12rem;
            height: 8rem;
            flex-shrink: 0;
          }

          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          `}
      </style>
    </>
  );
}
