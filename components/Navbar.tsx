"use client";

import { AnimatePresence, motion } from "motion/react";
import LogoMono from "./icons/LogoMono";
import { useEffect, useState } from "react";

type Link = {
  href: string;
  label: string;
};

const links = [
  { href: "#comprof", label: "Tentang Kami" },
  { href: "#features", label: "Layanan Kami" },
  { href: "#metrics", label: "Pencapaian Kami" },
  { href: "#partners", label: "Mitra kami" },
  { href: "#hr", label: "Tim Kami" },
  { href: "#faq", label: "FAQ" },
];

function MobileLayout({
  links,
  className,
}: {
  links: Link[];
  className?: string;
}) {
  return (
    <motion.nav
      className={`fixed right-0 top-20 h-full flex flex-col w-2xs lg:hidden items-end ${className}`}
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{
        type: "tween",
        duration: 0.1,
      }}
    >
      {links.map((l, i) => (
        <a key={i} href={l.href} className="p-8">
          {l.label}
        </a>
      ))}
    </motion.nav>
  );
}

function DesktopLayout({
  links,
  className,
}: {
  links: Link[];
  className?: string;
}) {
  return (
    <nav
      className={`lg:flex grow justify-end flex-row gap-9 hidden ${className}`}
    >
      {links.map((l, i) => (
        <a key={i} href={l.href}>
          {l.label}
        </a>
      ))}
    </nav>
  );
}

export default function Navbar() {
  const [transparent, setTransparent] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setTransparent(window.scrollY <= 0);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navbarColor = `${!transparent || open ? "bg-primary-1 text-primary-2" : "text-primary-1"}`;

  return (
    <section
      className={`fixed section-bg h-20 place-content-center z-50 transition-all duration-150 ${navbarColor}`}
    >
      <div className="flex section-content">
        <div id="logo" className="space gap-2 flex flex-row">
          <LogoMono className={`size-7`} />
          <h1>
            <span className="font-bold">AGRO</span>
            <span className="font-normal italic">PLUS</span>
          </h1>
        </div>
        <div id="navigation" className="flex grow justify-end flex-row gap-9">
          <AnimatePresence>
            {open ? (
              <MobileLayout links={links} className={navbarColor} />
            ) : (
              <DesktopLayout links={links} />
            )}
          </AnimatePresence>
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              {open ? (
                // X icon
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                // hamburger
                <g
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
