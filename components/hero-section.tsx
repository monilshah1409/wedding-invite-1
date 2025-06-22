"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  console.log("HeroSection rendered");
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/hero-background.jpg" // Placeholder image path
        alt="Wedding Background"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
        priority
      />
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-paisley animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-paisley animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-paisley animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-paisley animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary-500 rounded-full animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Traditional Blessing */}
          <motion.p 
            className="text-primary-700 font-sanskrit text-lg mb-4 opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            ॐ गणेशाय नमः
          </motion.p>

          {/* Main Invitation */}
          <motion.h1 
            className="font-playfair text-5xl md:text-7xl font-bold text-secondary-700 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Parth <span className="inline mx-2 text-primary-500">weds</span> Nishi
          </motion.h1>

          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.p 
            className="text-xl md:text-2xl text-primary-900 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Together with our families, we joyfully invite you to celebrate our wedding
          </motion.p>

          {/* Wedding Details */}
          <motion.div 
            className="bg-white/80 backdrop-blur rounded-2xl border-2 border-secondary-200 p-8 mb-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-6 h-6 text-primary-700" />
                <div>
                  <p className="text-primary-700 font-semibold">Date</p>
                  <p className="text-primary-900 text-lg">January 4, 2025</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-primary-700" />
                <div>
                  <p className="text-primary-700 font-semibold">Venue</p>
                  <p className="text-primary-900 text-lg">Ratnamani Party Plot, Ahmedabad</p>  
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/rsvp">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                RSVP Now
              </Button>
            </Link>
            
            <Link href="/events">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary-600 text-secondary-700 hover:bg-secondary-50 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                View Events
              </Button>
            </Link>
          </motion.div>

          {/* Quote */}
          <motion.p 
            className="text-primary-800 italic mt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            "Two souls with but a single thought, two hearts that beat as one."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}