import LogoMono from "./icons/LogoMono";
import InstagramIcon from "./icons/socials/instagram";
import LinkedinIcon from "./icons/socials/linkedin";
import TwitterIcon from "./icons/socials/twitter";
import YoutubeIcon from "./icons/socials/youtube";

export default function Footer() {
  return (
    <section className="section-bg bg-[#132E49] text-agro-green-100">
      <div className="section-content text-xs flex flex-col gap-8 py-16 divide-y-2 divide-agro-green-100 divide-solid">
        {/*main part*/}
        <div className="flex flex-col gap-8 pb-8">
          {/*footer head*/}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 text-2xl">
              <LogoMono className="size-10" />
              <h1>
                <span className="font-black">AGRO</span>
                <span className="font-normal italic">PLUS</span>
              </h1>
            </div>
            <p className="w-sm">
              <span className="font-medium">Agroplus</span> adalah platform
              pertanian berbasis AI yang membantu petani Indonesia meningkatkan
              produktivitas dan efisiensi pertanian.
            </p>
          </div>

          {/*footer body*/}
          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-row gap-6">
              <div className="flex flex-col font-medium">
                <p>Email</p>
                <p>Telp</p>
              </div>
              <div className="flex flex-col">
                <p>inquiries@agroplusid.com</p>
                <p>0183718837281</p>
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
        <div className="flex flex-row justify-between text-xs opacity-60">
          <p>© 2025 Agroplus.</p>
          <p>Kota Malang, Jawa Timur, Indonesia</p>
        </div>
      </div>
    </section>
  );
}
