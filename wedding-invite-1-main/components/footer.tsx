"use client";

import { motion } from "framer-motion";
import { Heart, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "RSVP", href: "/rsvp" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
];

export function Footer() {
  console.log("Footer rendered");
  
  return (
    <footer className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center mb-4">
            <Heart className="w-7 h-7 text-secondary-400 mr-2" />
            <h3 className="font-playfair text-2xl font-bold text-secondary-400">
              Parth & Nishi
            </h3>
            <Heart className="w-7 h-7 text-secondary-400 ml-2" />
          </div>
          
          <p className="text-md mb-6 opacity-90">
            #ParthNishiWedding2025
          </p>

          <nav className="flex flex-wrap justify-center space-x-6 mb-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-secondary-100 hover:text-secondary-600 transition-colors text-sm">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/20 pt-6 text-secondary-100 text-sm">
            <p className="mb-2">
              Your presence is the greatest gift of all. We can't wait to celebrate with you!
            </p>
            <p>&copy; {new Date().getFullYear()} Parth & Nishi. All rights reserved.</p>
            {/* <p className="mt-1">
              Made with ❤️ by Your Name/Company
            </p> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
