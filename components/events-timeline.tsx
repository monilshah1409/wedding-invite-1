"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar, Clock, MapPin, Users, Sparkles, Heart, Flower } from "lucide-react";

const events = [
  {
    day: "Day 1",
    date: "March 13, 2025",
    title: "Haldi Ceremony",
    time: "4:00 PM - 7:00 PM",
    location: "Priya's Family Home",
    address: "123 Garden Street, Bandra West",
    icon: Sparkles,
    color: "from-secondary-400 to-secondary-500",
    description: "The auspicious turmeric ceremony to bless the couple with prosperity and good health.",
    activities: [
      "Traditional haldi paste application",
      "Family blessings and songs",
      "Photography session",
      "Light refreshments"
    ],
    dressCode: "Yellow/Orange traditional attire",
    note: "This is an intimate ceremony with close family and friends only."
  },
  {
    day: "Day 2",
    date: "March 14, 2025",
    title: "Mehendi Ceremony",
    time: "10:00 AM - 6:00 PM",
    location: "Royal Gardens Banquet Hall",
    address: "456 Royal Avenue, Juhu",
    icon: Flower,
    color: "from-primary-400 to-primary-500",
    description: "Beautiful henna designs and musical celebrations with ladies' sangeet.",
    activities: [
      "Professional mehendi artists",
      "Ladies' sangeet performances",
      "Traditional music and dancing",
      "Lunch and evening snacks"
    ],
    dressCode: "Green/Pink traditional outfits",
    note: "Men are welcome to join for lunch and evening celebrations."
  },
  {
    day: "Day 3",
    date: "March 15, 2025",
    title: "Wedding Ceremony & Reception",
    time: "10:00 AM - 11:00 PM",
    location: "Royal Gardens Main Hall",
    address: "456 Royal Avenue, Juhu",
    icon: Heart,
    color: "from-accent-400 to-accent-500",
    description: "Sacred Hindu wedding ceremony followed by grand reception celebration.",
    activities: [
      "Baraat arrival (10:00 AM)",
      "Wedding ceremony (11:00 AM - 1:00 PM)",
      "Lunch (1:00 PM - 3:00 PM)",
      "Photo sessions (3:00 PM - 6:00 PM)",
      "Reception dinner (7:00 PM - 11:00 PM)"
    ],
    dressCode: "Traditional Indian formal wear",
    note: "Grand celebration with dinner, dancing, and live entertainment."
  }
];

export function EventsTimeline() {
  console.log("EventsTimeline rendered with events:", events.length);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {events.map((event) => {
        const Icon = event.icon;
        return (
          <motion.div
            key={event.title}
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className={`border-2 border-secondary-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br ${event.color} bg-opacity-20`}>
              <CardHeader className="bg-gradient-to-r from-accent-50 to-primary-50">
                <div className="flex items-center justify-between">
                  <div className="text-primary-700">
                    <div className="text-sm font-medium text-primary-500 mb-1">
                      {event.day} - {event.date}
                    </div>
                    <CardTitle className="font-playfair text-2xl text-primary-700 flex items-center">
                      <Icon className="w-6 h-6 mr-2 text-secondary-700" />
                      {event.title}
                    </CardTitle>
                  </div>
                  <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${event.color}`}></div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center text-primary-700">
                  <Clock className="w-4 h-4 mr-2 text-secondary-700" />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-start text-primary-700">
                  <MapPin className="w-4 h-4 mr-2 text-secondary-700 mt-0.5" />
                  <div>
                    <div className="font-medium">{event.location}</div>
                    <div className="text-sm">{event.address}</div>
                  </div>
                </div>

                <p className="text-primary-900 leading-relaxed">{event.description}</p>

                <div>
                  <h4 className="font-semibold text-secondary-700 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Schedule of Events
                  </h4>
                  <ul className="space-y-1 text-sm text-primary-700 list-disc list-inside">
                    {event.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-lg border border-secondary-200">
                  <h4 className="font-semibold text-secondary-700 mb-1">Dress Code</h4>
                  <p className="text-sm text-primary-700">{event.dressCode}</p>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-lg border border-secondary-200">
                  <p className="text-sm text-primary-900 italic">
                    <strong>Note:</strong> {event.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}