"use client"

import { Navigation } from "@/components/navigation";
import { EventsTimeline } from "@/components/events-timeline";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function EventsPage() {
  console.log("Events page rendered");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-accent-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary-600 mb-4">
              Wedding Events
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Three days of celebration, tradition, and joy as we embark on our journey together
            </p>
          </motion.div>

          <EventsTimeline />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}