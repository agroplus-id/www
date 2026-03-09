"use client";

import Button from "../buttons/Button";
import ChevronRight from "../icons/ChevronRight";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="features" className="section-bg h-fit bg-agro-green-100 py-16">
      <div className="section-content">
        <div className="bg-linear-to-br from-[#f5f5f5] to-[#98bb63] rounded-[50px] shadow-2xl overflow-hidden relative min-h-[860px] flex flex-col lg:flex-row">
          {/* Left content */}
          <div className="flex flex-col flex-1 z-10 p-10 lg:pl-10 lg:pt-[108px] lg:pb-10">
            {/* Heading + Logo*/}
            <div className="relative h-11 mb-[91px]">
              <h2 className="text-agro-green-500 font-heading font-bold text-[70px] leading-[44px] tracking-tight whitespace-nowrap">
                Project kami
              </h2>
              <Image
                src="/images/logo_project.svg"
                alt="Ferroir"
                width={220}
                height={44}
                className="absolute top-0 left-[390px] object-contain object-left"
              />
            </div>

            <div className="text-agro-green-500 space-y-5 text-xl max-w-[680px]">
              <p>
                Kami percaya bahwa inovasi selalu berawal dari masalah sederhana yang
                dialami manusia. Bagi kami, itu dimulai dari industri kopi.
              </p>
              <p>
                Ferroir adalah langkah awal kami untuk menghadirkan teknologi yang
                membantu pelaku industri kopi memahami kualitas kopi mereka dengan lebih
                mudah dan akurat. Melalui analisis citra dan pemrosesan data, Ferroir
                mampu mengevaluasi karakteristik biji kopi secara cepat dan konsisten,
                membantu pengambilan keputusan yang lebih tepat dalam proses grading dan
                quality control.
              </p>
              <p>
                Ferroir bukan sekadar alat analisis, ini adalah bukti bahwa teknologi
                dapat menjadi mitra cerdas yang meningkatkan transparansi, efisiensi,
                dan kualitas di sepanjang rantai nilai kopi.
              </p>
            </div>

            <div className="mt-auto pt-8">
              <Button
                href="#contacts"
                className="!bg-agro-green-400 !text-agro-green-200"
                rightIcon={<ChevronRight color="#deffad" />}
              >
                Lihat Lebih Banyak
              </Button>
            </div>
          </div>

          <div className="lg:w-[461px] relative min-h-[400px] lg:min-h-0">
            <Image
              src="/images/project.png"
              alt="Ferroir project"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
