"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  console.log("CountdownTimer rendered with timeLeft:", timeLeft);

  useEffect(() => {
    const weddingDate = new Date("2026-01-04T17:00:00");
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-maroon-50 to-gold-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div 
          className="text-gray-600 mt-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary-600 mb-4">
            The Countdown Begins!
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            We can't wait to celebrate our special day with you. Here's how much time is left until we say "I do"!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-accent-200">
              <div className="font-playfair text-4xl md:text-6xl font-bold text-primary-600 mb-2">
                {value}
              </div>
              <div className="text-gray-700 text-sm md:text-base uppercase">
                {unit}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
