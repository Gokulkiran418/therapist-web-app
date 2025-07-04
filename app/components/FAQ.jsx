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
    "You don’t have to navigate this alone—healing is always possible.";

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
      <section className="bg-teal-100 w-full py-16 px-4">
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
{/* Testimonials Section */}
<section className="w-full bg-teal-100 py-16 px-6">
  <div className="max-w-6xl mx-auto space-y-6">
    {/* Pill Label */}
    <span className="inline-block bg-yellow-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
      Client Success Stories & Testimonials
    </span>

    {/* Heading + Subtext */}
    <h2 className="text-3xl font-bold text-[#2C4D4A]">
      What Former Clients Say
    </h2>
    <p className="text-gray-700 max-w-xl">
      Real experiences from individuals who have found healing and growth through our work together.
    </p>

    {/* Sliding Cards Carousel */}
    <div className="overflow-hidden relative group">
      <div
        className="flex space-x-8 animate-slide-left-to-right-fade group-hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {/* Card 1 */}
        <div className="w-64 bg-white rounded-xl p-6 shadow-lg flex-none transition-opacity duration-500">
          <h3 className="text-sm font-semibold text-[#2C4D4A] mb-2">Samantha R.</h3>
          <p className="text-sm text-gray-600">
            “Dr. Blake truly changed my life. Her compassion and wisdom helped me navigate the most difficult time with strength and clarity.”
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-64 bg-white rounded-xl p-6 shadow-lg flex-none transition-opacity duration-500">
          <h3 className="text-sm font-semibold text-[#2C4D4A] mb-2">Daniel K.</h3>
          <p className="text-sm text-gray-600">
            “I’ve tried therapy before, but nothing compares to the safe space Dr. Blake creates. I finally feel heard, understood, and empowered.”
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-64 bg-white rounded-xl p-6 shadow-lg flex-none transition-opacity duration-500">
          <h3 className="text-sm font-semibold text-[#2C4D4A] mb-2">Maya P.</h3>
          <p className="text-sm text-gray-600">
            “After just a few sessions, I could feel real progress. Her approach is both grounding and transformative. So grateful I found her!”
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
