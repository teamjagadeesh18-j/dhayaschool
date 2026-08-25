"use client";
import { TextEffect } from '@/components/core/text-effect';

import React from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";

const Pin = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

export interface LiquidStep {
  title: string;
  description: string;
  color?: string;
}

export interface HowItWorksLiquidProps {
  steps?: LiquidStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_STEPS: LiquidStep[] = [
  { title: "Submit Online Inquiry", description: "Fill in student details online or visit our admissions office in school campus.", color: "#ea580c" },
  { title: "Campus Interaction & Tour", description: "Interact with our dedicated teachers and explore school campus facilities.", color: "#2563eb" },
  { title: "Document Verification", description: "Submit birth certificate, transfer certificate (TC), and academic records.", color: "#9333ea" },
  { title: "Enrollment Confirmation", description: "Receive official seat allocation confirmation and admission packet.", color: "#ea580c" },
  { title: "Welcome & School Start", description: "Attend student orientation, collect uniform & books, and start learning!", color: "#2563eb" },
];

const BLOB_PATHS = [
  "M20,0 C31,0 40,9 40,20 C40,31 31,40 20,40 C9,40 0,31 0,20 C0,9 9,0 20,0 Z",
  "M22,2 C33,-2 42,8 38,19 C42,30 31,42 20,38 C8,42 -2,30 3,19 C-2,8 11,-2 22,2 Z",
  "M18,1 C30,3 41,11 39,21 C41,33 28,41 18,39 C6,41 -1,29 1,19 C-1,9 8,-1 18,1 Z",
];

function BlobConnector({ color, delay }: { color: string; delay: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative flex justify-center h-10 md:h-8 my-1">
      <m.svg
        width="28"
        height="28"
        viewBox="0 0 40 40"
        initial={{ y: -14, opacity: 0 }}
        animate={isInView ? { y: [null, 0, 28, 28], opacity: [0, 1, 1, 0] } : {}}
        transition={{ duration: 1.4, delay, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
      >
        <m.path
          fill={color}
          initial={{ d: BLOB_PATHS[0] }}
          animate={isInView ? { d: [BLOB_PATHS[0], BLOB_PATHS[1], BLOB_PATHS[2], BLOB_PATHS[0]] } : {}}
          transition={{ duration: 1.4, delay, ease: "easeInOut" }}
        />
      </m.svg>
    </div>
  );
}

function LiquidCard({ step, index }: { step: LiquidStep; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`flex ${isLeft ? "justify-start" : "justify-end"} w-full`}>
      <m.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="w-full md:w-[320px]"
      >
        <div className="bg-white dark:bg-neutral-900 p-2 rounded-[16px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)] dark:shadow-none border border-neutral-200 dark:border-neutral-800">
          <div className="rounded-[12px] p-4 flex gap-3.5 items-start" style={{ backgroundColor: `${step.color}12` }}>
            <m.div
              animate={isInView ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm"
              style={{ backgroundColor: step.color }}
            >
              {index + 1}
            </m.div>
            <div className="flex-1">
              <Pin className="w-4 h-4 mb-1" style={{ color: step.color }} />
              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base font-bold text-neutral-900 dark:text-neutral-100 leading-snug">{step.title}</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-neutral-600 dark:text-neutral-300 text-xs mt-1 leading-relaxed font-normal">{step.description}</TextEffect>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
}

export default function HowItWorksLiquid({
  steps,
  title = "How Admissions Work",
  subtitle = "Each step flows seamlessly into the next.",
  className
}: HowItWorksLiquidProps) {
  const data = steps && steps.length > 0 ? steps : DEFAULT_STEPS;

  return (
    <LazyMotion features={domAnimation}>
      <section className={`bg-white dark:bg-black py-12 px-6 relative overflow-hidden ${className || ""}`}>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.15]"
          style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 32px" }}
        />
        <div className="max-w-2xl mx-auto text-center mb-8 relative z-10">
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{title}</TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-neutral-600 dark:text-neutral-300 mt-1.5 text-sm">{subtitle}</TextEffect>
        </div>

        <div className="max-w-xl mx-auto relative z-10">
          {data.map((step, index) => (
            <React.Fragment key={step.title}>
              <LiquidCard step={step} index={index} />
              {index < data.length - 1 && <BlobConnector color={step.color || "#3b82f6"} delay={index * 0.15} />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}
