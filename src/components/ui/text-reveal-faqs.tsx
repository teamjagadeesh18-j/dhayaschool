"use client";

import { TextEffect } from '@/components/core/text-effect';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'Where is Dhaya Matriculation School located?',
      answer: 'Our campus is located at MGR Nagar, Thiruninravur, Chennai, serving the local community with accessible quality education.',
    },
    {
      id: 'item-2',
      question: 'What curriculum does Dhaya Matriculation School provide?',
      answer: 'We offer Tamil Nadu State Board Matriculation curriculum from Primary through High School with an emphasis on conceptual clarity.',
    },
    {
      id: 'item-3',
      question: 'What laboratory and computer facilities are on campus?',
      answer: 'Students have access to practical science labs, digital computer workstations, and interactive classroom resources.',
    },
    {
      id: 'item-4',
      question: 'How does Dhaya Matriculation School support holistic student development?',
      answer: 'We organize inter-house sports competitions, annual cultural programs, science fairs, and personality development workshops.',
    },
    {
      id: 'item-5',
      question: 'How can I get information regarding fees and admissions?',
      answer: 'Parents can visit our school office at MGR Nagar, Thiruninravur or reach us via our website’s contact form for complete details.',
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#ffffff] border-t border-[#e5e5e5] font-body">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block px-3.5 py-1 rounded-[16px] bg-[#fff0eb] text-[#e64a19] border border-[#e5e5e5] text-xs font-semibold tracking-wide uppercase font-body mb-3">
              HELP & ADMISSIONS
            </span>
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#111111] text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#666666] mt-4 text-balance text-base md:text-lg">
              Everything you need to know about Dhaya Matriculation School.
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#666666] mt-6 hidden md:block text-sm">
              Can’t find what you’re looking for? Reach out to our{' '}
              <Link
                href="#connect"
                className="text-[#e64a19] font-semibold hover:underline"
              >
                admissions support team
              </Link>{' '}
              for assistance.
            </TextEffect>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#e5e5e5]">
                  <AccordionTrigger className="cursor-pointer text-left text-base font-semibold text-[#111111] hover:text-[#e64a19] hover:no-underline font-heading">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666]">
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#666666] mt-6 md:hidden text-sm">
            Can't find what you're looking for? Contact our{' '}
            <Link
              href="#connect"
              className="text-[#e64a19] font-semibold hover:underline">
              admissions team
            </Link>
          </TextEffect>
        </div>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <div className="w-full pt-1">
      <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm md:text-base text-[#666666] leading-relaxed break-words whitespace-normal font-body"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </TextEffect>
    </div>
  );
};
