"use client";

import { useMemo } from "react";
import Carousel from "../carousel/Carousel";
import HRCard from "../HRCard";

export default function HRSection() {
  const deptData: DeptData[] = useMemo(
    () => [
      {
        image: "/images/departements/group/CTO.png",
        title: "Technical Officer",
        description:
          "Departemen CTO menghadirkan inovasi yang nyata dan berdampak dari kecerdasan buatan hingga pengembangan sistem digital memastikan setiap teknologi yang dikembangkan memperkuat daya saing AGROPLUS di era modern.",
        gradient: ["#58CDEE", "#4DABC5"],
      },
      {
        image: "/images/departements/group/CFO.png",
        title: "Financial Officer",
        description:
          "Departemen CFO menciptakan dampak yang terukur pada setiap tindakan AGROPLUS. Mulai dari stabilitas keuangan hingga ketepatan hukum  memastikan setiap langkah selaras dengan visi pertumbuhan perusahaan kami.",
        gradient: ["#ED5867", "#C54D59"],
      },
      {
        image: "/images/departements/group/CMO.png",
        title: "Marketing Officer",
        description:
          "Departemen CMO berkomitmen untuk menciptakan strategi pemasaran yang berdampak, kreatif, dan terukur. Kami memastikan setiap kampanye berkontribusi nyata terhadap pertumbuhan AGROPLUS dan peningkatan kepercayaan publik terhadap inovasi di Starup kami",
        gradient: ["#4CCC77", "#48B76D"],
      },
      // {
      //   image: "/images/departements/group/COO.png",
      //   title: "Operational Officer",
      //   description:
      //     "Departemen COO memastikan AGROPLUS terus bergerak dengan keunggulan operasional, kolaborasi strategis, dan efisiensi berkelanjutan. Dengan fokus pada eksekusi yang presisi, manajemen sumber daya yang efektif, dan kemitraan yang saling menguatkan, kami menciptakan fondasi kokoh bagi pertumbuhan jangka panjang perusahaan.",
      //   gradient: ["#B477D6", "#994DC5"],
      // },
      // {
      //   image: "/images/departements/group/CEO.png",
      //   title: "Executive Officer",
      //   description:
      //     "Departemen COO memastikan AGROPLUS terus bergerak dengan keunggulan operasional, kolaborasi strategis, dan efisiensi berkelanjutan. Dengan fokus pada eksekusi yang presisi, manajemen sumber daya yang efektif, dan kemitraan yang saling menguatkan, kami menciptakan fondasi kokoh bagi pertumbuhan jangka panjang perusahaan.",
      //   gradient: ["#D3BB7E", "#C5A34D"],
      // },
    ],
    [],
  );

  return (
    <section
      id="hr"
      className="section-bg bg-agro-green-600 text-agro-green-100"
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
            Agroplus bukanlah hasil kerja satu orang saja, melainkan buah dari
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
