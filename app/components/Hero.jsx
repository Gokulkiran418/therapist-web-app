"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [yearsCount, setYearsCount] = useState(0);
  const [sessionsCount, setSessionsCount] = useState(0);

  const statsRef = useRef(null);
  const animating = useRef(false); // Prevent overlapping animations

  const animateCount = (from, to, duration, setter) => {
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setter(Math.floor(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
      else animating.current = false;
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
          if (entry.isIntersecting) {
          if (!animating.current) {
            animating.current = true;
            animateCount(0, 8, 1000, setYearsCount);        // faster now
            animateCount(0, 500, 2000, setSessionsCount); // keep sessions speed as is
          }
        }
        else {
          // Reset values when scrolled out of view
          setYearsCount(0);
          setSessionsCount(0);
          animating.current = false;
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="relative z-10 px-4 mt-16 max-w-2xl">
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
            <span className="text-green-300 mr-2">🧭</span>
            <span className="text-green-300 font-bold">
              Greater Purpose in Your Life Direction
            </span>
          </p>
          <div className="mt-6 text-sm text-hero-text flex flex-wrap justify-center gap-4">
            <span className="inline-block underline hover:no-underline transition duration-300">
              <span role="img" aria-label="star">⭐</span> Top Rated
            </span>
            <span className="inline-block underline hover:no-underline transition duration-300">
              8 Years Experience
            </span>
            <span className="inline-block underline hover:no-underline transition duration-300">
              Testimonials
            </span>
            <span className="inline-block underline hover:no-underline transition duration-300">
              Media Mentions
            </span>
          </div>
          <button className="px-6 py-3 mt-4 text-blue-800 rounded-lg bg-gradient-to-r from-white via-blue-50 to-pink-100 hover:from-blue-50 hover:via-pink-100 hover:to-white transition">
            <span className="mr-2">★</span> Start Healing Today
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="w-full py-16 flex flex-col md:flex-row items-center justify-around text-white"
        style={{ backgroundColor: '#2C4D4A' }}
      >
        <div className="mb-10 md:mb-0 text-center px-6">
          <div className="text-5xl font-bold mb-2">{yearsCount}</div>
          <h3 className="text-xl font-semibold mb-1">Years Experience</h3>
          <p className="max-w-xs">
            Providing compassionate and effective Individual and Couples Therapy
          </p>
        </div>

        <div className="text-center px-6">
          <div className="text-5xl font-bold mb-2">
            {sessionsCount.toLocaleString()}
          </div>
          <h3 className="text-xl font-semibold mb-1">
            Individual Client Sessions
          </h3>
          <p className="max-w-xs">
            Helping individuals and couples heal, grow, and find purpose
          </p>
        </div>
      </section>
    </>
  );
}
