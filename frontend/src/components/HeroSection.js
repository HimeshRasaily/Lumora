import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Users, TrendingUp } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  "https://images.unsplash.com/photo-1535957998253-26ae1ef29506",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ✅ Safe slideshow (no AnimatePresence)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ✅ DOM access guarded
  const handleScrollToSkills = () => {
    if (typeof window === "undefined") return;

    const element = document.getElementById("courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          key={currentImageIndex}
          src={heroImages[currentImageIndex]}
          alt="Learning inspiration"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <Badge className="mb-6 bg-background/20 backdrop-blur-sm text-primary-foreground">
          <Users className="h-3 w-3 mr-1" />
          Trusted by 50,000+ learners
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6">
          Learn skills that move
          <br />
          your life forward.
        </h1>

        <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
          Curated learning paths, real mentors, and practical skills designed for
          the modern world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleScrollToSkills}
            size="lg"
            className="bg-background text-primary min-w-[200px]"
          >
            Explore Skills
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            onClick={handleScrollToSkills}
            size="lg"
            variant="outline"
            className="bg-background/10 text-primary-foreground min-w-[200px]"
          >
            View Learning Paths
            <TrendingUp className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
