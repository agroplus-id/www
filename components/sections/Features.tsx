"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import VideoPlayer from "../VideoPlayer";

const textContent = [
  {
    h: "Marketplace untuk Semua Kebutuhan Pertanian yang Anda Butuhkan",
    p: "Temukan berbagai kebutuhan pertanian dalam satu tempat, mulai dari pupuk, bibit, hingga pestisida berkualitas. Fitur marketplace memudahkan petani mendapatkan produk terpercaya dengan harga yang kompetitif dan pengiriman yang cepat.",
    video: "/videos/demo/marketplace.mp4",
  },
  {
    h: "Konsultasi Langsung dengan Ahli Pertanian Mengenai Tanaman Anda",
    p: "Dapatkan jawaban cepat dan akurat dari para pakar. Melalui fitur konsultasi, petani dapat berdiskusi langsung dengan ahli pertanian untuk memperoleh solusi dan saran terbaik bagi tanaman mereka.",
    video: "/videos/demo/konsul.mp4",
  },
  {
    h: "Analisis Tanaman dan Rekomendasi menggunakan Computer Vision",
    p: "Deteksi kondisi tanaman hanya dengan satu foto. Teknologi AI dan computer vision Agroplus membantu mengidentifikasi penyakit serta kekurangan nutrisi, lalu memberikan rekomendasi pemupukan dan perawatan yang disesuaikan dengan kondisi cuaca dan lingkungan.",
    video: "/videos/demo/scan-tanaman.mp4",
  },
  {
    h: "Lelang Hasil Panen Anda Langsung Secara Real-time",
    p: "Tingkatkan nilai jual hasil panen melalui sistem lelang digital yang transparan dan efisien. Petani dapat menawarkan hasil panennya langsung dari aplikasi dan terhubung dengan pembeli secara real-time, tanpa perantara dan tanpa batas lokasi.",
    video: "/videos/demo/lelang.mp4",
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="section-bg h-fit bg-agro-green-100">
      <div className="section-content flex flex-col lg:flex-row py-16 gap-8 h-fit lg:h-screen w-full text-agro-green-600">
        {/*phone section*/}
        <div className="flex flex-2 w-full h-full section-content items-center justify-center">
          <div className="aspect-9/18.5 rounded-[50px] bg-white w-fit border-8 shadow-2xl border-agro-green-600 overflow-clip">
            <VideoPlayer
              src={textContent[activeIndex].video}
              controls={false}
              muted
              loop
              autoPlay
              height={720}
              width={333}
              className="aspect-9/18.5 w-2xs"
            />
          </div>
        </div>
        {/*text  section*/}
        <div className="flex flex-3 flex-col gap-12 justify-center">
          {textContent.map(({ h, p }, i) => {
            return (
              <motion.div
                key={i}
                layout
                transition={{ layout: { duration: 0.1, ease: "easeInOut" } }}
                className={`flex flex-col gap-6`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <h2 className="heading-2">{h}</h2>
                <AnimatePresence initial={false}>
                  {activeIndex == i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: 0 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 0 }}
                      transition={{ duration: 0.1, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p>{p}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
