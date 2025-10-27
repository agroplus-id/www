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
          <div id="comprof-header" className="flex flex-col lg:flex-row gap-4">
            <h2 className="flex flex-1 heading-2">
              Mitra yang Berperan Bersama Kami dalam Mewujudkan Layanan Terbaik
              bagi Petani Indonesia
            </h2>
            <p className="flex flex-1">
              Agroplus tidak dapat mewujudkan misi yang kami cita-citakan
              sendirian. Dukungan dari berbagai institusi dan mitra strategis
              menjadi bagian penting dalam perjalanan kami untuk menghadirkan
              layanan terbaik bagi petani di seluruh Indonesia. Melalui
              kolaborasi ini, Agroplus terus memperkuat komitmennya dalam
              membangun ekosistem pertanian yang lebih inklusif, efisien, dan
              berkelanjutan.
            </p>
          </div>
          <div
            className="marquee-container"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 20%, black 20%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 20%, black 20%, black 90%, transparent)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            {partners.map((v, i) => (
              <div className="relative marquee-item" key={i}>
                <Image
                  src={v.path}
                  alt={v.name}
                  style={{ objectFit: "contain" }}
                  fill
                  sizes="240px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>
        {`
          .marquee-container {
            --item-height: 10rem;
            --item-width: 12rem;
            --n: ${partners.length};
            --d: 12s;

            display: flex;
            flex-direction: row;
            gap: 2rem;
            width: 100%;
            max-width: calc(var(--item-width) * var(--n));
            overflow: hidden;
            padding-block: 5px;
            height: var(--item-height);
          }

          .marquee-item {
            width: var(--item-width);
            height: var(--item-height);
            flex-shrink: 0;

            offset: shape(from calc(var(--item-width)/-2) 50%, hline by calc(sibling-count() * var(--item-width) * 1.15));
            animation: x var(--d) linear infinite calc(-1*sibling-index()*var(--d)/sibling-count());
            will-change: transform;
          }

          @keyframes x {
            0% {offset-distance: 0%}
            to {offset-distance: 100%}
          }
          `}
      </style>
    </>
  );
}
