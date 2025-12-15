import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Check } from "lucide-react";

const deliverables = [
  "Build a strong, modern digital brand",
  "Increase admissions inquiries consistently",
  "Engage and convert parents/students",
  "Improve counsellor performance",
  "Automate follow-ups & reminders",
  "Showcase campus life beautifully",
  "Execute events & webinars that drive interest",
  "Strengthen community and reputation",
];

export const Slide04Deliver = () => {
  return (
    <SlideLayout variant="muted">
      <SlideHeader
        title={<>What We <span className="text-gradient-hero">Deliver</span></>}
        centered
      />

      {/* Moved out of SlideHeader to guarantee centering */}
      <div className="text-center -mt-4 mb-6 md:mb-10">
        <p className="text-sm md:text-xl text-muted-foreground">
          We help educational institutions:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-4xl mx-auto mb-6 md:mb-10">
        {deliverables.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.08 }}
            className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card shadow-soft"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-primary-foreground md:w-4 md:h-4" />
            </div>
            <span className="font-medium text-foreground text-sm md:text-base">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center"
      >
        <p className="text-base md:text-2xl font-semibold text-foreground">
          We don't just run ads —
        </p>
        <p className="text-lg md:text-3xl font-bold text-gradient-hero mt-2">
          We build predictable admissions systems.
        </p>
      </motion.div>
    </SlideLayout>
  );
};
