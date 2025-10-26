import Image from "next/image";
import DoubleArrowDown from "../icons/DoubleArrowDown";
import Button from "../buttons/Button";
import ChevronRight from "../icons/ChevronRight";

export default function LandingSection() {
  return (
    <section className="section-bg relative">
      <Image
        src="/images/farmer-plowing-field.jpg"
        alt="Farmer plowing field using bull"
        fill
        className="object-cover -z-20"
      />
      <div className="absolute size-full bg-linear-to-b from-black/80 to-black/0 -z-10" />
      <div className="section-content w-full h-screen pt-32 space-y-6 text-primary-1 z-20">
        <h1 className="font-heading font-bold text-[4rem]/14 tracking-tight">
          Solusi Pertanian <br /> dari Hulu ke Hilir
        </h1>
        <p className="max-w-2xl text-xl">
          Melalui inovasi digital dan kecerdasan buatan, Agroplus menghadirkan
          solusi menyeluruh bagi sektor pertanian. Dari pengelolaan lahan hingga
          pemasaran hasil panen, semuanya terintegrasi dalam satu platform yang
          mendukung pertanian modern dan berkelanjutan.
        </p>
        <Button className="" rightIcon={<ChevronRight />}>
          Hubungi kami
        </Button>

        <div className="flex flex-col absolute bottom-0 left-1/2 -translate-1/2 items-center -mb-2">
          <p>Scroll untuk lanjut</p>
          <DoubleArrowDown />
        </div>
      </div>
    </section>
  );
}
