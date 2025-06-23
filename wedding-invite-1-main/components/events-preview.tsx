"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const events = [
  {
    name: "Haldi Ceremony",
    date: "March 13, 2025",
    time: "4:00 PM",
    location: "Priya's Family Home",
    description: "Traditional turmeric ceremony with family and close friends",
    color: "from-yellow-400 to-orange-500",
    image: "/haldi.jpg", // Add image path
  },
  {
    name: "Mehendi Ceremony",
    date: "March 14, 2025", 
    time: "10:00 AM",
    location: "Royal Gardens Banquet Hall",
    description: "Intricate henna designs and musical celebrations",
    color: "from-green-400 to-emerald-500",
    image: "/mehendi.jpg", // Add image path
  },
  {
    name: "Wedding Ceremony",
    date: "March 15, 2025",
    time: "10:00 AM",
    location: "Royal Gardens Main Hall",
    description: "Sacred Hindu wedding ceremony followed by reception",
    color: "from-rose-400 to-pink-500",
    image: "/wedding.jpg", // Add image path
  },
];

export function EventsPreview() {
  console.log("EventsPreview rendered with events:", events.length);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary-600 mb-4">
            Wedding Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us for three days of celebration, tradition, and joy as we begin our journey together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-2 border-accent-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${event.color} mb-4`} />
                  <CardTitle className="font-playfair text-xl text-secondary-600">
                    {event.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-primary-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/events">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              View Full Schedule
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}