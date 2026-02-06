import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for exploring',
    features: [
      'Access to 5 free courses',
      'Basic community access',
      'Course completion certificates',
      'Limited mentor Q&A',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '29',
    description: 'Most popular for learners',
    features: [
      'Unlimited course access',
      'Full community access',
      'All certificates',
      'Weekly mentor sessions',
      'Career guidance',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '99',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team management dashboard',
      'Custom learning paths',
      'Dedicated account manager',
      'Advanced analytics',
      'On-demand training',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function PricingSection() {
  const handlePlanClick = (planName) => {
    toast.success(`${planName} plan selected! This is a demo.`);
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your
            <span className="text-gradient"> Learning Path</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Start for free, upgrade when you're ready. All plans include our core learning features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={plan.popular ? 'md:-mt-4 md:mb-4' : ''}
            >
              <Card
                className={`relative h-full flex flex-col ${
                  plan.popular
                    ? 'border-primary shadow-elegant scale-105'
                    : 'border-border/50 hover:border-primary/50'
                } transition-all duration-300 glass`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary border-0 text-primary-foreground px-4 py-1">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-sm mb-4">{plan.description}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handlePlanClick(plan.name)}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-primary hover:shadow-glow border-0'
                        : 'variant-outline hover:bg-primary hover:text-primary-foreground'
                    } transition-all duration-300`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}