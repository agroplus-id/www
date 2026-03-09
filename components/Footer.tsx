import LogoMono from "./icons/LogoMono";
import InstagramIcon from "./icons/socials/instagram";
import LinkedinIcon from "./icons/socials/linkedin";
import TwitterIcon from "./icons/socials/twitter";
import YoutubeIcon from "./icons/socials/youtube";

export default function Footer() {
  return (
    <section className="section-bg bg-linear-to-r from-[#98bb63] to-[#deffad] text-agro-green-500">
      <div className="section-content text-xs flex flex-col gap-8 py-16 divide-y-2 divide-agro-green-500 divide-solid">
        {/*main part*/}
        <div className="flex flex-col gap-8 pb-8 divide-agro-green-500">
          {/*footer head*/}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 text-2xl">
              <LogoMono className="size-10" />
              <h1>
                <span className="font-bold">AGRO</span>
                <span className="font-normal italic">PLUS</span>
              </h1>
            </div>
            <p className="max-w-sm">
              <span className="font-semibold">AgroPlus</span> adalah startup Agritech berbasis AI yang berfokus pada sektor hulu
              industri kopi Indonesia dan mengembangkan berbagai solusi teknologi
              untuk membantu petani meningkatkan produktivitas serta pengambilan
              keputusan budidaya.
            </p>
          </div>

          {/*footer body*/}
          <div className="flex flex-col items-start lg:flex-row justify-between gap-6 lg:items-end">
            <div className="flex flex-row gap-6">
              <div className="flex flex-col font-medium">
                <p>Email</p>
                {/*<p>Telp</p>*/}
              </div>
              <div className="flex flex-col">
                <p>inquiries@agroplusid.com</p>
                {/*<p>0183718837281</p>*/}
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center h-fit">
              <a>
                <InstagramIcon />
              </a>
              <a>
                <LinkedinIcon />
              </a>
              <a>
                <YoutubeIcon />
              </a>
              {/*<a>
                <TwitterIcon />
              </a>*/}
            </div>
          </div>
        </div>

        {/*bottom part*/}
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-xs opacity-60">
          <p>© 2025 Agroplus.</p>
          <p>Kota Malang, Jawa Timur, Indonesia</p>
        </div>
      </div>
    </section>
  );
}
