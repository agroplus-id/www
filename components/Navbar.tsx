"use client";

import Image from "next/image";
import LogoMono from "./icons/LogoMono";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setTransparent(window.scrollY <= 0);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section
      className={`fixed section-bg h-20 place-content-center z-50 transition-all duration-150 ${!transparent ? "bg-primary-1 text-primary-2" : "text-primary-1"}`}
    >
      <div className="flex section-content">
        <div id="logo" className="space gap-2 flex flex-row">
          <LogoMono className={`size-7`} />
          <h1>
            <span className="font-black">AGRO</span>
            <span className="font-normal italic">PLUS</span>
          </h1>
        </div>
        <div
          id="navigation"
          className="flex flex-grow justify-end flex-row gap-9"
        >
          <a href="#">Tentang Kami</a>
          <a href="#">Layanan Kami</a>
          <a href="#">Mitra Kami</a>
          <a href="#">Tim Kami</a>
          <a href="#">FAQ</a>
        </div>
      </div>
    </section>
  );
}
