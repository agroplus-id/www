"use client";
import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import Button from "./buttons/Button";

export default function HRCard({
  title,
  description,
  image,
  modalImage,
  metrics,
}: DeptData) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col-reverse lg:flex-row aspect-4/3 lg:aspect-video w-full rounded-4xl gap-4 overflow-hidden"
        style={{
          background: `radial-gradient(circle at 25% 25%, #FFFFFF, #999999)`,
        }}
      >
        <div className="flex flex-2 relative h-full aspect-3/4">
          <Image
            src={image}
            alt=""
            fill
            sizes="720px"
            style={{ objectFit: "contain", objectPosition: "bottom" }}
          />
        </div>
        <div className="flex flex-3 flex-col justify-center gap-6 p-8 lg:p-12 w-full">
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-2xl lg:text-4xl font-bold leading-10">
              {title}
            </h3>
            <p className="overflow-hidden text-sm lg:text-md text-ellipsis line-clamp-4">
              {description}
            </p>
          </div>
          {metrics && (
            <div className="flex gap-8 lg:gap-12">
              <div className="flex flex-col">
                <span className="font-heading text-3xl lg:text-5xl font-bold">
                  {metrics.left.value}
                </span>
                <span className="text-xs lg:text-sm opacity-90">
                  {metrics.left.label}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-3xl lg:text-5xl font-bold">
                  {metrics.right.value}
                </span>
                <span className="text-xs lg:text-sm opacity-90">
                  {metrics.right.label}
                </span>
              </div>
            </div>
          )}
          {modalImage && (
            <Button
              style={{ color: "#DEFFAD", background: "#45552D" }}
              onClick={(e) => {
                e.preventDefault();
                setModalOpen(true);
              }}
            >
              Lihat Lebih Banyak
            </Button>
          )}
        </div>
      </div>

      {modalImage && modalOpen && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-10"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform z-20"
              aria-label="Tutup"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 1L12 12M12 1L1 12" stroke="#45552D" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
            <img
              src={modalImage}
              alt={title}
              className="max-h-[88vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
