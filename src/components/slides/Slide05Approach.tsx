import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Palette, Globe, Target, TrendingUp, Settings, Camera, CalendarDays, MessageSquare } from "lucide-react";

const ecosystem = [
  { icon: Palette, label: "Branding & Creative", color: "bg-secondary/10 text-secondary" },
  { icon: Globe, label: "Website & Landing Pages", color: "bg-primary/10 text-primary" },
  { icon: Target, label: "Lead Generation", color: "bg-secondary/10 text-secondary" },
  { icon: TrendingUp, label: "Performance Ads", color: "bg-primary/10 text-primary" },
  { icon: Settings, label: "CRM & Automation", color: "bg-secondary/10 text-secondary" },
  { icon: MessageSquare, label: "Call Center Integration", color: "bg-primary/10 text-primary" },
  { icon: Camera, label: "Photography & Video Production", color: "bg-secondary/10 text-secondary" },
  { icon: CalendarDays, label: "Events & Parent Engagement", color: "bg-primary/10 text-primary" },
];

export const Slide05Approach = () => {
  return (
    <SlideLayout>
      <SlideHeader
        title={<>Our Approach: <span className="text-gradient-hero">Integrated Growth</span> for Education</>}
        centered
      />

      {/* Moved out of SlideHeader to guarantee centering */}
      <div className="text-center -mt-4 mb-6 md:mb-10">
        <p className="text-sm md:text-xl text-muted-foreground">
          Your institution gets a complete ecosystem:
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-10">
        {ecosystem.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.08 }}
            className="flex flex-col items-center text-center p-3 md:p-5 rounded-xl md:rounded-2xl bg-card shadow-soft"
          >
            <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl ${item.color} flex items-center justify-center mb-2 md:mb-3`}>
              <item.icon size={20} className="md:w-7 md:h-7" />
            </div>
            <span className="font-medium text-foreground text-xs md:text-sm">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-center bg-muted p-4 md:p-6 rounded-2xl"
      >
        <p className="text-sm md:text-xl font-semibold text-foreground">
          Everything works together — <span className="text-gradient-hero">seamlessly</span> — to drive admissions.
        </p>
      </motion.div>
    </SlideLayout>
  );
};
