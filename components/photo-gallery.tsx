"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Heart, Calendar, Users, Camera } from "lucide-react";

// Sample gallery data - in a real app, this would come from an API or CMS
const galleryData = [
  {
    id: 1,
    category: "engagement",
    title: "Engagement Ceremony",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
    description: "The moment we officially announced our engagement to family and friends"
  },
  {
    id: 2,
    category: "pre-wedding",
    title: "Pre-Wedding Shoot",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
    description: "Capturing our love in the golden hour at Marine Drive"
  },
  {
    id: 3,
    category: "couple",
    title: "Date Night",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
    description: "One of our favorite dinner dates in South Mumbai"
  },
  {
    id: 4,
    category: "family",
    title: "Family Gathering",
    date: "Diwali 2024",
    image: "https://images.unsplash.com/photo-1544147534-62d5405b3b6b?w=800&h=600&fit=crop",
    description: "Celebrating Diwali with both families together"
  },
  {
    id: 5,
    category: "engagement",
    title: "Ring Ceremony",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
    description: "The beautiful moment of exchanging rings"
  },
  {
    id: 6,
    category: "pre-wedding",
    title: "Traditional Shoot",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&h=600&fit=crop",
    description: "Dressed in traditional attire for our cultural photoshoot"
  },
  {
    id: 7,
    category: "couple",
    title: "Beach Walk",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
    description: "Romantic evening walk at Juhu Beach"
  },
  {
    id: 8,
    category: "family",
    title: "Mehendi Prep",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1594736797933-d0e501ba2fe8?w=800&h=600&fit=crop",
    description: "Getting ready for the mehendi ceremony with sisters"
  }
];

const categories = [
  { id: "all", label: "All Photos", icon: Camera },
  { id: "engagement", label: "Engagement", icon: Heart },
  { id: "pre-wedding", label: "Pre-Wedding", icon: Calendar },
  { id: "couple", label: "Couple", icon: Users },
  { id: "family", label: "Family", icon: Users },
];

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);

  console.log("PhotoGallery rendered with category:", selectedCategory);

  const filteredImages = selectedCategory === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={selectedCategory === category.id ? "bg-primary-600 hover:bg-primary-700 text-white" : "border-secondary-500 text-primary-700 hover:bg-secondary-50"}
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.label}
            </Button>
        ))}
      </motion.div>

      {/* Photo Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-secondary-200"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="font-semibold text-lg">{image.title}</h3>
                <p className="text-sm opacity-80">{image.description}</p>
              </div>
            </div>
          </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card className="max-w-3xl w-full max-h-[90vh] overflow-hidden relative border-2 border-secondary-300">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:text-secondary-300 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              <CardContent className="p-0">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-4 bg-accent-50 text-primary-900">
                  <h3 className="font-bold text-xl mb-1">{selectedImage.title}</h3>
                  <p className="text-sm text-primary-700 mb-2">{selectedImage.date}</p>
                  <p className="text-primary-800">{selectedImage.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Message */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-secondary-50 to-accent-50 p-8 rounded-2xl border-2 border-secondary-200">
          <Heart className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
          <h3 className="font-playfair text-2xl text-primary-700 mb-4">
            Share Your Memories
          </h3>
          <p className="text-primary-800 mb-6 max-w-2xl mx-auto">
            We'd love to see your photos from our special day! Use our wedding hashtag 
            <span className="font-semibold text-secondary-600"> #PriyaArjunWedding2025 </span>
            to share your favorite moments with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700">
              Upload Photos
            </Button>
            <Button variant="outline" className="border-gold-500 text-gold-600 hover:bg-gold-50">
              View Wedding Album
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}