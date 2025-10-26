"use client";

import FAQ from "@/dtos/FAQ";
import { useMemo, useState } from "react";
import ArrowDown from "../icons/ArrowDown";
import { AnimatePresence, motion } from "motion/react";

export default function FAQSection() {
  const faqContent: FAQ[] = useMemo(
    () => [
      {
        question: "Aplikasi apa sih Agroplus?",
        answer:
          "Agroplus adalah platform digital berbasis kecerdasan buatan (AI) yang membantu petani meningkatkan hasil dan efisiensi pertanian. Melalui teknologi pengenalan citra (image recognition), Agroplus mampu mendeteksi hama, penyakit, dan kekurangan nutrisi tanaman hanya dengan foto daun, lalu memberikan rekomendasi pupuk dan pestisida yang sesuai.",
      },
      {
        question: "Apa saja yang sudah Agroplus lakukan?",
        answer:
          "Agroplus telah mencapai berbagai pencapaian penting dalam pengembangan teknologi pertanian digital. Kami telah bermitra dengan lebih dari 50 petani di wilayah Karangploso dan Lamongan, menjalankan uji coba lapangan secara langsung untuk memastikan efektivitas sistem deteksi tanaman berbasis AI. Selain itu, Agroplus juga berhasil mengikuti program inkubasi Innovation Lab Kedutaan Inggris melalui Instellar dan DIKST UB melalui Brawijaya Start up Academy, yang memperkuat validasi model bisnis dan inovasi kami. Dukungan dari Wakil Menteri Dikti Nasional, Prof. Fauzan, turut menjadi bukti komitmen kami dalam membangun solusi pertanian yang berkelanjutan. ",
      },
      {
        question: "Apa saja fitur Agroplus?",
        answer:
          "Agroplus memiliki beberapa fitur utama yang dirancang untuk membantu petani secara praktis dan efisien. Fitur Scan Daun memungkinkan pengguna mendeteksi hama, penyakit, dan kekurangan nutrisi hanya dengan memotret daun tanaman. Fitur Rekomendasi Pupuk dan Pestisida memberikan saran dosis dan jenis yang sesuai berdasarkan hasil analisis. Selain itu, terdapat Monitoring Lahan untuk memantau kesehatan tanaman dari waktu ke waktu, serta Konsultasi Ahli yang menghubungkan petani dengan pakar pertanian. Ke depan, Agroplus juga akan menghadirkan fitur Marketplace agar petani dapat membeli kebutuhan pertanian langsung dari sumber terpercaya.",
      },
      {
        question: "Bagaimana cara kerja fitur scan pada Agroplus?",
        answer:
          "Proses scan di Agroplus didasarkan pada teknologi kecerdasan buatan (AI) yang menggunakan model machine learning YOLO-V8. Model ini telah dilatih dengan ribuan dataset gambar daun tanaman yang mencakup berbagai kondisi kesehatan tanaman. Data tersebut dikombinasikan dengan hasil penelitian akademik dan uji lapangan bersama petani untuk memastikan tingkat akurasi tinggi dalam mendeteksi hama, penyakit, serta kekurangan nutrisi pada tanaman.",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-bg bg-agro-green-100">
      <div className="section-content text-agro-green-600 flex flex-col gap-20 py-16">
        <div className="flex flex-col gap-6 max-w-md">
          <h2 className="heading-2">Frequently Asked Questions</h2>
          <p>
            Berikut ini adalah beberapa pertanyaan yang sering ditanyakan
            mengenai layanan kami
          </p>
        </div>
        <div className="flex flex-col gap-10 divide-y-2 divide-solid divide-agro-green-600">
          {faqContent.map((q, i) => (
            <motion.div
              layout
              key={i}
              transition={{ layout: { duration: 0.1, ease: "easeInOut" } }}
              className="flex flex-col relative gap-4 pb-8 h-fit"
            >
              <button
                className="absolute -right-4 -top-4 p-4"
                onClick={() => setActiveIndex(i)}
              >
                <ArrowDown size={36} />
              </button>
              <h3 className="text-2xl font-semibold">{q.question}</h3>
              <AnimatePresence>
                {activeIndex == i && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, height: 0, y: 0 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 0 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p>{q.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
