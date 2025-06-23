"use client";

import { motion } from "framer-motion";
import { Navigation } from "../components/navigation";
import { HeroSection } from "../components/hero-section";
import { CountdownTimer } from "../components/countdown-timer";
import { EventsPreview } from "../components/events-preview";
import { Footer } from "../components/footer";

export default function Home() {
  console.log("Homepage rendered");
  
  return (
      <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-accent-50">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        <CountdownTimer />
        <EventsPreview />
      </main>
      
      <Footer />
    </div>
  );
}
