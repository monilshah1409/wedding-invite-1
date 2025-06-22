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
    <footer className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-8 h-8 text-secondary-400 mr-2" />
            <h3 className="font-playfair text-3xl font-bold text-secondary-400">
              Parth & Nishi
            </h3>
            <Heart className="w-8 h-8 text-secondary-400 ml-2" />
          </div>
          
          <p className="text-lg mb-8 opacity-90">
            #ParthNishiWedding2025
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-secondary-400 mb-4">Contact Bride's Family</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start text-secondary-100">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center justify-center md:justify-start text-secondary-100">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>priya.family@email.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary-400 mb-4">Contact Groom's Family</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start text-secondary-100">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 98765 43211</span>
                </div>
                <div className="flex items-center justify-center md:justify-start text-secondary-100">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>arjun.family@email.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-sm opacity-75">
              Your presence is the greatest gift of all. We can't wait to celebrate with you!
            </p>
          </div>
        </motion.div>
      </div>
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-2">
              {/* <Image src="/logo.svg" alt="Logo" width={30} height={30} /> */}
              <span className="font-playfair text-xl font-bold text-secondary-100">
                Parth & Nishi
              </span>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-secondary-100 hover:text-secondary-600 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-accent-200 pt-6 text-secondary-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Parth & Nishi. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ by Your Name/Company
          </p>
        </div>
      </div>
    </footer>
  );
}
