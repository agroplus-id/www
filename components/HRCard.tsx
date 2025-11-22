import Image from "next/image";
import Button from "./buttons/Button";

export default function HRCard({
  title,
  description,
  image,
  gradient,
}: DeptData) {
  let imageMarginTop = "0px";
  if (title === "Executive Officer" || title === "Technical Officer") {
    imageMarginTop = "60px";
  }

  return (
    <>
      <div
        className="flex flex-col-reverse lg:flex-row aspect-4/3 lg:aspect-video w-full rounded-4xl gap-4 overflow-hidden"
        style={{
          background: `radial-gradient(at 25% 25%, ${gradient[1]}, ${gradient[0]} )`,
        }}
      >
        <div className="flex flex-2 relative justify-end content-end h-full aspect-3/4">
          <Image
            src={image}
            alt=""
            fill
            sizes="720px"
            style={{ objectFit: "contain", marginTop: imageMarginTop }}
          />
        </div>
        <div className="flex flex-3 flex-col justify-center gap-6 p-8 lg:p-12 w-full">
          <div className="flex flex-col gap-3">
            {title === "Executive Officer" ? (
              <h3 className="font-heading text-4xl lg:text-6xl font-bold leading-tight text-center">
                {title}
              </h3>
            ) : (
              <>
                <h3 className="font-heading text-2xl lg:text-4xl font-bold leading-10">
                  {title}
                </h3>
                <p className="overflow-hidden text-sm lg:text-md text-ellipsis line-clamp-4">
                  {description}
                </p>
              </>
            )}
          </div>
          {/*<Button style={{ color: gradient[0] }}>Lihat Lebih Banyak</Button>*/}
        </div>
      </div>
    </>
  );
}
