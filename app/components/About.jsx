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
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
           She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
           Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
