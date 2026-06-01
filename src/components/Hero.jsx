'use client';

import { Search, MapPin, Briefcase, Building2, Users, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import gobble from '../asserts/globe.png';
import Navber from '../components/Navber';

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#080a0e] text-white font-sans antialiased flex flex-col overflow-hidden relative">

      {/* Starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() > 0.85 ? '2px' : '1px',
              height: Math.random() > 0.85 ? '2px' : '1px',
              top: `${Math.random() * 65}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>
      {/* <Navber /> */}

      <main className="relative z-10 flex-1 flex flex-col items-center pt-14 md:pt-20 px-4">


        {/* Badge */}
        <div
              
            >
              <Image
                src={gobble}
                alt="World Globe"
                width={1400}
                height={640}
                className="absolute top-0 left-1/2 transform -translate-x-1/2"
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>
        <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full text-[11px] tracking-widest text-gray-400 uppercase mb-7 backdrop-blur-sm">
          <span>💼</span>
          <span><strong className="text-white font-semibold">50,000+</strong> New Jobs This Month</span>
        </div>

        {/* Heading */}
        <h1 className="text-[2.6rem] md:text-6xl font-extrabold tracking-tight text-center max-w-3xl mb-5 leading-[1.12]">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-center max-w-xl text-sm md:text-base mb-9 leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-3xl mb-6 relative z-10">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-2 flex flex-col md:flex-row items-center gap-3 md:gap-0 shadow-2xl backdrop-blur-md focus-within:border-zinc-700 transition-all">
            <div className="flex items-center gap-3 w-full pl-3 py-2 md:py-0">
              <Search className="text-gray-500 w-5 h-5 shrink-0" />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="bg-transparent w-full focus:outline-none text-sm text-white placeholder-gray-500"
              />
            </div>
            <div className="hidden md:block w-px h-6 bg-zinc-700 mx-2" />
            <div className="flex items-center gap-3 w-full pl-3 md:pl-0 py-2 md:py-0">
              <MapPin className="text-gray-500 w-5 h-5 shrink-0" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="bg-transparent w-full focus:outline-none text-sm text-white placeholder-gray-500"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white w-full md:w-auto px-5 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg shadow-blue-600/20 active:scale-95">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trending tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500 mb-0 relative z-10">
          <span>Trending Position:</span>
          {['Product Designer', 'AI Engineering', 'Dev-ops Engineer'].map((tag) => (
            <span
              key={tag}
              className="bg-zinc-900 border border-zinc-800/60 px-3 py-1 rounded-full text-gray-300 cursor-pointer hover:bg-zinc-800 hover:text-white transition-all"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Globe + Stats */}
        <div className="relative w-full max-w-5xl mx-auto mt-0">

          {/* Text */}
          <div className="relative z-20 text-center py-10">
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed">
              Assisting over{' '}
              <span className="text-white font-bold">15,000 job seekers</span>
              <br className="hidden sm:inline" />
              {' '}find their dream positions.
            </h2>
          </div>

          {/*
            Globe wrapper:
            - overflow:hidden → নিচের অর্ধেক কাটবে
            - height:320px → শুধু উপরের অর্ধেক দেখাবে
            - Image width:640px height:640px, centered → ঠিক অর্ধেক দেখাবে
          */}
          <div
            className="relative w-full overflow-hidden"
            style={{ height: '320px' }}
          >
            {/* Glow fallback */}
            <div
              className="absolute pointer-events-none transition-opacity duration-700"
              style={{
                width: '640px',
                height: '640px',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 50% 40%, #5533ff44 0%, #3b2daa22 40%, transparent 70%)',
                filter: 'blur(30px)',
                opacity: imageLoaded ? 0 : 1,
              }}
            />

            {/* Globe Image — 640×640, centered, top half visible */}
            

            {/* Bottom fade — page bg রঙের সাথে blend */}
            <div
              className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
              style={{
                height: '160px',
                background: 'linear-gradient(to top, #080a0e 0%, transparent 100%)',
              }}
            />
          </div>

          {/* Stats Cards */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-full px-4 pb-12 mt-0">
            {[
              { icon: Briefcase, value: '50K', label: 'Active Jobs' },
              { icon: Building2, value: '12K', label: 'Companies' },
              { icon: Users, value: '2M', label: 'Job Seekers' },
              { icon: Star, value: '97%', label: 'Satisfaction Rate' },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-zinc-950/60 border border-zinc-900/80 rounded-2xl p-5 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 group"
              >
                <div className="text-gray-400 mb-4 bg-zinc-900/60 w-9 h-9 rounded-lg flex items-center justify-center border border-zinc-800/50 group-hover:border-zinc-700 transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-2xl md:text-3xl font-bold tracking-tight mb-1">{value}</div>
                <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}