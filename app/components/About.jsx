import React from 'react';

export default function About() {
return (
  <section className="w-full bg-teal-100">
    {/* About Section */}
    <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row items-start gap-8">
      {/* Left: Image with overlayed badge */}
      <div className="relative rounded-2xl overflow-hidden shadow-md lg:-ml-12">
        <img
          src="/images/woman.jpg"
          alt="Dr. Serena Blake"
          className="w-64 h-96 object-cover rounded-xl"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gray-100/80 text-gray-800 text-xs p-2">
          <p className="font-semibold leading-snug">Dr. Serena Blake</p>
          <p className="text-purple-600 leading-snug">PsyD</p>
          <p className="text-yellow-600 leading-snug">⭐ Top Rated | 8 Years Experience</p>
        </div>
      </div>

      {/* Right: Text content */}
      <div className="flex-1 lg:pl-24">
        <p className="text-sm text-yellow-700 bg-yellow-100 inline-block px-3 py-1 rounded mb-3">
          About Dr. Serena Blake, PsyD - Licensed Clinical Psychologist in Los Angeles, CA
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Hi I'm Dr. Serena Blake
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I’m a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I use evidence-based approaches—like cognitive-behavioral therapy and mindfulness—combined with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether we meet in my Maplewood Drive office or connect virtually via Zoom, I’m committed to creating a safe, supportive space where you can heal, grow, and thrive.
        </p>
      </div>
    </div>

    {/* Latest Blogs Section - full width, white bg */}
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#2C4D4A] mb-2">Latest Blogs</h2>
          <p className="text-gray-700 max-w-xl">
            Discover helpful insights and strategies from Ellie Shumaker to improve your
            relationships and personal well-being.
          </p>
        </div>

        <hr className="border-gray-200 mb-8" />

        <div className="text-center text-gray-500 text-base">
          No posts available at the moment.
        </div>
      </div>
    </div>
  </section>
);



}
