"use client";
import { TextEffect } from '@/components/core/text-effect';
import React from "react";

export default function SchoolMessageSection() {
  const config = {
    "themeBg": "bg-[#fff7ed]",
    "border": "border-orange-200",
    "badgeBg": "bg-orange-100",
    "badgeText": "text-orange-900",
    "badgeBorder": "border-orange-300",
    "primaryText": "text-[#7c2d12]",
    "accentGold": "text-orange-700",
    "cardBg": "bg-white",
    "cardShadow": "shadow-[0_20px_50px_rgba(234,88,12,0.08)]",
    "leaderName": "School Management & Leadership",
    "leaderRole": "Founder & Correspondent",
    "motto": "Guiding students of Thiruninravur toward bright academic futures and noble values.",
    "salutation": "DEAR PARENTS & ASPIRED STUDENTS",
    "heading": "Guiding Thiruninravur Toward Academic Excellence",
    "paragraph1": "At Dhaya Matriculation School in MGR Nagar, we believe every child possesses infinite potential waiting to be unlocked.",
    "paragraph2": "Through patient faculty guidance and state board mastery, we prepare our students to excel in higher education and life.",
    "stats": [
        {
            "value": "100%",
            "label": "Board Pass Distinction"
        },
        {
            "value": "18+",
            "label": "Years of Service"
        },
        {
            "value": "100%",
            "label": "Dedicated Mentorship"
        }
    ]
};

  return (
    <section className={`w-full ${config.themeBg} py-20 px-6 ${config.border} border-t border-b`}>
      <div className="max-w-6xl mx-auto">
        <div className={`${config.cardBg} ${config.cardShadow} rounded-3xl p-8 sm:p-12 border ${config.border} relative overflow-hidden`}>
          
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${config.badgeBg} ${config.badgeText} border ${config.badgeBorder} font-body`}>
              {config.salutation}
            </span>
            <span className={`text-xs font-bold tracking-widest uppercase ${config.accentGold} font-body`}>
              LEADERSHIP DIRECTIVE
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-5">
              <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className={`text-3xl sm:text-4xl font-extrabold ${config.primaryText} font-heading leading-tight`}>
                {config.heading}
              </TextEffect>
              
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-slate-600 text-base sm:text-lg font-body leading-relaxed">
                "{config.paragraph1}"
              </TextEffect>

              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                "{config.paragraph2}"
              </TextEffect>

              {/* Leadership Signature Badge */}
              <div className="pt-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${config.badgeBg} flex items-center justify-center font-bold font-heading text-lg ${config.badgeText}`}>
                  ✦
                </div>
                <div>
                  <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className={`text-base font-bold ${config.primaryText} font-heading`}>
                    Principal & Management Desk
                  </TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-slate-500 font-body">
                    {config.leaderRole}
                  </TextEffect>
                </div>
              </div>
            </div>

            {/* Right Stats Column */}
            <div className="lg:col-span-4 bg-slate-50/80 rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-100">
              <span className={`text-xs font-bold uppercase tracking-widest ${config.accentGold} font-body`}>
                INSTITUTION HIGHLIGHTS
              </span>
              <div className="space-y-5">
                {config.stats.map((stat, idx) => (
                  <div key={idx} className="border-b border-slate-200/60 pb-3 last:border-0 last:pb-0">
                    <span className={`text-2xl sm:text-3xl font-extrabold ${config.primaryText} font-heading block`}>
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 font-body">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
