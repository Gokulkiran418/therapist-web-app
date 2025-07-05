"use client";

import React from 'react';
import { HiSparkles } from 'react-icons/hi';

export default function Services() {
  return (
    <div>
      {/* Services Section */}
      <section className="bg-white py-20 relative scroll-mt-16" id="services">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-left mb-8 text-[#2C4D4A]">
            How I Help
          </h2>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            {/* Card 1 */}
            <div className="group w-full md:w-[26rem] bg-[#B5D3D2] rounded-md p-4 border border-black shadow-sm overflow-hidden">
              <div className="p-2 pr-6 transform transition-transform duration-300 group-hover:translate-x-6">
                <img
                  src="/images/calmperson.jpg"
                  alt="Individual Counseling"
                  className="w-full h-30 object-cover rounded-md mb-3"
                />
                <h3 className="text-sm font-bold text-[#2C4D4A] mb-1 leading-tight">
                  Anxiety & Stress Management 
                </h3>
                <p className="text-xs text-[#2C4D4A] mb-3 leading-tight">
                   Support for navigating anxious thoughts, managing stress, and building emotional resilience in a safe, therapeutic space.
                </p>
                <button className="w-full border border-[#2C4D4A] text-[#2C4D4A] py-1.5 text-xs rounded-md hover:bg-[#2C4D4A] hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
            {/*Card 2*/}
            <div className="group w-full md:w-[26rem] bg-[#B5D3D2] rounded-md p-4 border border-black shadow-sm overflow-hidden">
              <div className="p-2 pr-6 transform transition-transform duration-300 group-hover:translate-x-6">
                <img
                  src="/images/couple.jpg"
                  alt="Individual Counseling"
                  className="w-full h-30 object-cover rounded-md mb-3"
                />
                <h3 className="text-sm font-bold text-[#2C4D4A] mb-1 leading-tight">
                  Relationship Counseling 
                </h3>
                <p className="text-xs text-[#2C4D4A] mb-3 leading-tight">
                  Strengthen communication, rebuild trust, and foster deeper emotional connection with compassionate guidance.
                </p>
                <button className="w-full border border-[#2C4D4A] text-[#2C4D4A] py-1.5 text-xs rounded-md hover:bg-[#2C4D4A] hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group w-full md:w-[26rem] bg-[#B5D3D2] rounded-md p-4 border border-black shadow-sm overflow-hidden">
              <div className="p-2 pr-6 transform transition-transform duration-300 group-hover:translate-x-6">
                <img
                  src="/images/trauma.jpg"
                  alt="Couples Counseling"
                  className="w-full h-30 object-cover rounded-md mb-3"
                />
                <h3 className="text-sm font-bold text-[#2C4D4A] mb-1 leading-tight">
                  Trauma Recovery 
                </h3>
                <p className="text-xs text-[#2C4D4A] mb-3 leading-tight">
                  Heal from past wounds in a supportive environment, using faith-based and evidence-informed approaches to rebuild safety and self-worth.
                </p>
                <button className="w-full border border-[#2C4D4A] text-[#2C4D4A] py-1.5 text-xs rounded-md hover:bg-[#2C4D4A] hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
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
           <button className="flex items-center gap-1 border border-[#B5D3D2] text-[#B5D3D2] text-xs px-3 py-1.5 rounded-md hover:bg-[#B5D3D2] hover:text-[#2C4D4A] transition-colors duration-200">
            <HiSparkles className="text-sm" />
            Start Healing
          </button>
            </p>
        </div>
      </section>
    </div>
  );
}
