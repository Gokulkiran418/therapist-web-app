"use client";

import React, { useState, useRef, useEffect } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What are your fees?",
      answer: "My fees are $60 for individual, $90 for couple.",
    },
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
    {
      question: "What services do you offer?",
      answer:
        "My services focus on areas such as Relationship Counseling, deepening relationships, healing past wounds, Trauma Recovery, and discovering your life's purpose.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const quoteRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const fullQuote =
    "With time, wounds fade and hope blossoms—healing is not a race, but a quiet journey toward light and wholeness.";

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Detect when quote section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) observer.unobserve(quoteRef.current);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (inView && index < fullQuote.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + fullQuote.charAt(index));
        setIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [inView, index]);

  return (
    <>
      {/* FAQ Section */}
      <section className="bg-teal-100 w-full py-16 px-4 scroll-mt-16"id="faq">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C4D4A] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#2C4D4A]">
                <button
                  className="w-full text-left flex justify-between items-center py-4 text-[#2C4D4A] font-semibold focus:outline-none"
                  onClick={() => toggle(i)}
                >
                  {faq.question}
                  <span className="text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                <div
                  ref={(el) => (contentRefs.current[i] = el)}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight:
                      openIndex === i
                        ? `${contentRefs.current[i]?.scrollHeight}px`
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

      {/* Quote Section */}
      <section
        ref={quoteRef}
        className="bg-gray-100 w-full py-16 px-4 flex items-center justify-center"
      >
        <p className="text-4xl md:text-3xl italic text-teal-700 text-center max-w-4xl min-h-[3.5rem] leading-snug imperial-script-regular">
          {typed}
          <span className="animate-pulse">|</span>
        </p>
      </section>
    </>
  );
}
