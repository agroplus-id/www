import VideoPlayer from "../VideoPlayer";

export default function ComprofSection() {
  return (
    <section
      id="comprof"
      className="section-bg bg-agro-green-600 text-agro-green-100"
    >
      <div className="section-content py-16">
        <div id="comprof-header" className="flex flex-col lg:flex-row gap-4">
          <h2 className="flex flex-1 heading-2">
            Solusi Cerdas untuk Pertanian Indonesia yang Lebih Sehat dan
            Berkelanjutan
          </h2>
          <p className="flex flex-1">
            Agroplus memberikan solusi cerdas bagi petani dengan menghadirkan
            inovasi berbasis teknologi yang membantu petani mengelola tanaman,
            sumber daya, dan hasil panen secara lebih efisien. Agroplus berupaya
            menciptakan ekosistem pertanian yang tidak hanya produktif, tetapi
            juga ramah lingkungan dan mampu mendukung kesejahteraan petani dalam
            jangka panjang.
          </p>
        </div>
      </div>
      <VideoPlayer
        controls
        src="/videos/comprof-landscape.mp4"
        loop
      ></VideoPlayer>
    </section>
  );
}
