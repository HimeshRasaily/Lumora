import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Palette, Code, Briefcase, Brain, Database, TrendingUp } from 'lucide-react';

const skills = [
  {
    id: 'design',
    title: 'Design',
    description: 'UI/UX, Graphic Design, Product Design',
    icon: Palette,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Web Dev, Mobile Dev, Cloud Computing',
    icon: Code,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'business',
    title: 'Business',
    description: 'Management, Strategy, Leadership',
    icon: Briefcase,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 'ai',
    title: 'AI & ML',
    description: 'Machine Learning, Deep Learning, NLP',
    icon: Brain,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
  },
  {
    id: 'data',
    title: 'Data Science',
    description: 'Analytics, Visualization, Big Data',
    icon: Database,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Digital Marketing, SEO, Content Strategy',
    icon: TrendingUp,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function SkillCategories() {
  const navigate = useNavigate();

  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Skills That
            <span className="text-gradient"> Matter</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated categories and start your learning journey today.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.id} variants={itemVariants}>
                <Card
                  onClick={() => navigate(`/course/${skill.id}`)}
                  className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant bg-card/50 backdrop-blur-sm h-full flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-xl ${skill.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-8 w-8 ${skill.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                      {skill.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <button className="text-sm font-medium text-primary group-hover:text-primary-light transition-colors duration-200 flex items-center">
                      Explore courses
                      <svg
                        className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}