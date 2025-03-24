"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import BookCarousel from "@/components/sections/BookCarousel";
import AuthorSection from "@/components/sections/AuthorSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <div className="bg-pallete-background w-full">
      <HeroSection />
      <BookCarousel />
      <AuthorSection />
      <ContactSection />
    </div>
  );
}