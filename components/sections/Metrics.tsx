"use client";

import Image from "next/image";
import { useMemo } from "react";

export default function MetricsSection() {
  const metrics = useMemo(
    () => [
      {
        header: "1st",
        descrption: "Platform nutrisi tanaman lewat foto daun di Indonesia.",
        imagePath: "/images/rice-fields.jpg",
      },
      {
        header: "77%",
        descrption: "Akurasi dalam pendeteksian spesies kopi lewat daun",
        imagePath: "/images/woman-farmer.jpg",
      },
      {
        header: "10.000+",
        descrption: "Dataset tanaman kopi untuk AI kami yang terlatih khusus untuk bidang pertanian",
        imagePath: "/images/handshake.jpg",
      },
    ],
    [],
  );

  return (
    <section
      id="metrics"
      className="section-bg text-agro-green-500"
      style={{ background: "linear-gradient(122.07deg, #98BB63 0%, #F1FFDD 100%)" }}
    >
      <div className="section-content flex flex-col gap-20 py-16 items-center">
        <div className="flex flex-col gap-6 max-w-3xl">
          <h2 className="heading-2 text-center">
            Perkembangan dan Pertumbuhan AgroPlus dalam Mendukung Industri Kopi
            Indonesia
          </h2>
          <p className="text-center">
            <span className="font-bold">AgroPlus</span> hadir untuk memperkuat sektor hulu industri kopi melalui teknologi
            yang andal dan mudah diakses. Dengan menghadirkan solusi yang membantu
            memahami tanaman, meningkatkan produktivitas, dan mendukung
            pengelolaan budidaya yang lebih efisien, AgroPlus berupaya mendorong
            pertumbuhan industri kopi yang lebih berkelanjutan.
          </p>
        </div>
        <div className="grid grid-cols-2 justify-items-stretch lg:flex lg:flex-row gap-4 justify-center w-full">
          {metrics.map((v, i) => (
            <div
              key={i}
              className={`${i == 0 && "col-span-2 h-62 lg:h-fit"} aspect-3/5 lg:aspect-9/16 relative flex rounded-3xl lg:rounded-4xl overflow-clip w-full p-6 lg:p-10 lg:min-w-2xs lg:max-w-xs flex-col justify-end box-shadow shadow-xl`}
            >
              <Image
                src={v.imagePath}
                alt={v.descrption}
                sizes="720px"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 size-full bg-linear-to-t from-black from-5% via-black/60 via-25% to-black/0 to-50%" />
              <div className="text-agro-green-100 flex flex-col gap-2 z-20">
                <h3 className="font-bold text-xl lg:text-4xl w-full text-agro-green-100">
                  {v.header}
                </h3>
                <p className="w-full text-xs lg:text-lg">{v.descrption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
