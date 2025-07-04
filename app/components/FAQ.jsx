"use client";

import React, { useState, useRef } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What are your fees?",
      answer: "My fees are $60 for individual, $90 for couple.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "No, but a superbill is provided for self-submission.",
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
        "My services focuses on areas such as Relationship Counseling, deepening relationships, healing past wounds, Trauma Recovery and discovering your life's purpose.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#B5D3D2] w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2C4D4A] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#2C4D4A]">
              <button
                className="w-full text-left flex justify-between items-center py-4 text-[#2C4D4A] font-semibold focus:outline-none"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
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
  );
}
