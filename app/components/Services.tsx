"use client";

import React, { useState, useRef, useEffect } from 'react';
import { HiX, HiSparkles } from 'react-icons/hi';
import Image from 'next/image';

export default function Services() {
     const [activeModal, setActiveModal] = useState<null | number>(null);
    const modalRef = useRef<HTMLDivElement>(null);
      useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setActiveModal(null);
      }
    };

    if (activeModal !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeModal]);

  const services = [
    {
      title: "Anxiety & Stress Management",
      img: "/images/calmperson.jpg",
      summary: "Support for navigating anxious thoughts, managing stress, and building emotional resilience in a safe, therapeutic space.",
      details: "Discover effective tools to calm the mind, reduce overwhelm, and restore inner peace. Together, we'll build lasting strategies for resilience and emotional balance. You’ll learn to quiet the noise of self-doubt and reclaim a sense of control in your daily life. With compassionate guidance, you’ll begin to replace fear with clarity, and tension with calm confidence.",
    },
    {
      title: "Relationship Counseling",
      img: "/images/couple.jpg",
      summary: "Strengthen communication, rebuild trust, and foster deeper emotional connection with compassionate guidance.",
      details: "Create stronger, more fulfilling connections through open dialogue and mutual understanding. Let’s work together to restore trust and deepen your emotional bond. Whether you're navigating conflict or simply feeling disconnected, healing is possible. This is a space where vulnerability is honored, and new patterns of love and connection can grow.",
    },
    {
      title: "Trauma Recovery",
      img: "/images/trauma.jpg",
      summary: "Heal from past wounds in a supportive environment, using faith-based and evidence-informed approaches to rebuild safety and self-worth.",
      details: "You are not defined by what happened to you. In a safe and nurturing space, we’ll journey toward healing, reclaiming your strength, and finding hope again. Step by step, we’ll rebuild your sense of safety and self-worth with care and patience. You deserve a future that feels whole, grounded, and no longer shaped by the pain of the past.",
    },
  ];


return (
  <div>
    {/* Services Section */}
    <section className="bg-white py-20 relative scroll-mt-16" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-8 text-[#2C4D4A]">How I Help</h2>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
          {services.map((service, i) => (
            <div
              key={i}
              className="group w-full md:w-[26rem] bg-[#B5D3D2] rounded-md p-4 border border-black shadow-sm overflow-hidden"
            >
              <div className="p-2 pr-6 transform transition-transform duration-300 group-hover:translate-x-6">
                <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 416px"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#2C4D4A] mb-1 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-[#2C4D4A] mb-3 leading-tight">
                  {service.summary}
                </p>
                <button
                  onClick={() => setActiveModal(i)}
                  className="w-full border border-[#2C4D4A] text-[#2C4D4A] py-1.5 text-xs rounded-md hover:bg-[#2C4D4A] hover:text-white transition"
                >
                  Learn More
                </button>
              </div>

              {/* Modal */}
              {activeModal === i && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/50" />
                  <div
                    ref={modalRef}
                    className="relative bg-white rounded-lg max-w-lg w-full mx-4 p-6 shadow-lg animate-fadeIn"
                  >
                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                    >
                      <HiX size={20} />
                    </button>
                    <h3 className="text-xl font-semibold mb-4">Take the first step</h3>
                    <p className="text-sm text-gray-700 mb-6">{service.details}</p>
                    <div className="text-right">
                      <a
                        href="#contact"
                        onClick={() => setActiveModal(null)}
                        className="inline-flex items-center px-4 py-2 bg-teal-600 text-white text-sm rounded hover:bg-teal-700 transition"
                      >
                        <HiSparkles className="mr-2" /> Contact Me
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Dark Teal CTA Section */}
    <section className="w-full bg-[#2C4D4A] min-h-[140px] flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row md:items-center md:gap-6 gap-4">
        <h3 className="text-[#B5D3D2] font-bold text-2xl whitespace-nowrap">
          Schedule A Consultation
        </h3>
        <p className="text-[#B5D3D2] font-semibold text-xs flex flex-wrap items-center gap-2">
          Dr. Serena Blake is currently accepting new clients. Available for online and in-person sessions.
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-1 border border-[#B5D3D2] text-[#B5D3D2] text-xs px-3 py-1.5 rounded-md hover:bg-[#B5D3D2] hover:text-[#2C4D4A] transition-colors duration-200"
          >
            <HiSparkles className="text-sm" />
            Start Healing
          </button>
        </p>
      </div>
    </section>
  </div>
);

}
