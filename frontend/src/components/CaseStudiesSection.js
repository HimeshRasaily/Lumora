import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, TrendingUp, Award, Target } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'From College Student to Product Designer in 6 Months',
    student: 'Alex Johnson',
    before: 'Psychology major with no design experience',
    after: 'Junior Product Designer at a SaaS startup',
    skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
    outcome: 'Landed dream job with 15% higher salary than expected',
    testimonial: 'LUMORA gave me the structure and mentorship I needed to transition careers. The hands-on projects were invaluable.',
    icon: TrendingUp,
  },
  {
    id: 2,
    title: 'Switching from Non-Tech to Data Analytics',
    student: 'Maria Santos',
    before: 'Marketing coordinator feeling stuck in career',
    after: 'Data Analyst at Fortune 500 company',
    skills: ['Python', 'SQL', 'Data Visualization', 'Statistics'],
    outcome: 'Career pivot with 40% salary increase',
    testimonial: 'The structured learning path and real-world projects gave me the confidence to make the switch.',
    icon: Award,
  },
  {
    id: 3,
    title: 'Building Confidence in Full-Stack Development',
    student: 'Ryan Park',
    before: 'Self-taught developer struggling with imposter syndrome',
    after: 'Senior Full-Stack Engineer leading projects',
    skills: ['React', 'Node.js', 'System Design', 'Leadership'],
    outcome: 'Promoted twice in 18 months',
    testimonial: 'LUMORA helped me fill knowledge gaps and gain the confidence to lead. The mentorship was transformative.',
    icon: Target,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Stories,
            <span className="text-gradient"> Real Results</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our learners transformed their careers and achieved their goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <motion.div key={study.id} variants={itemVariants}>
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 glass">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl sm:text-2xl">{study.title}</CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          <span className="font-semibold text-foreground">{study.student}</span>
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Before & After */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Before</div>
                        <p className="text-sm text-foreground leading-relaxed">{study.before}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider">After</div>
                        <p className="text-sm text-foreground font-medium leading-relaxed">{study.after}</p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Skills Learned</div>
                      <div className="flex flex-wrap gap-2">
                        {study.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Outcome</div>
                      <p className="text-sm text-foreground font-medium flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        {study.outcome}
                      </p>
                    </div>

                    {/* Testimonial */}
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <p className="text-sm italic text-muted-foreground leading-relaxed">"{study.testimonial}"</p>
                    </div>
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