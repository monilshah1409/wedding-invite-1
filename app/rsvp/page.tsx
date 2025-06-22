"use client"

import { Navigation } from "@/components/navigation";
import { RSVPForm } from "@/components/rsvp-form";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function RSVPPage() {
  console.log("RSVP page rendered");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-accent-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary-600 mb-4">
              RSVP
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-6" />
            <p className="text-primary-700 text-lg max-w-2xl mx-auto">
              We're excited to celebrate with you! Please let us know if you'll be joining us for our special day.
            </p>
          </motion.div>

          <RSVPForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}