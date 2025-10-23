"use client"

import Image from "next/image";
import LogoMono from "./icons/LogoMono";
import { useState } from "react";

export default function Navbar() {
  let [transparent, setTransparent] = useState(false);

  return (
    <div className={`flex w-full px-6 py-8 justify-center ${!transparent ? "bg-primary-1 text-primary-2" : "text-primary-1"}`}>
      <div className="flex w-full max-w-7xl">
        <div id="logo" className="space gap-2 flex flex-row">
          <LogoMono className={`size-7`} />
          <h1>
            <span className="font-black">AGRO</span>
            <span className="font-normal italic">PLUS</span>
          </h1>
        </div>
        <div id="navigation" className="flex flex-grow justify-end flex-row gap-9">
            <a href="#">Tentang Kami</a>
            <a href="#">Layanan Kami</a>
            <a href="#">Mitra Kami</a>
            <a href="#">Tim Kami</a>
            <a href="#">FAQ</a>
        </div>
      </div>
    </div>
  );
}
