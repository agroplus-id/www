"use client";

import { useMemo } from "react";
import Carousel from "../carousel/Carousel";
import HRCard from "../HRCard";

export default function HRSection() {
  const deptData: DeptData[] = useMemo(
    () => [
      {
        image: "/images/departements/group/CTO.svg",
        title: "Technical Officer",
        description:
          "Departemen CTO menghadirkan inovasi yang nyata dan berdampak dari kecerdasan buatan hingga pengembangan sistem digital memastikan setiap teknologi yang dikembangkan memperkuat daya saing AGROPLUS di era modern.",
        gradient: ["#C5A34D", "#D3BB7E"],
        metrics: {
          left: {
            value: "97%",
            label: "Tingkat Kepuasan Anggota Kami"
          },
          right: {
            value: "45 hari",
            label: "Waktu pengembangan sistem dapat diselesaikan"
          }
        }
      },
      {
        image: "/images/departements/group/CFO.png",
        title: "Chief Financial Officer",
        description:
          "Departemen CFO menciptakan dampak yang terukur pada setiap tindakan AGROPLUS. Mulai dari stabilitas keuangan hingga analisis keuangan yang mendalam, memastikan setiap langkah selaras dengan visi pertumbuhan perusahaan kami.",
        gradient: ["#C5A34D", "#D3BB7E"],
        metrics: {
          left: {
            value: "6+",
            label: "Porsi hukum anak kontak profesional"
          },
          right: {
            value: "3+",
            label: "Standar proyeksi finansial & kebijakan internal"
          }
        }
      },
      {
        image: "/images/departements/group/CMO.png",
        title: "Chief Marketing Officer",
        description:
          "Departemen CMO berkomitmen untuk menciptakan strategi pemasaran yang berdampak, kreatif, dan terukur. Kami memastikan setiap kampanye berkontribusi nyata terhadap pertumbuhan AGROPLUS dan peningkatan kepercayaan publik terhadap inovasi di Startup kami",
        gradient: ["#C5A34D", "#D3BB7E"],
        metrics: {
          left: {
            value: "10+",
            label: "Kampanye Pemasaran Strategis"
          },
          right: {
            value: "30k",
            label: "Views sebagai kampanye kami terbanyak"
          }
        }
      },
      {
        image: "/images/departements/group/COO.png",
        title: "Operational Officer",
        description:
          "Departemen COO memastikan AGROPLUS terus bergerak dengan keunggulan operasional, kolaborasi yang baik dan efisiensi berkelanjutan. Dengan fokus pada eksekusi yang presisi, manajemen sumber daya yang efektif, dan kemitraan yang saling menguatkan, kami menciptakan fondasi kokoh bagi pertumbuhan jangka panjang perusahaan.",
        gradient: ["#C5A34D", "#D3BB7E"],
        metrics: {
          left: {
            value: "8+",
            label: "Mitra strategis yang mendukung eksekusi optimal"
          },
          right: {
            value: "16+",
            label: "Karyawan profesional kunci dalam operasi"
          }
        }
      },
      {
        image: "/images/departements/group/CEO1.svg",
        title: "Executive Officer",
        description:
          "Sebagai Executive Officer berperan menjadi penggerak utama arah strategis dan keberlanjutan bisnis AgroPlus. Posisi ini bertanggung jawab dalam pengambilan keputusan strategis, membangun kemitraan, serta memastikan seluruh lini organisasi berjalan selaras dengan visi dan misi perusahaan. Executive Officer juga berfokus pada pengembangan model bisnis, kepemimpinan tim, serta representasi AgroPlus di hadapan mitra, investor, dan pemangku kepentingan.",
        gradient: ["#C5A34D", "#D3BB7E"],
      },
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
