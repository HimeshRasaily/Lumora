import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { ArrowLeft, Clock, Users, Star, Play, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

const courseData = {
  design: {
    title: 'Design Mastery',
    description: 'Master UI/UX, graphic design, and product design with industry experts',
    instructor: 'Sarah Mitchell',
    rating: 4.9,
    students: 2400,
    duration: '40 hours',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    modules: [
      { title: 'Design Fundamentals', lessons: 8, duration: '4h' },
      { title: 'UI Design Principles', lessons: 12, duration: '6h' },
      { title: 'UX Research & Testing', lessons: 10, duration: '5h' },
      { title: 'Design Systems', lessons: 8, duration: '4h' },
      { title: 'Portfolio Building', lessons: 6, duration: '3h' },
    ],
  },
  technology: {
    title: 'Full-Stack Development',
    description: 'Learn web development, mobile apps, and cloud computing from scratch',
    instructor: 'Marcus Chen',
    rating: 4.8,
    students: 3200,
    duration: '60 hours',
    level: 'Beginner to Advanced',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    modules: [
      { title: 'HTML, CSS & JavaScript Basics', lessons: 15, duration: '8h' },
      { title: 'React & Modern Frontend', lessons: 18, duration: '10h' },
      { title: 'Node.js & Backend Development', lessons: 16, duration: '9h' },
      { title: 'Databases & APIs', lessons: 12, duration: '6h' },
      { title: 'Deployment & DevOps', lessons: 10, duration: '5h' },
    ],
  },
  business: {
    title: 'Business Leadership',
    description: 'Develop management, strategy, and leadership skills for career growth',
    instructor: 'Lisa Thompson',
    rating: 4.8,
    students: 1500,
    duration: '35 hours',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    modules: [
      { title: 'Leadership Fundamentals', lessons: 10, duration: '5h' },
      { title: 'Strategic Thinking', lessons: 8, duration: '4h' },
      { title: 'Team Management', lessons: 12, duration: '6h' },
      { title: 'Business Communication', lessons: 9, duration: '4.5h' },
      { title: 'Project Management', lessons: 11, duration: '5.5h' },
    ],
  },
  ai: {
    title: 'AI & Machine Learning',
    description: 'Master machine learning, deep learning, and NLP with practical projects',
    instructor: 'James Wilson',
    rating: 4.9,
    students: 2800,
    duration: '55 hours',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    modules: [
      { title: 'Machine Learning Basics', lessons: 14, duration: '7h' },
      { title: 'Deep Learning & Neural Networks', lessons: 16, duration: '8h' },
      { title: 'Natural Language Processing', lessons: 12, duration: '6h' },
      { title: 'Computer Vision', lessons: 10, duration: '5h' },
      { title: 'AI Project Development', lessons: 8, duration: '4h' },
    ],
  },
  data: {
    title: 'Data Science Bootcamp',
    description: 'Learn analytics, visualization, and big data with real-world datasets',
    instructor: 'Emily Rodriguez',
    rating: 4.9,
    students: 1800,
    duration: '50 hours',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    modules: [
      { title: 'Data Analysis Fundamentals', lessons: 12, duration: '6h' },
      { title: 'Python for Data Science', lessons: 15, duration: '7.5h' },
      { title: 'Data Visualization', lessons: 10, duration: '5h' },
      { title: 'Statistics & Probability', lessons: 13, duration: '6.5h' },
      { title: 'Big Data & Machine Learning', lessons: 14, duration: '7h' },
    ],
  },
  marketing: {
    title: 'Digital Marketing Mastery',
    description: 'Master digital marketing, SEO, and content strategy for business growth',
    instructor: 'David Park',
    rating: 5.0,
    students: 2100,
    duration: '45 hours',
    level: 'Beginner to Intermediate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    modules: [
      { title: 'Marketing Fundamentals', lessons: 11, duration: '5.5h' },
      { title: 'SEO & SEM Strategies', lessons: 14, duration: '7h' },
      { title: 'Content Marketing', lessons: 12, duration: '6h' },
      { title: 'Social Media Marketing', lessons: 13, duration: '6.5h' },
      { title: 'Analytics & Optimization', lessons: 10, duration: '5h' },
    ],
  },
};

export default function CoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    toast.success('Enrollment successful! This is a demo.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-background/20 backdrop-blur-sm text-primary-foreground border-primary-light/30">
                {course.level}
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">{course.title}</h1>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl">{course.description}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/90">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Instructor */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{course.instructor.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{course.instructor}</h3>
                    <p className="text-sm text-muted-foreground">Industry Expert & Mentor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Modules */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <CardDescription>
                  {course.modules.length} modules • {course.modules.reduce((acc, m) => acc + m.lessons, 0)} lessons
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.modules.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="p-2 rounded bg-primary/10">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{module.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {module.lessons} lessons • {module.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="glass border-border/50 shadow-elegant sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <Play className="h-16 w-16 text-primary" />
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-foreground">$29/month</div>
                  <Button onClick={handleEnroll} className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 border-0">
                    Enroll Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">30-day money-back guarantee</p>
                </div>
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <h4 className="font-semibold text-sm">This course includes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Lifetime access</li>
                    <li>✓ Certificate of completion</li>
                    <li>✓ Weekly mentor sessions</li>
                    <li>✓ Community access</li>
                    <li>✓ Downloadable resources</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}