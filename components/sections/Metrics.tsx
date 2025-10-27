"use client";

import Image from "next/image";
import { useMemo } from "react";

export default function MetricsSection() {
  const metrics = useMemo(
    () => [
      {
        header: "574+ Ha",
        descrption: "Lahan telah diadopsi Agroplus",
        imagePath: "/images/rice-fields.jpg",
      },
      {
        header: "97%",
        descrption: "Akurasi deteksi penyakit pada tanaman",
        imagePath: "/images/woman-farmer.jpg",
      },
      {
        header: "8 Institiusi",
        descrption: "Telah bekerjasama dengan Agroplus",
        imagePath: "/images/handshake.jpg",
      },
    ],
    [],
  );

  return (
    <section
      id="metrics"
      className="section-bg bg-agro-green-600 text-agro-green-100"
    >
      <div className="section-content flex flex-col gap-20 py-16 items-center">
        <div className="flex flex-col gap-6 max-w-3xl">
          <h2 className="heading-2 text-center">
            Perkembangan dan Pertumbuhan Kami bersama Para Petani Hingga Saat
            ini
          </h2>
          <p className="text-center">
            Agroplus lahir dari tekad untuk memajukan pertanian Indonesia
            melalui inovasi teknologi. Dengan menghadirkan solusi terpadu dari
            hulu hingga hilir, Agroplus membantu petani bertransformasi menuju
            pertanian yang lebih cerdas, efisien, dan berkelanjutan.
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
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 size-full bg-linear-to-t from-black from-5% via-black/60 via-25% to-black/0 to-50%" />
              <div className="text-agro-green-100 flex flex-col gap-2 z-20">
                <h3 className="font-bold text-xl lg:text-4xl w-full text-agro-green-300">
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
