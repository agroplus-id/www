const STAFF_DATA: Record<string, Staff> = {
  // Executive Officer
  gabriel: {
    image: "/images/staff/gabriel.png",
    name: "Gabriel Salindeho",
    postion: "CEO & Founder",
    experience: ["Researcher on Pest Control at Brawijaya University"],
  },

  // Technical Officer
  nabiel: {
    image: "/images/staff/nabiel.png",
    name: "Nabiel Tatra Edy Firdaus",
    postion: "CTO & Co-founder",
    experience: [],
  },
  akmal: {
    image: "/images/staff/akmal.png",
    name: "Fadlullah Akmal",
    postion: "Data Analyst",
    experience: ["Certified Associate Data Scientist"],
  },
  filzah: {
    image: "/images/staff/filzah.png",
    name: "Filzah Mufidah",
    postion: "Front-end Developer",
    experience: [],
  },
  khaelano: {
    image: "/images/staff/khaelano.png",
    name: "Khaelano Abroor Maulana",
    postion: "Software Engineer",
    experience: ["Researcher at POROS Filkom UB"],
  },

  // Financial Officer
  nuel: {
    image: "/images/staff/nuel.png",
    name: "Muhammad Rizky Alfiansyah",
    postion: "CFO & Co-founder",
    experience: [],
  },
  hidayat: {
    image: "/images/staff/hidayat.png",
    name: "Hidayat Nur Rahman",
    postion: "Finance Manager",
    experience: [
      "3+ years of experience in equity investing",
      "1+ year in academic research, with strong expertise in Financial Modeling and Valuation",
    ],
  },
  jenar: {
    image: "/images/staff/jenar.png",
    name: "Jenar Mahes Aditia",
    postion: "Legal Officer",
    experience: [
      "Certified Contract Drafting",
      "Head of Partnership and Sponsorship of EM UB 2024",
      "Led 3+ legal project",
    ],
  },

  // Marketing Officer
  rofiq: {
    image: "/images/staff/rofiq.png",
    name: "Muhammad Ainur Rofiq",
    postion: "CMO",
    experience: [
      "3 years of experience on public relations",
      "Ex-business Development at Astra Group",
    ],
  },
  george: {
    image: "/images/staff/george.png",
    name: "George Richie Matthew",
    postion: "Social Media Specialist",
    experience: [
      "Experienced as CMO of Zozoland",
      "Managing culinary business with Rp.80+ mil revenue/year",
    ],
  },
  jihan: {
    image: "/images/staff/jihan.png",
    name: "Wajihan Indalloh",
    postion: "Graphic & Product Designer",
    experience: [
      "2+ years of experience at IT Department of AAPG UB SC",
      "Led 4+ media publication department at several event",
    ],
  },
  salma: {
    image: "/images/staff/salma.png",
    name: "Salma Sulistyo Putri",
    postion: "Graphic & Product Designer",
    experience: [
      "3 years of experience in designing visuals, promotional materials, and digital content for 5+ events and professiona service accounts",
    ],
  },

  // Operational Officer
  marsel: {
    image: "/images/staff/marsel.png",
    name: "Marsel Sampurna",
    postion: "COO & Co-founder",
    experience: [],
  },
  alifia: {
    image: "/images/staff/alifia.png",
    name: "Rusdi Alifia Zahwa",
    postion: "Human Resource",
    experience: [
      "2+ years of experience at People Development Department.",
      "Led and mentored at 8+ human development program.",
    ],
  },
  tessya: {
    image: "/images/staff/tessya.png",
    name: "Tessya Amala",
    postion: "Public Relations",
    experience: [
      "3+ years of experience in AIESEC future leaders",
      "Experienced as PR Team UIxITB at HMD Physics UI",
      "Moderator for several events",
    ],
  },
};

const DEPT_DATA: Department[] = [
  {
    image: "/images/departements/group/CEO.png",
    title: "Company Founders",
    description: "Please bikin deskripsinya",
    gradient: ["#D3BB7E", "#C5A34D"],
    staff: [
      STAFF_DATA["gabriel"],
      STAFF_DATA["nabiel"],
      STAFF_DATA["nuel"],
      STAFF_DATA["marsel"],
    ],
  },
  {
    image: "/images/departements/group/CTO.png",
    title: "Technical Officer",
    description:
      "Departemen CTO menghadirkan inovasi yang nyata dan berdampak dari kecerdasan buatan hingga pengembangan sistem digital memastikan setiap teknologi yang dikembangkan memperkuat daya saing AGROPLUS di era modern.",
    gradient: ["#58CDEE", "#4DABC5"],
    staff: [
      STAFF_DATA["nabiel"],
      STAFF_DATA["akmal"],
      STAFF_DATA["filzah"],
      STAFF_DATA["khaelano"],
    ],
  },
  {
    image: "/images/departements/group/CFO.png",
    title: "Financial Officer",
    description:
      "Departemen CFO menciptakan dampak yang terukur pada setiap tindakan AGROPLUS. Mulai dari stabilitas keuangan hingga ketepatan hukum  memastikan setiap langkah selaras dengan visi pertumbuhan perusahaan kami.",
    gradient: ["#ED5867", "#C54D59"],
    staff: [STAFF_DATA["nuel"], STAFF_DATA["hidayat"], STAFF_DATA["jenar"]],
  },
  {
    image: "/images/departements/group/CMO.png",
    title: "Marketing Officer",
    description:
      "Departemen CMO berkomitmen untuk menciptakan strategi pemasaran yang berdampak, kreatif, dan terukur. Kami memastikan setiap kampanye berkontribusi nyata terhadap pertumbuhan AGROPLUS dan peningkatan kepercayaan publik terhadap inovasi di Starup kami",
    gradient: ["#4CCC77", "#48B76D"],
    staff: [
      STAFF_DATA["rofiq"],
      STAFF_DATA["salma"],
      STAFF_DATA["george"],
      STAFF_DATA["jihan"],
    ],
  },
  {
    image: "/images/departements/group/COO.png",
    title: "Operational Officer",
    description:
      "Departemen COO memastikan AGROPLUS terus bergerak dengan keunggulan operasional, kolaborasi strategis, dan efisiensi berkelanjutan. Dengan fokus pada eksekusi yang presisi, manajemen sumber daya yang efektif, dan kemitraan yang saling menguatkan, kami menciptakan fondasi kokoh bagi pertumbuhan jangka panjang perusahaan.",
    gradient: ["#B477D6", "#994DC5"],
    staff: [STAFF_DATA["marsel"], STAFF_DATA["alifia"], STAFF_DATA["tessya"]],
  },
];

type Staff = {
  image: string;
  name: string;
  postion: string;
  experience: string[];
};

type Department = {
  image: string;
  title: string;
  description: string;
  gradient: [string, string];
  staff: Staff[];
};

export type { Staff, Department };
export { DEPT_DATA };
