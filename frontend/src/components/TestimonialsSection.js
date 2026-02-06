import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jessica Lee',
    role: 'UX Designer at Airbnb',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    quote: 'LUMORA transformed my career. The mentorship was personalized, the content was top-notch, and the community was incredibly supportive. I went from junior to senior designer in just 2 years.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer at Microsoft',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    quote: 'The structured learning paths and hands-on projects gave me exactly what I needed to level up. The investment in LUMORA was one of the best decisions I\'ve made for my career.',
  },
  {
    id: 3,
    name: 'Sophia Martinez',
    role: 'Data Scientist at Netflix',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    quote: 'I love how practical everything is. Every course is designed with real-world applications in mind. The mentors are experienced professionals who genuinely care about your success.',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Product Manager at Spotify',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    quote: 'LUMORA helped me transition from engineering to product management seamlessly. The business and leadership courses were exactly what I needed to make the switch.',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our
            <span className="text-gradient"> Learners Say</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with LUMORA.
          </p>
        </motion.div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="glass border-border/50 shadow-elegant max-w-4xl mx-auto">
                <CardContent className="p-8 sm:p-12">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="h-12 w-12 text-primary/30 mb-6" />
                    <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic">
                      "{currentTestimonial.quote}"
                    </p>
                    <Avatar className="h-20 w-20 mb-4 ring-4 ring-primary/20">
                      <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                      <AvatarFallback>{currentTestimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h4 className="text-xl font-bold mb-1">{currentTestimonial.name}</h4>
                    <p className="text-sm text-primary font-medium">{currentTestimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-border hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}