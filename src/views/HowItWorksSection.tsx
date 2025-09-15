import React from 'react';
import goldMedal from '@/assets/gold-medal.png';
import silverMedal from '@/assets/silver-medal.png';
import bronzeMedal from '@/assets/bronze-medal.png';
import { Card, CardContent } from '@/components/ui/card';

import { Heart, ShoppingCart, Truck, Camera, MapPin, Award, CreditCard } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Heart,
      title: "Choose Your Friend",
      description: "Select which animal you'd like to help - dogs, cats, cows, or any other friend in need."
    },
    {
      icon: ShoppingCart,
      title: "Pick Their Meal",
      description: "Browse food options perfect for your chosen animal and select the quantity you'd like to donate."
    },
       {
      icon: CreditCard,
      title: "💳 Make Your Donation",
      description: "Secure payment through UPI, PayPal, or Razorpay. Choose to donate anonymously or with your name."
    },
    {
      icon: Truck,
      title: "We Deliver",
      description: "Our trusted partners purchase and deliver the food directly to animals in shelters and streets."
    },
      {
      icon: MapPin,
      title: "📍 Location Tracking",
      description: "See exactly where your food was delivered on a map with real-time tracking updates."
    },
    
    {
      icon: Camera,
      title: "See the Impact",
      description: "Receive photos and videos showing your food being delivered and animals being fed."
    },
      {
      icon: Award,
       title: "🏆 Impact Badges",
      description: "Get personalized impact reports and certificates with impact badges  for your contributions.",
      medals: [goldMedal, silverMedal, bronzeMedal]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-earth mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Making a difference is simple. Just few steps between your kindness and a full belly.
          </p>
        </div>
        
               <div className="grid grid-cols-1 md:-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Step Number and Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-warm flex items-center justify-center shadow-warm">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-nature-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <Card className="border-0 shadow-card bg-gradient-subtle">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-nature-earth mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                      {step.medals && (
                      <div className="flex justify-center gap-2 mt-4">
                        {step.medals.map((medal, medalIndex) => (
                          <img
                            key={medalIndex}
                            src={medal}
                            alt={`Medal ${medalIndex + 1}`}
                            className="w-8 h-8 object-contain"
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-nature-primary to-nature-accent transform translate-x-4 z-0"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;