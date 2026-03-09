import VideoPlayer from "../VideoPlayer";

export default function ComprofSection() {
  return (
    <section
      id="comprof"
      className="section-bg"
      style={{ background: "linear-gradient(122.07deg, #98bb63 0%, #f1ffdd 100%)" }}
    >
      <div className="section-content py-[88px]">
        <div id="comprof-header" className="flex flex-col lg:flex-row gap-4">
          <h2
            className="flex flex-1 heading-2"
            style={{
              background: "linear-gradient(90deg, #25330f 0%, #6f992d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mendukung Industri Kopi dari Hulu dengan Teknologi Terpercaya
          </h2>
          <p className="flex flex-1 text-agro-green-500">
            AgroPlus menghadirkan solusi digital dan cerdas yang membantu pelaku
            industri kopi memahami kondisi tanaman, mengelola kebun secara lebih
            efisien, dan meningkatkan kualitas hasil secara berkelanjutan.
          </p>
        </div>
      </div>
      <div className="section-bg bg-black">
        <div className="section-content px-0">
          <VideoPlayer
            controls
            loop
            className="aspect-9/16 lg:aspect-video w-full"
          >
            <source
              src="/videos/comprof-landscape.mp4"
              media="(min-width: 64rem)"
            />
            <source
              src="/videos/comprof-portrait.mp4"
              media="(max-width: 64rem)"
            />
          </VideoPlayer>
        </div>
      </div>
    </section>
  );
}
