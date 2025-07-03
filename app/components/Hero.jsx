import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-hero-bg flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} // Use local image path
    >
      {/* Content */}
      <div className="relative z-10 px-4 mt-16"> {/* Move text down */}
        <p className="text-sm mb-2 text-hero-text">
          Christian Counseling Services in Richmond & Central Virginia
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-hero-text">
          Professional Counseling for Christian Healing and Growth
        </h1>
        <p className="text-lg mb-2 text-hero-text">
          Begin your journey today towards spiritual growth, deeper relationships,
          <br />
          and lasting inner peace.
        </p>
        <p className="text-md mb-4 font-bold text-hero-text">
          I want to work with you for...
        </p>
        <p className="text-md mb-4 text-hero-text flex items-center justify-center">
          {/* Placeholder for compass icon - replace with actual SVG/image */}
          <span className="text-green-300 mr-2">🧭</span>
          <span className="text-green-300 font-bold">Greater Purpose in Your Life Direction</span>
        </p>
        <div className="mt-6 text-sm text-hero-text">
          <span className="inline-block mr-2 underline animation-delay-100 hover:no-underline transition-all duration-300 ease-in-out animate-fadeIn">
            <span className="font-bold"> {/* Placeholder for yellow star with black border - replace with actual image */}
              <span role="img" aria-label="star">⭐</span> Top Rated
            </span>
          </span>
          <span className="inline-block mr-2 underline animation-delay-200 hover:no-underline transition-all duration-300 ease-in-out animate-fadeIn">
            40+ Years Experience
          </span>
          <span className="inline-block mr-2 underline animation-delay-300 hover:no-underline transition-all duration-300 ease-in-out animate-fadeIn">
            Testimonials
          </span>
          <span className="inline-block underline animation-delay-400 hover:no-underline transition-all duration-300 ease-in-out animate-fadeIn">
            Media Mentions
          </span>
        </div>
        <button className="px-6 py-3 mt-4 text-blue-800 rounded-lg transition duration-300 bg-gradient-to-r from-white via-blue-50 to-pink-100 hover:from-blue-50 hover:via-pink-100 hover:to-white">
          {/* Placeholder for star icon - replace with actual SVG/image */}
          <span className="mr-2">★</span> Start Healing Today
        </button>
      </div>
    </section>
  );
}