'use client';

import React, { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What are your fees?",
      answer: "My fees are $60 for individual, $90 for couple.",
    },
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self‑submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24‑hour notice required.",
    },
    {
      question: "What services do you offer?",
      answer:
        "My services focus on areas such as Relationship Counseling, deepening relationships, healing past wounds, Trauma Recovery, and discovering your life's purpose.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/lottie/peace.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);

  return (
    <>
      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-teal-100 w-full py-16 px-4 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2C4D4A] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#2C4D4A]">
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left text-xl flex justify-between items-center py-4 text-[#2C4D4A] font-bold focus:outline-none"
                >
                  {faq.question}
                  <span className="text-base">
                    {openIndex === i ? "−" : "v"}
                  </span>
                </button>

                <div
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight:
                  openIndex === i
                    ? `${contentRefs.current[i]?.scrollHeight || 0}px`
                    : "0px",
              }}
            >
              <p className="text-[#2C4D4A] text-sm pb-4 px-1">{faq.answer}</p>
            </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + Candle Animation Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Side — Candle Animation */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            {animationData && (
              <div className="w-64">
                <Lottie animationData={animationData} loop autoplay />
              </div>
            )}
          </div>

          {/* Right Side — Quote */}
          <div className="w-full md:w-1/2 text-right">
            <p
              className="text-3xl md:text-4xl text-[#2C4D4A] font-extrabold italic leading-relaxed"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              “With time, wounds fade and hope blossoms—healing is not a race,
              but a quiet journey toward light and wholeness.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
