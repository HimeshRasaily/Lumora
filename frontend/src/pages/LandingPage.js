import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Sparkles, BookOpen, Users, Star } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Learn Faster with{" "}
            <span className="text-gradient">LUMORA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Industry-ready courses, expert mentors, and real-world projects —
            all in one learning platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-primary border-0 hover:shadow-glow"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Expert-Led Courses",
              desc: "Curated courses taught by industry professionals.",
            },
            {
              icon: Users,
              title: "Mentor Support",
              desc: "Weekly mentor sessions and community guidance.",
            },
            {
              icon: Star,
              title: "Career Ready",
              desc: "Projects, certificates, and job-focused learning.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass border-border/50 h-full">
                <CardContent className="p-8 text-center space-y-4">
                  <item.icon className="h-10 w-10 mx-auto text-primary" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Sparkles className="h-10 w-10 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Start your learning journey today
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of learners upgrading their skills with Lumora.
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary border-0 hover:shadow-glow"
            onClick={() => navigate("/signup")}
          >
            Create Free Account
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Lumora. All rights reserved.
      </footer>
    </div>
  );
}
