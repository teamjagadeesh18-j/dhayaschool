"use client";

import SchoolMessageSection from "@/components/ui/school-message-section";

import { ScrollVelocityDemo } from "@/components/ui/scroll-velocity-demo";

import CssImageStacking from "@/components/ui/css-image-stacking";

import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import { Footer } from "@/components/ui/footer-section";
import React from "react";
import { AnnouncementBar, SpatialHeader, LogoStripCard, SpatialFeatureSection } from "@/components/ui/themed-spatial-hero";
import { FloatingSchoolHero } from "@/components/ui/hero-section-7";
import AcademicStructure from "@/components/ui/academic-structure";
import TestimonialsSection from "@/components/ui/community-testimonial";
import ConnectSection from "@/components/ui/connect-section";
import FAQs from "@/components/ui/text-reveal-faqs";
import HowItWorksLiquid from "@/components/ui/how-it-works-liquid";

export default function Home() {
  const communityTestimonialsData = {
  "title": "Parent & Community Reviews",
  "subtitle": "Community feedback for Dhaya Matriculation School, Thiruninravur MGR Nagar",
  "rows": [
    {
      "id": "row1",
      "speed": "45s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t1",
          "quote": "Dhaya Matriculation School delivers steady, honest education in MGR Nagar. The teachers are dedicated and approachable.",
          "authorName": "G. Mohan",
          "authorTitle": "Parent of Class 7 Student"
        },
        {
          "id": "t2",
          "quote": "Affordable fee structure with good State Board grounding. My child has built strong reading and arithmetic habits.",
          "authorName": "Mary Stella",
          "authorTitle": "Primary School Parent"
        },
        {
          "id": "t3",
          "quote": "Graduating from Dhaya in 2021 gave me solid fundamentals. The school instills confidence in local students.",
          "authorName": "S. Vasugi",
          "authorTitle": "Alumna (Batch 2021)"
        }
      ]
    },
    {
      "id": "row2",
      "speed": "35s",
      "direction": "right",
      "testimonials": [
        {
          "id": "t4",
          "quote": "A humble, community-first school within Avadi Educational Circle. Management listens to parent feedback willingly.",
          "authorName": "Mohamed Farooq",
          "authorTitle": "Parent Association Member"
        },
        {
          "id": "t5",
          "quote": "Disciplined classes, regular homework checking, and helpful teachers. Dhaya has earned local families' trust.",
          "authorName": "R. Manigandan",
          "authorTitle": "Parent of Class 6 Student"
        },
        {
          "id": "t6",
          "quote": "Safe neighborhood campus with friendly staff. Children feel comfortable and happy attending school daily.",
          "authorName": "M. Kanchana",
          "authorTitle": "Parent of Class 3 Student"
        }
      ]
    },
    {
      "id": "row3",
      "speed": "50s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t7",
          "quote": "Inspiring learning and empowering futures is truly reflected in how teachers guide every individual pupil.",
          "authorName": "K. Thanigaimalai",
          "authorTitle": "Alumnus"
        },
        {
          "id": "t8",
          "quote": "Clear academic guidance and regular terminal tests keep students on track throughout the academic term.",
          "authorName": "V. Malathi",
          "authorTitle": "Parent Representative"
        },
        {
          "id": "t9",
          "quote": "A solid educational choice in Thiruninravur for parents seeking affordable, disciplined matriculation education.",
          "authorName": "T. Elangovan",
          "authorTitle": "Parent of Class 5 Student"
        }
      ]
    }
  ]
};

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#666666] antialiased selection:bg-[#ff4f00] selection:text-white font-body">
      {/* Spatial Header */}
      <SpatialHeader />

      {/* Upper-Middle Hero Velocity Ribbon */}
      
      {/* School Specific Animated Hero Section */}
      <FloatingSchoolHero
        badge="Thiruninravur MGR Nagar • Rating 4.5★"
        title="Accessible Quality Education for Every Child"
        description="Delivering disciplined Matriculation learning, practical science labs, and supportive teacher mentoring."
        ctaText="Apply Now"
      />
      {/* Student Achievement Strip Card */}
                              
      <LogoStripCard />
      

      {/* Alternating Feature Block */}
      <SpatialFeatureSection />

      {/* Clean Frameless Middle Image Velocity Strip */}
      <ScrollVelocityDemo />

      {/* How it Works Liquid Section */}
      <HowItWorksLiquid
        title="How Admissions Work"
        subtitle="Each step flows seamlessly into the next."
      />

      <InfiniteRibbon duration={35} className="bg-white text-[#111111] border-y border-[#e5e5e5] py-4 text-sm sm:text-base font-semibold tracking-wide font-body shadow-sm">
        <span className="text-[#e64a19]">✦</span> Academic Excellence
        <span className="text-[#e64a19]">✦</span> State Board Rigor
        <span className="text-[#e64a19]">✦</span> Dedicated Faculty
        <span className="text-[#e64a19]">✦</span> Holistic Student Development
        <span className="text-[#e64a19]">✦</span> Safe & Caring Campus
        <span className="text-[#e64a19]">✦</span> Admissions Open
      </InfiniteRibbon>
      

      {/* Academic Structure Section */}
      <AcademicStructure
        secondaryColor="#ff4f00"
        title="Academic Journey"
        subtitle="From Early Learning to Higher Secondary"
        description="A well-structured learning journey designed to support students at every stage of their academic and personal development."
        cards={[
          {
            tag: "LKG & UKG",
            title: "Kindergarten & Early Years",
            description: "A gentle, play-integrated foundational curriculum focusing on language, numbers, sensory development, and social confidence.",
            buttonText: "Explore Early Years",
          },
          {
            tag: "Classes 1 to 5",
            title: "Primary Foundation Stage",
            description: "Building fundamental skills in Mathematics, Science, Languages, and Environmental Studies through engaging, activity-based lessons.",
            buttonText: "View Curriculum",
          },
          {
            tag: "Classes 6 to 8",
            title: "Middle School Exploration",
            description: "Strengthening analytical thinking, practical lab work, digital literacy, and collaborative problem-solving across core subjects.",
            buttonText: "Middle School Details",
          },
          {
            tag: "Classes 9 & 10",
            title: "High School Board Preparation",
            description: "Comprehensive State Board exam preparation supported by expert faculty, mock tests, personalized feedback, and concept clarity.",
            buttonText: "Board Preparation",
          },
          {
            tag: "Classes 11 & 12",
            title: "Higher Secondary Streams",
            description: "Specialized Science, Computer Science, and Commerce streams preparing students for entrance exams, degree admissions, and future careers.",
            buttonText: "Explore Hr. Sec. Streams",
            isHighlighted: true,
          },
        ]}
      />

      {/* Testimonials Section */}
      {/* CSS Image Stacking Gallery Showcase */}
      <CssImageStacking />

      <section id="testimonials" className="py-16 bg-[#fafafa] border-t border-[#e5e5e5]">
        <TestimonialsSection data={communityTestimonialsData} />
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQs />

      {/* Connect & Admission Inquiry Form */}
      <ConnectSection />

      {/* Light Clean Footer */}
      {/* Leadership Message to Parents & Students */}
      <SchoolMessageSection />

      <Footer />
      </main>
  );
}