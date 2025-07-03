import React from 'react';

export default function About() {
  return (
    <section className="w-full py-12 [background-color:#C4E1E6] flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-8 px-6">
        
        {/* Left: Image with overlayed badge */}
        <div className="relative rounded-2xl overflow-hidden shadow-md lg:-ml-12">
          <img
            src="/images/woman.jpg"
            alt="Dr. Serena Blake"
            className="w-64 h-96 object-cover rounded-xl"
          />
          {/* Overlayed small text badge at bottom of image */}
          <div className="absolute bottom-0 left-0 w-full bg-gray-100/80 text-gray-800 text-xs p-2">
            <p className="font-semibold leading-snug">Dr. Serena Blake</p>
            <p className="text-purple-600 leading-snug">PsyD</p>
            <p className="text-yellow-600 leading-snug">⭐ Top Rated | 8 Years Experience</p>
          </div>
        </div>

        {/* Right: Content (pushed further right) */}
        <div className="flex-1 lg:pl-24">
          <p className="text-sm text-yellow-700 bg-yellow-100 inline-block px-3 py-1 rounded mb-3">
            About Dr. Serena Blake, PsyD - Licensed Clinical Psychologist in Los Angeles, CA
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hi I'm Dr. Serena Blake
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            With over <strong>8 years of dedicated experience</strong> in individual and couples therapy,
            I truly enjoy working with people from all walks of life. My goal is to help you build
            confidence in your healing journey and guide you toward greater emotional clarity and connection.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            My therapeutic approach blends <strong>evidence-based methods</strong> with deep empathy,
            aiming to nurture <strong>emotional resilience</strong>, strengthen <strong>relationship bonds</strong>,
            and foster a sense of <strong>inner peace</strong>. I am passionate about empowering clients
            to reconnect with their strengths and live a more authentic life.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're working through <strong>past trauma</strong>, rediscovering your <strong>life's purpose</strong>,
            or seeking clarity in uncertain times, I provide a warm, supportive space for growth.
            Together, we can work toward your goals for a healthier, more purposeful future.
          </p>
        </div>
      </div>
    </section>
  );
}
