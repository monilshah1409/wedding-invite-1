"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Car, Plane, Train } from "lucide-react";

const venues = [
  {
    name: "Haldi Ceremony",
    location: "Priya's Family Home",
    address: "123 Garden Street, Bandra West, Mumbai - 400050",
    date: "March 13, 2025",
    time: "4:00 PM onwards",
    mapUrl: "https://maps.google.com/?q=19.0596,72.8295",
    phone: "+91 98765 43210",
    description: "Intimate ceremony at the family residence with close relatives and friends.",
  },
  {
    name: "Mehendi & Wedding Ceremony",
    location: "Royal Gardens Banquet Hall",
    address: "456 Royal Avenue, Juhu, Mumbai - 400049",
    date: "March 14-15, 2025",
    time: "Mehendi: 10:00 AM | Wedding: 10:00 AM",
    mapUrl: "https://maps.google.com/?q=19.1075,72.8263",
    phone: "+91 98765 43211",
    description: "Elegant banquet hall with beautiful gardens, perfect for traditional celebrations.",
  },
];

const transportInfo = [
  {
    icon: Car,
    title: "By Car",
    details: "Ample parking available. Valet service provided during main events.",
  },
  {
    icon: Plane,
    title: "By Air",
    details: "30 minutes from Chhatrapati Shivaji Airport. Airport pickup can be arranged.",
  },
  {
    icon: Train,
    title: "By Train",
    details: "Nearest stations: Bandra (West) - 10 mins, Juhu - 5 mins from venues.",
  },
];

export function LocationDetails() {
  console.log("LocationDetails rendered with venues:", venues.length);

  return (
    <div className="space-y-12">
      {/* Venue Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {venues.map((venue, index) => (
          <motion.div
            key={venue.name}
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-secondary-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-secondary-50 to-primary-50">
                <CardTitle className="font-playfair text-xl text-primary-700 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-secondary-700" />
                  {venue.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-secondary-600 mb-2">
                    {venue.location}
                  </h3>
                  <p className="text-primary-800 text-sm leading-relaxed">
                    {venue.address}
                  </p>
                </div>

                <div className="flex items-center text-primary-600">
                  <Clock className="w-4 h-4 mr-2 text-secondary-600" />
                  <div>
                    <p className="font-medium">{venue.date}</p>
                    <p className="text-sm">{venue.time}</p>
                  </div>
                </div>

                <div className="flex items-center text-primary-600">
                  <Phone className="w-4 h-4 mr-2 text-secondary-600" />
                  <span>{venue.phone}</span>
                </div>

                <p className="text-primary-600 text-sm leading-relaxed">
                  {venue.description}
                </p>

                <div className="flex gap-3 pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-secondary-600 text-white bg-[#800000] hover:bg-[#600000]"
                  >
                    <a 
                      href={venue.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View on Map
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-secondary-600 text-secondary-700 hover:bg-secondary-100"
                  >
                    <a href={`tel:${venue.phone}`}>
                      Call Venue
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-accent-200 shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-accent-50 to-primary-50">
            <CardTitle className="font-playfair text-2xl text-primary-600">
              Interactive Map
            </CardTitle>
            <p className="text-gray-600">Click on the markers to get directions</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-96 w-full rounded-b-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8537842243847!2d72.82635831744385!3d19.075084499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f19b2b8b8b%3A0x1234567890abcdef!2sJuhu%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venues Map"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Transportation Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-accent-200 shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-accent-50 to-primary-50">
            <CardTitle className="font-playfair text-2xl text-primary-600">
              How to Reach
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {transportInfo.map((transport, index) => (
                <motion.div
                  key={transport.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-700 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <transport.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary-600 mb-2">
                    {transport.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {transport.details}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-accent-50 to-secondary-50 rounded-xl border border-secondary-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-primary-600 mb-3 text-center">
                Accommodation Suggestions
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-secondary-600 mb-2">Nearby Hotels:</h4>
                  <ul className="space-y-1">
                    <li>• The Taj Mahal Palace (5 km)</li>
                    <li>• ITC Grand Central (3 km)</li>
                    <li>• Hotel Sea Green (2 km)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-600 mb-2">Guest Houses:</h4>
                  <ul className="space-y-1">
                    <li>• We can arrange homestays</li>
                    <li>• Family guest rooms available</li>
                    <li>• Contact us for assistance</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}