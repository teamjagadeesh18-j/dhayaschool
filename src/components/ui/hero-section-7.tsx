import { TextEffect } from '@/components/core/text-effect';
import React from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, Backpack, BookOpen, PenTool, Globe, Bus } from 'lucide-react';
import { FocusReveal } from '@/components/ui/focus-reveal';
import StarfieldButton from '@/components/ui/starfield-button';

interface FloatingImageProps {
  icon: React.ReactNode;
  className: string;
}

export interface FloatingSchoolHeroProps {
  title: string;
  description: string;
  badge?: string;
  ctaText?: string;
  className?: string;
  bgImage?: string;
}

const Swirls = () => (
  <>
    <svg className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-[#ff4f00]/10" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M515.266 181.33C377.943 51.564 128.537 136.256 50.8123 293.565C-26.9127 450.874 125.728 600 125.728 600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <svg className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-[#ff4f00]/10" width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M26.8838 528.274C193.934 689.816 480.051 637.218 594.397 451.983C708.742 266.748 543.953 2.22235 543.953 2.22235" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </>
);

export function FloatingSchoolHero({
  title,
  description,
  badge = "Thiruninravur MGR Nagar • Rating 4.5★",
  ctaText = "Apply Now",
  className,
  bgImage = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80"
}: FloatingSchoolHeroProps) {
  const floatingIcons: FloatingImageProps[] = [
    { icon: <GraduationCap className="w-10 h-10 text-[#ff4f00]" />, className: "top-16 left-8 sm:left-20 animate-float" },
    { icon: <Backpack className="w-9 h-9 text-[#ff4f00]" />, className: "top-20 right-8 sm:right-24 animate-float [animation-delay:1s]" },
    { icon: <BookOpen className="w-10 h-10 text-[#ff4f00]" />, className: "bottom-24 right-12 sm:right-32 animate-float [animation-delay:2s]" },
    { icon: <PenTool className="w-8 h-8 text-[#ff4f00]" />, className: "top-1/3 left-1/4 animate-float [animation-delay:1.5s]" },
    { icon: <Globe className="w-9 h-9 text-[#ff4f00]" />, className: "top-1/2 right-1/4 animate-float [animation-delay:2.5s]" },
    { icon: <Bus className="w-9 h-9 text-[#ff4f00]" />, className: "bottom-32 left-16 sm:left-32 animate-float [animation-delay:0.5s]" },
  ];

  return (
    <section className={cn('relative w-full min-h-[640px] flex items-center justify-center overflow-hidden bg-[#fafafa] py-16 md:py-24', className)}>
      {/* Subtle School Campus Background Image in Website's Light Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.14]">
        <img
          src={bgImage}
          alt="Dhaya Matriculation School Campus"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafafa]/50 to-[#fafafa]" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none"><Swirls /></div>
      <div className="absolute inset-0 z-20 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <div key={index} className={cn('absolute p-3.5 rounded-2xl bg-white/90 border border-[#e5e5e5] backdrop-blur-md shadow-md', item.className)}>
            {item.icon}
          </div>
        ))}
      </div>
      <div className="relative z-30 container mx-auto px-4 text-center max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff0eb] border border-[#e5e5e5] backdrop-blur-sm">
          <GraduationCap className="h-4 w-4 text-[#ff4f00]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4f00] font-body">{badge}</span>
        </div>
        <FocusReveal text={title} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight font-heading" />
        <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="mt-4 text-base sm:text-lg leading-relaxed text-[#666666] max-w-2xl mx-auto font-body">{description}</TextEffect>
        <div className="pt-4 flex justify-center gap-4 font-body">
          <StarfieldButton
            label={ctaText}
          />
        </div>
      </div>
    </section>
  );
}
