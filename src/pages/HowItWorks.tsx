import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Camera, Gift, MapPin, Award, CreditCard, Truck } from "lucide-react";

import Navbar from "@/views/Navbar";
import Footer from "@/views/Footer";
import goldMedal from '@/assets/gold-medal.png';
import silverMedal from '@/assets/silver-medal.png';
import bronzeMedal from '@/assets/bronze-medal.png';
import { useNavigate } from "react-router-dom";
const HowItWorks = () => {
   const navigate = useNavigate();

  const navigateToAnimals = () => {
    navigate("/");
    setTimeout(() => {
      const animalsSection = document.getElementById("animals-section");
      animalsSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const steps = [
    {
      icon: Heart,
      title: "Choose Your Friend",
      description: "Select which animal you'd like to help - dogs, cats, cows, or any other friend in need.",
      color: "text-nature-primary",
    },
    {
      icon: ShoppingCart,
       title: "Pick Their Meal",
      description: "Browse food options perfect for your chosen animal and select the quantity you'd like to donate.",
      color: "text-nature-secondary",
    },
    {
     
     icon: CreditCard,
      title: "💳 Make Your Donation",
      description: "Secure payment through UPI, PayPal, or Razorpay. Choose to donate anonymously or with your name.",
      color: "text-accent",
    },
    {
       icon: Truck,
      title: "We Deliver",
      description: "Our trusted partners purchase and deliver the food directly to animals in shelters and streets.",
      color: "text-primary",
    },
    {
      icon: MapPin,
      title: "📍 Location Tracking",
      description: "See exactly where your food was delivered on a map with real-time tracking updates.",
      color: "text-nature-primary",
    },
    {
      icon: Camera,
      title: "See the Impact",
      description: "Receive photos and videos showing your food being delivered and animals being fed.",
      color: "text-nature-secondary",
    },
    {
      icon: Award,
      title: "🏆 Impact Badges",
      description: "Get personalized impact reports and certificates with impact badges for your contributions.",
      color: "text-accent",
      medals: [goldMedal, silverMedal, bronzeMedal]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            How It <span className="text-nature-primary">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Just few steps between your kindness and a full belly, with complete
            transparency and impact tracking.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-full bg-muted ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                     {step.medals && (
                      <div className="flex justify-center gap-10 mt-4">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of compassionate people who are already feeding
            animals in need.
          </p>
              <Button variant="hero" size="lg" className="animate-scale-in" onClick={navigateToAnimals}>
            Start Feeding Animals
            <Heart className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorks;
