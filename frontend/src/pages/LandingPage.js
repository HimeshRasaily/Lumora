import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import SkillCategories from "../components/SkillCategories";
import MentorsSection from "../components/MentorsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import DashboardPreview from "../components/DashboardPreview";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SkillCategories />
      <MentorsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <DashboardPreview />
      <PricingSection />
      <Footer />
    </div>
  );
}
