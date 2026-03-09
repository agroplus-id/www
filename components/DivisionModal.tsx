"use client";
import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type StaffMember = {
  image: string;
  name: string;
  position: string;
  experience: string[];
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  gradient: [string, string];
  staff: StaffMember[];
};

export default function DivisionModal({
  isOpen,
  onClose,
  title,
  description,
  image,
  gradient,
  staff,
}: Props) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl overflow-y-auto max-h-[90vh] w-full max-w-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top card */}
        <div
          className="relative flex flex-row overflow-hidden rounded-t-3xl"
          style={{
            background: `radial-gradient(circle at 25% 60%, ${gradient[0]}40, ${gradient[1]}cc)`,
            minHeight: "220px",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
            aria-label="Tutup"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L12 12M12 1L1 12"
                stroke="#45552D"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="relative flex-none w-48 self-stretch">
            <Image
              src={image}
              alt={title}
              fill
              sizes="192px"
              style={{ objectFit: "contain", objectPosition: "bottom center" }}
            />
          </div>
          <div className="flex flex-col justify-center gap-3 p-6 pr-14 text-agro-green-500">
            <h2 className="font-heading text-2xl font-bold">{title}</h2>
            <p className="text-sm leading-relaxed opacity-80">{description}</p>
          </div>
        </div>

        {/* Staff section */}
        <div className="p-6 flex flex-col gap-6">
          <h3 className="font-heading text-xl font-bold text-agro-green-500">
            Anggota tim
          </h3>
          <div className="flex flex-col divide-y divide-gray-100">
            {staff.map((member, i) => (
              <div key={i} className="flex gap-4 py-5 first:pt-0">
                <div className="relative w-36 h-44 rounded-2xl overflow-hidden shrink-0 bg-white border border-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="144px"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-agro-green-500">{member.name}</p>
                  <p className="text-sm text-agro-green-400 mb-1">
                    {member.position}
                  </p>
                  {member.experience.length > 0 && (
                    <ul className="text-xs text-gray-600 list-disc list-outside ml-4 space-y-1">
                      {member.experience.map((exp, j) => (
                        <li key={j}>{exp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
