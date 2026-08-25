"use client";
import { TextEffect } from '@/components/core/text-effect';
import React, { useState } from "react";

export default function CssImageStacking() {
  const cards = [
    { title: "Foundational Classrooms", subtitle: "State Board grounding in MGR Nagar", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop" },
    { title: "Sports & Athletics Field", subtitle: "Building team spirit and endurance", src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&auto=format&fit=crop" },
    { title: "Cultural Stage Fests", subtitle: "Encouraging artistic talent & confidence", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop" },
    { title: "Science & Computer Labs", subtitle: "Hands-on practical experiments", src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&auto=format&fit=crop" },
    { title: "Campus Reading Library", subtitle: "Supporting daily reading habits", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop" },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#fff7ed] py-24 px-6 border-t border-orange-200">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-300 font-body">
          THIRUNINRAVUR SPOTLIGHT STAGE
        </span>
        <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl sm:text-5xl font-extrabold text-[#7c2d12] mt-4 font-heading leading-tight">
          Campus Moments at Dhaya School
        </TextEffect>
        <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-orange-900/80 text-base sm:text-lg mt-3 font-body">
          Click any campus card below to feature that highlight.
        </TextEffect>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Main Display Stage */}
        <div className="w-full h-[55vh] sm:h-[65vh] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(234,88,12,0.12)] relative">
          <img
            src={cards[active].src}
            alt={cards[active].title}
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
          />
        </div>

        <div className="mt-4 text-center">
          <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl font-bold text-[#7c2d12] font-heading">{cards[active].title}</TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-orange-900/80 font-body mt-1">{cards[active].subtitle}</TextEffect>
        </div>

        {/* Card Selector Row */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {cards.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 font-body ${active === idx ? "bg-[#7c2d12] text-white shadow-md scale-105" : "bg-white text-slate-700 border border-orange-200 hover:bg-orange-50"}`}
            >
              0{idx + 1}. {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
