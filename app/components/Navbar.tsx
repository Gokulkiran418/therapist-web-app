'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiSparkles } from 'react-icons/hi';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaTree } from 'react-icons/fa'; 

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setShowTopBar(false);
      } else if (currentY <= 0) {
        setShowTopBar(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Peach Top Bar with border + animation */}
      <div
        className={`fixed left-0 w-full bg-[#FFE8D6] border-b border-black text-[#2C4D4A] text-xs z-50 transition-all duration-500 ${
          showTopBar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
          <span>(323) 555-0192</span>
          <span> 1287 Maplewood Drive, Los Angeles, CA 90026</span>
        </div>
      </div>

      {/* Navbar */}
      <nav
      className={`fixed left-0 w-full z-40 bg-white/80 backdrop-blur shadow-sm h-16 flex items-center transition-all duration-500 ${
        showTopBar ? 'top-6' : 'top-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
        {/* Logo with Tree Icon */}
        <a href="#hero" className="flex items-center gap-2 text-sm text-[#2C4D4A] font-bold">
        <img src="/handheart.svg" alt="Tree Logo" className="h-10 w-auto" />
        <div className="leading-tight">
          Dr. Serena Blake
        </div>
      </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-[#2C4D4A] text-sm font-medium items-center">
            <div className="relative group">
              <button className="hover:text-yellow-400 transition">Services</button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li><a href="#services" className="block px-4 py-2 hover:bg-teal-100">Anxiety & Stress Management</a></li>
                  <li><a href="#services" className="block px-4 py-2 hover:bg-teal-100">Relationship Counseling</a></li>
                  <li><a href="#services" className="block px-4 py-2 hover:bg-teal-100">Trauma Recovery</a></li>
                </ul>
              </div>
            </div>
            <Link href="#about" className="hover:text-yellow-400 transition">About</Link>
            <Link href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</Link>
            <Link href="#faq" className="hover:text-yellow-400 transition">Rates & FAQs</Link>
            <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center border border-[#2C4D4A] text-[#2C4D4A] px-4 py-2 rounded-md hover:bg-[#2C4D4A] hover:text-white transition text-sm"
          >
            <HiSparkles className="mr-2 text-lg" />
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden text-[#2C4D4A] focus:outline-none text-xl"
          >
            {navOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40 px-6 py-4 space-y-3 text-sm text-[#2C4D4A]">
            <a href="#about" className="block">About</a>
            <a href="#testimonials" className="block">Testimonials</a>
            <a href="#faq" className="block">Rates & FAQs</a>
            <a href="#contact" className="block">Contact</a>
            <hr />
            <a href="#services" className="block">Anxiety & Stress</a>
            <a href="#services" className="block">Relationship Counseling</a>
            <a href="#services" className="block">Trauma Recovery</a>
          </div>
        )}
      </nav>
    </>
  );
}
