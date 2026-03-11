"use client";

import { useMemo } from "react";
import Carousel from "../carousel/Carousel";
import HRCard from "../HRCard";

export default function HRSection() {
  const deptData: DeptData[] = useMemo(
    () => [
      {
        image: "/images/departements/group/dep_research.svg",
        modalImage: "/images/rnd.svg",
        title: "RnD Division",
        description:
          "Divisi R&D berfokus pada riset dan pengembangan inovasi untuk menciptakan solusi pertanian berbasis teknologi. Tim ini memastikan setiap produk AgroPlus lahir dari riset yang kuat, relevan, dan berdampak nyata bagi produktivitas petani.",
      },
      {
        image: "/images/departements/group/dep_finance.svg",
        modalImage: "/images/finance.svg",
        title: "Finance Division",
        description:
          "Divisi Financial mengelola strategi keuangan perusahaan, mulai dari perencanaan hingga pengawasan anggaran. Tujuannya memastikan pertumbuhan AgroPlus berjalan stabil, transparan, dan berkelanjutan.",
      },
      {
        image: "/images/departements/group/CTO.svg",
        modalImage: "/images/tech.svg",
        title: "Technology Division",
        description:
          "Divisi Technology membangun dan mengembangkan sistem digital AgroPlus, mulai dari pengelolaan data hingga pengembangan platform berbasis teknologi. Tim ini menjadi motor utama transformasi pertanian melalui inovasi digital.",
      },
      {
        image: "/images/departements/group/dep_marketing.svg",
        modalImage: "/images/marketing.svg",
        title: "Marketing Division",
        description:
          "Divisi Marketing bertanggung jawab memperluas jangkauan dan dampak AgroPlus melalui strategi komunikasi, branding, dan kampanye pemasaran yang kreatif dan efektif.",
      },
      {
        image: "/images/departements/group/dep_legal_operation.svg",
        modalImage: "/images/legalandoperation.svg",
        title: "Legal, Logistic & Operational Division",
        description:
          "Divisi Legal & Operational memastikan seluruh aktivitas perusahaan berjalan sesuai regulasi serta didukung sistem operasional yang efisien dan terstruktur.",
      },
      {
        image: "/images/departements/group/dep_steering.svg",
        modalImage: "/images/steering.svg",
        title: "Steering Comitee",
        description:
          "Steering Committee berperan sebagai penasihat strategis yang memberikan arahan, pengalaman, dan perspektif untuk memastikan AgroPlus berkembang secara terarah dan berkelanjutan.",
      },
    ],
    [],
  );

  return (
    <section
      id="hr"
      className="section-bg text-agro-green-500"
      style={{ background: "linear-gradient(122.07deg, #98BB63 0%, #F1FFDD 100%)" }}
    >
      <div className="flex flex-col section-content overflow-visible py-16 gap-20">
        <div
          id="comprof-header"
          className="flex flex-col lg:flex-row lg:justify-between gap-4"
        >
          <h2 className="heading-2 w-full lg:max-w-xl">
            Individu-Individu yang Berperan di Balik Terwujudnya Agroplus
          </h2>
          <p className="w-full lg:max-w-sm">
            <span className="font-bold">Agroplus</span> bukanlah hasil kerja satu orang saja, melainkan buah dari
            kolaborasi berbagai individu yang memiliki visi dan tujuan yang
            sama.
          </p>
        </div>
        <Carousel className="-mx-4 xl:-mx-12">
          {deptData.map((d, i) => (
            <HRCard key={i} {...d} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
