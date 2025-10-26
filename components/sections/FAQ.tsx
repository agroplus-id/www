"use client";

import FAQ from "@/dtos/FAQ";
import { useMemo, useState } from "react";
import ArrowDown from "../icons/ArrowDown";
import { AnimatePresence, motion } from "motion/react";

export default function FAQSection() {
  const faqContent: FAQ[] = useMemo(
    () => [
      {
        question: "Lorem Ipsum Dolor sit Amet?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.",
      },
      {
        question: "Lorem Ipsum Dolor sit Amet?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.",
      },
      {
        question: "Lorem Ipsum Dolor sit Amet?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.",
      },
      {
        question: "Lorem Ipsum Dolor sit Amet?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.",
      },
      {
        question: "Lorem Ipsum Dolor sit Amet?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-bg bg-agro-green-100">
      <div className="section-content text-agro-green-600 flex flex-col gap-20 py-16">
        <div className="flex flex-col gap-6 max-w-md">
          <h2 className="heading-2">Frequently Asked Questions</h2>
          <p>
            Berikut ini adalah beberapa pertanyaan yang sering ditanyakan
            mengenai layanan kami
          </p>
        </div>
        <div className="flex flex-col gap-10 divide-y-2 divide-solid divide-agro-green-600">
          {faqContent.map((q, i) => (
            <motion.div
              layout
              key={i}
              transition={{ layout: { duration: 0.1, ease: "easeInOut" } }}
              className="flex flex-col relative gap-4 pb-8 h-fit"
            >
              <button
                className="absolute -right-4 -top-4 p-4"
                onClick={() => setActiveIndex(i)}
              >
                <ArrowDown size={36} />
              </button>
              <h3 className="text-2xl font-bold">{q.question}</h3>
              <AnimatePresence>
                {activeIndex == i && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, height: 0, y: 0 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 0 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p>{q.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
