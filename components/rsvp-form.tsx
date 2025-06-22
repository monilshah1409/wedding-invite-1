"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { useToast } from "../hooks/use-toast";
import { Heart, Users, Utensils, Home, Car } from "lucide-react";

const rsvpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  attendance: z.enum(["yes", "no"], {
    required_error: "Please select your attendance",
  }),
  guestCount: z.number().min(1).max(10),
  plusOneName: z.string().optional(),
  foodPreferences: z.string().optional(),
  accommodation: z.string().optional(),
  travelPlans: z.string().optional(),
  dietaryPreferences: z.array(z.string()).optional(),
  mealPreference: z.enum(["vegetarian", "non-vegetarian", "jain", "vegan"]).optional(),
  events: z.array(z.string()).optional(),
  specialRequests: z.string().optional(),
  relationship: z.string().optional(),
  messageToCouple: z.string().optional(),
  songRequest: z.string().optional(),
  dietaryRestrictionsDetails: z.string().optional(),
  transportationNeeded: z.enum(["yes", "no", "maybe"]).optional(),
  stayingAtHotel: z.boolean().optional(),
  arrivalDate: z.string().optional(),
  transportationMode: z.string().optional(),
  dontKnowArrivalDetails: z.boolean().optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  console.log("RSVPForm rendered");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      guestCount: 1,
      dietaryPreferences: [],
      events: [],
    },
  });

  const attendance = watch("attendance");
  const guestCount = watch("guestCount");
  const accommodation = watch("accommodation");
  const watchEvents = watch("events") || [];

  const onSubmit = async (data: RSVPFormData) => {
    console.log("RSVP form submitted with data:", data);
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "RSVP Submitted Successfully!",
        description: "Thank you for your response. We can't wait to celebrate with you!",
      });
      
      reset();
    } catch (error) {
      console.error("RSVP submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your RSVP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const events = [
    { id: "haldi", label: "Haldi Ceremony (March 13)" },
    { id: "mehendi", label: "Mehendi Ceremony (March 14)" },
    { id: "wedding", label: "Wedding Ceremony (March 15)" },
    { id: "reception", label: "Reception (March 15)" },
  ];

  const dietaryOptions = [
    { id: "no-onion-garlic", label: "No Onion/Garlic" },
    { id: "gluten-free", label: "Gluten Free" },
    { id: "diabetic", label: "Diabetic Friendly" },
    { id: "nut-allergy", label: "Nut Allergy" },
  ];

  return (
    <section className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-secondary-200 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary-700 mb-4">
          RSVP for the Wedding
        </h2>
        <p className="text-primary-700 text-lg max-w-2xl mx-auto mb-8">
          Please fill out the form below to let us know if you can make it to our special day.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-accent-200 max-w-3xl mx-auto"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name and Email */} <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor="name">Full Name</Label> <Input id="name" {...register("name")} /> {errors.name && ( <p className="text-red-500 text-sm">{errors.name.message}</p> )} </div> <div className="space-y-2"> <Label htmlFor="email">Email</Label> <Input id="email" type="email" {...register("email")} /> {errors.email && ( <p className="text-red-500 text-sm">{errors.email.message}</p> )} </div> </div> {/* Phone */} <div className="space-y-2"> <Label htmlFor="phone">Phone Number</Label> <Input id="phone" type="tel" {...register("phone")} /> {errors.phone && ( <p className="text-red-500 text-sm">{errors.phone.message}</p> )} </div> {/* Attendance */} <div className="space-y-2"> <Label>Will you be attending?</Label> <RadioGroup onValueChange={(value) => setValue("attendance", value as "yes" | "no")} value={attendance}> <div className="flex items-center space-x-4"> <div className="flex items-center"> <RadioGroupItem value="yes" id="attendance-yes" /> <Label htmlFor="attendance-yes" className="ml-2">Yes, with pleasure!</Label> </div> <div className="flex items-center"> <RadioGroupItem value="no" id="attendance-no" /> <Label htmlFor="attendance-no" className="ml-2">Regrettably, no.</Label> </div> </div> </RadioGroup> {errors.attendance && ( <p className="text-red-500 text-sm">{errors.attendance.message}</p> )} </div> {/* Guest Count and Plus One */} {attendance === "yes" && ( <> <div className="space-y-2"> <Label htmlFor="guestCount">Number of Guests (including yourself)</Label> <Input id="guestCount" type="number" {...register("guestCount", { valueAsNumber: true })} /> {errors.guestCount && ( <p className="text-red-500 text-sm">{errors.guestCount.message}</p> )} </div> {guestCount > 1 && ( <div className="space-y-2"> <Label htmlFor="plusOneName">Name(s) of Additional Guest(s)</Label> <Input id="plusOneName" {...register("plusOneName")} /> {errors.plusOneName && ( <p className="text-red-500 text-sm">{errors.plusOneName.message}</p> )} </div> )} </> )} {/* Events */} {attendance === "yes" && ( <div className="space-y-2"> <Label>Which events will you attend?</Label> <div className="grid grid-cols-1 md:grid-cols-2 gap-2"> {events.map((event) => ( <div key={event.id} className="flex items-center"> <Checkbox id={event.id} checked={watchEvents.includes(event.id)} onCheckedChange={(checked) => { const currentEvents = watchEvents; if (checked) { setValue("events", [...currentEvents, event.id]); } else { setValue("events", currentEvents.filter((e) => e !== event.id)); } }} /> <Label htmlFor={event.id} className="ml-2">{event.label}</Label> </div> ))} </div> {errors.events && ( <p className="text-red-500 text-sm">{errors.events.message}</p> )} </div> )} {/* Meal Preference */} {attendance === "yes" && ( <div className="space-y-2"> <Label htmlFor="mealPreference">Meal Preference</Label> <Select onValueChange={(value) => setValue("mealPreference", value as "vegetarian" | "non-vegetarian" | "jain" | "vegan")}> <SelectTrigger className="w-full"> <SelectValue placeholder="Select a meal preference" /> </SelectTrigger> <SelectContent> <SelectItem value="vegetarian">Vegetarian</SelectItem> <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem> <SelectItem value="jain">Jain</SelectItem> <SelectItem value="vegan">Vegan</SelectItem> </SelectContent> </Select> {errors.mealPreference && ( <p className="text-red-500 text-sm">{errors.mealPreference.message}</p> )} </div> )} {/* Dietary Restrictions */} {attendance === "yes" && ( <div className="space-y-2"> <Label>Dietary Restrictions (select all that apply)</Label> <div className="grid grid-cols-1 md:grid-cols-2 gap-2"> {dietaryOptions.map((option) => ( <div key={option.id} className="flex items-center"> <Checkbox id={option.id} checked={watch("dietaryPreferences")?.includes(option.id)} onCheckedChange={(checked) => { const currentDietary = watch("dietaryPreferences") || []; if (checked) { setValue("dietaryPreferences", [...currentDietary, option.id]); } else { setValue("dietaryPreferences", currentDietary.filter((d) => d !== option.id)); } }} /> <Label htmlFor={option.id} className="ml-2">{option.label}</Label> </div> ))} </div> <Textarea placeholder="Please specify other dietary restrictions or allergies" {...register("dietaryRestrictionsDetails")} /> {errors.dietaryRestrictionsDetails && ( <p className="text-red-500 text-sm">{errors.dietaryRestrictionsDetails.message}</p> )} </div> )} {/* Accommodation and Travel */} {attendance === "yes" && ( <> <div className="space-y-2"> <Label htmlFor="accommodation">Accommodation Needs</Label> <Textarea id="accommodation" placeholder="Do you require assistance with accommodation? Please specify." {...register("accommodation")} /> {errors.accommodation && ( <p className="text-red-500 text-sm">{errors.accommodation.message}</p> )} </div> <div className="space-y-2"> <Label htmlFor="travelPlans">Travel Plans</Label> <Textarea id="travelPlans" placeholder="Please share your travel plans (e.g., arrival/departure dates, flight details) if you'd like us to assist." {...register("travelPlans")} /> {errors.travelPlans && ( <p className="text-red-500 text-sm">{errors.travelPlans.message}</p> )} </div> </> )} {/* Transportation Needed */} {attendance === "yes" && ( <div className="space-y-2"> <Label>Do you need transportation assistance?</Label> <RadioGroup onValueChange={(value) => setValue("transportationNeeded", value as "yes" | "no" | "maybe")} value={watch("transportationNeeded")}> <div className="flex items-center space-x-4"> <div className="flex items-center"> <RadioGroupItem value="yes" id="transportation-yes" /> <Label htmlFor="transportation-yes" className="ml-2">Yes</Label> </div> <div className="flex items-center"> <RadioGroupItem value="no" id="transportation-no" /> <Label htmlFor="transportation-no" className="ml-2">No</Label> </div> <div className="flex items-center"> <RadioGroupItem value="maybe" id="transportation-maybe" /> <Label htmlFor="transportation-maybe" className="ml-2">Maybe</Label> </div> </div> </RadioGroup> {errors.transportationNeeded && ( <p className="text-red-500 text-sm">{errors.transportationNeeded.message}</p> )} </div> )} {/* Staying at Hotel */} {attendance === "yes" && ( <div className="flex items-center space-x-2"> <Checkbox id="stayingAtHotel" checked={watch("stayingAtHotel")} onCheckedChange={(checked) => setValue("stayingAtHotel", checked as boolean)} /> <Label htmlFor="stayingAtHotel">I will be staying at the recommended hotel.</Label> {errors.stayingAtHotel && ( <p className="text-red-500 text-sm">{errors.stayingAtHotel.message}</p> )} </div> )} {/* Relationship and Message to Couple */} <div className="space-y-2"> <Label htmlFor="relationship">Your Relationship to the Couple</Label> <Input id="relationship" placeholder="e.g., Family, Friend, Colleague" {...register("relationship")} /> {errors.relationship && ( <p className="text-red-500 text-sm">{errors.relationship.message}</p> )} </div> <div className="space-y-2"> <Label htmlFor="messageToCouple">Message to the Couple</Label> <Textarea id="messageToCouple" placeholder="Share your well wishes or a special memory!" {...register("messageToCouple")} /> {errors.messageToCouple && ( <p className="text-red-500 text-sm">{errors.messageToCouple.message}</p> )} </div> {/* Song Request */} <div className="space-y-2"> <Label htmlFor="songRequest">Song Request</Label> <Input id="songRequest" placeholder="What song will get you on the dance floor?" {...register("songRequest")} /> {errors.songRequest && ( <p className="text-red-500 text-sm">{errors.songRequest.message}</p> )} </div>
          {/* Arrival Date and Transportation Mode */}
          {attendance === "yes" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="arrivalDate">Planned Arrival Date</Label>
                <Input id="arrivalDate" type="date" {...register("arrivalDate")} disabled={watch("dontKnowArrivalDetails")}/>
                {errors.arrivalDate && (
                  <p className="text-red-500 text-sm">{errors.arrivalDate.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="transportationMode">Mode of Transportation</Label>
                <Input id="transportationMode" placeholder="e.g., Flight, Train, Car" {...register("transportationMode")} disabled={watch("dontKnowArrivalDetails")}/>
                {errors.transportationMode && (
                  <p className="text-red-500 text-sm">{errors.transportationMode.message}</p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="dontKnowArrivalDetails" checked={watch("dontKnowArrivalDetails")} onCheckedChange={(checked) => setValue("dontKnowArrivalDetails", checked as boolean)} />
                <Label htmlFor="dontKnowArrivalDetails">I don't know yet (too early to tell)</Label>
                {errors.dontKnowArrivalDetails && (
                  <p className="text-red-500 text-sm">{errors.dontKnowArrivalDetails.message}</p>
                )}
              </div>
            </div>
          )}

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit RSVP"}
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
