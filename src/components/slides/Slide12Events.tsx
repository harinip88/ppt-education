import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";

// Import event images
import parentWebinarImg from '@/assets/webinar.jpeg';
import schoolReadinessImg from '@/assets/School-readiness.jpg';
import careerGuidanceImg from '@/assets/Career-guidance.jpg';
import puppetryShowImg from '@/assets/Puppetry-shows.jpg';
import storytellingImg from '@/assets/Storytelling-events.jpg';
import openHouseImg from '@/assets/Open-houses.jpg';
import btlOutreachImg from '@/assets/BTL.jpg';
import educationFairImg from '@/assets/Education-fairs.jpg';
import collegeFestivalImg from '@/assets/College-festivals.jpg';
import campusLaunchImg from '@/assets/New-campus.jpg';

const events = [
  { label: "Webinars for parents", imageSrc: parentWebinarImg },
  { label: "School readiness sessions", imageSrc: schoolReadinessImg },
  { label: "Career guidance webinars", imageSrc: careerGuidanceImg },
  { label: "Puppetry shows", imageSrc: puppetryShowImg },
  { label: "Storytelling events", imageSrc: storytellingImg },
  { label: "Open houses", imageSrc: openHouseImg },
  { label: "BTL outreach in premium apartments", imageSrc: btlOutreachImg },
  { label: "Education fairs", imageSrc: educationFairImg },
  { label: "College festivals", imageSrc: collegeFestivalImg },
  { label: "New campus launch events", imageSrc: campusLaunchImg },
];

export const Slide12Events = () => {
  return (
    <SlideLayout variant="muted">
      <SlideHeader
        title={<>Events, Webinars & <span className="text-gradient-hero">Parent Engagement</span></>}
        subtitle="We plan and execute:"
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-6 md:mb-10">
        {events.map((event, index) => (
          <motion.div
            key={event.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.06 }}
            className="flex flex-col items-center text-center p-2 md:p-4 rounded-lg md:rounded-xl bg-card shadow-soft"
          >
            <img 
              src={event.imageSrc} 
              alt={event.label} 
              className="w-full h-16 md:h-24 object-cover rounded-lg mb-2 md:mb-3"
            />
            <span className="font-medium text-foreground text-[10px] md:text-xs">{event.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-gradient-warm p-4 md:p-6 rounded-2xl text-secondary-foreground text-center"
      >
        <p className="text-sm md:text-lg font-semibold">
          Every event becomes a lead-generation and relationship-building opportunity.
        </p>
      </motion.div>
    </SlideLayout>
  );
};
