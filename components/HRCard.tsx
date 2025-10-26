import Image from "next/image";
import Button from "./buttons/Button";

export default function HRCard({
  title,
  description,
  image,
  gradient,
}: DeptData) {
  return (
    <>
      <div className="flex flex-row aspect-video w-full hr-card rounded-4xl gap-4">
        <div className="flex flex-2 relative justify-end content-end h-full aspect-3/4">
          <Image
            src={image}
            alt=""
            fill
            sizes="720px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-3 flex-col justify-center gap-6 pt-12 pr-12 pb-12 w-full">
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-4xl font-bold leading-10">
              {title}
            </h3>
            <p className="">{description}</p>
          </div>
          <Button style={{ color: gradient[0] }}>Lihat Lebih Banyak</Button>
        </div>
      </div>
      <style jsx>{`
        .hr-card {
          background-image: radial-gradient(
            circle at 100%,
            ${gradient[1]},
            ${gradient[0]}
          );
        }
      `}</style>
    </>
  );
}
