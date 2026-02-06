import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const mentors = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Product Designer at Stripe',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    bio: 'Specialized in design systems and user research with 8+ years of experience.',
    rating: 4.9,
    students: 2400,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Senior Software Engineer at Google',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    bio: 'Full-stack developer passionate about teaching modern web technologies.',
    rating: 4.8,
    students: 3200,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Data Scientist at Meta',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6',
    bio: 'Expert in machine learning and AI with a focus on practical applications.',
    rating: 4.9,
    students: 1800,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Creative Director at Adobe',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    bio: 'Award-winning designer teaching the art of visual storytelling.',
    rating: 5.0,
    students: 2100,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Business Strategy Consultant',
    image: 'https://images.pexels.com/photos/35590598/pexels-photo-35590598.jpeg',
    bio: 'Former McKinsey consultant helping professionals level up their careers.',
    rating: 4.8,
    students: 1500,
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'ML Engineer at OpenAI',
    image: 'https://images.pexels.com/photos/35584277/pexels-photo-35584277.jpeg',
    bio: 'Building the future of AI while teaching the next generation.',
    rating: 4.9,
    students: 2800,
  },
];

export default function MentorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slidesPerView = 3;
  const maxIndex = mentors.length - slidesPerView;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="mentors" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Learn from
            <span className="text-gradient"> Industry Experts</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mentors are professionals from top companies, ready to guide you to success.
          </p>
        </motion.div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Mentors Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: `-${currentIndex * (100 / slidesPerView)}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {mentors.map((mentor) => (
              <motion.div
                key={mentor.id}
                className="min-w-[calc(100%/3-1.33rem)] hidden lg:block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full glass hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-24 w-24 mb-4 ring-4 ring-primary/20">
                        <AvatarImage src={mentor.image} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{mentor.role}</p>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{mentor.bio}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{mentor.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{mentor.students.toLocaleString()} students</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile View - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="glass hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4 ring-4 ring-primary/20">
                      <AvatarImage src={mentor.image} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{mentor.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{mentor.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{mentor.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{mentor.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}