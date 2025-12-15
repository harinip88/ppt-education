import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Check } from "lucide-react";
import websitePreview from "@/assets/fantoz-website.png";

const features = [
  "Program-specific landing pages",
  "Full website design",
  "Microsites for events (Open Houses, Convocations, Webinars)",
  "Mobile-first, parent-friendly UX",
  "High-conversion messaging",
  "Chatbot & AI inquiry systems",
  "Virtual campus tours",
  "Drone campus walkthroughs",
];

export const Slide06Website = () => {
  return (
    <SlideLayout variant="muted">
      <SlideHeader
        title={<>Website, Landing Pages & <span className="text-gradient-hero">Microsites</span></>}
        subtitle="Your website is your first counsellor. We make it work like one."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative order-2 lg:order-1 flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-[90%]">
            <img
              src={websitePreview}
              alt="Website preview example"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="order-1 lg:order-2 space-y-2 md:space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.06 }}
              className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-card shadow-soft"
            >
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-primary-foreground md:w-3.5 md:h-3.5" />
              </div>
              <span className="text-foreground text-xs md:text-sm font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 md:mt-6 p-3 md:p-5 bg-gradient-hero rounded-2xl text-primary-foreground text-center"
      >
        <p className="text-xs md:text-base font-semibold">
          Result: Higher conversions, more inquiries, stronger brand credibility.
        </p>
      </motion.div>
    </SlideLayout>
  );
};
