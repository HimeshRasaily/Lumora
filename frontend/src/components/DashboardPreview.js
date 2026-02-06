import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Trophy, BookOpen, Clock, Award } from 'lucide-react';

const dashboardData = {
  stats: [
    { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'text-blue-500' },
    { label: 'Hours Learned', value: '156', icon: Clock, color: 'text-green-500' },
    { label: 'Certificates Earned', value: '8', icon: Award, color: 'text-purple-500' },
    { label: 'Skill Level', value: 'Pro', icon: Trophy, color: 'text-yellow-500' },
  ],
  courses: [
    { name: 'Advanced UI/UX Design', progress: 85, status: 'In Progress' },
    { name: 'Full-Stack Web Development', progress: 100, status: 'Completed' },
    { name: 'Data Science Fundamentals', progress: 60, status: 'In Progress' },
    { name: 'Product Management Essentials', progress: 100, status: 'Completed' },
  ],
};

export default function DashboardPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Learning,
            <span className="text-gradient"> Beautifully Organized</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your progress, manage courses, and celebrate achievements—all in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="glass border-border/50 shadow-elegant max-w-5xl mx-auto">
            <CardHeader className="border-b border-border/50">
              <CardTitle className="text-2xl">Dashboard Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {dashboardData.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="border-border/50 hover:shadow-card transition-all duration-300 h-full flex flex-col">
                        <CardContent className="p-4 flex flex-col items-center text-center">
                          <Icon className={`h-8 w-8 ${stat.color} mb-2`} />
                          <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Course Progress */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
                {dashboardData.courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-sm font-medium text-foreground">{course.name}</span>
                        <Badge
                          variant={course.status === 'Completed' ? 'default' : 'secondary'}
                          className={course.status === 'Completed' ? 'bg-primary text-primary-foreground' : ''}
                        >
                          {course.status}
                        </Badge>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </motion.div>
                ))}
              </div>

              {/* Certificates Section */}
              <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Recent Certificates</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  You've earned 8 certificates! Download and share them on LinkedIn to showcase your achievements.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}