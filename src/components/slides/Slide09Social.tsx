import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Heart, Shield, Star, GraduationCap, Users, CheckCircle2 } from "lucide-react";

const factors = [
  { icon: Heart, label: "Reputation" },
  { icon: Shield, label: "Transparency" },
  { icon: Star, label: "Values" },
  { icon: Users, label: "Student experiences" },
  { icon: GraduationCap, label: "Teaching quality" },
];

const content = [
  "Daily/weekly content",
  "Reel packs",
  "Infrastructure showcases",
  "Festival & event coverages",
  "Student achievements",
  "Teacher introductions",
  "Placement stories",
  "Alumni highlights",
];

export const Slide09Social = () => {
  return (
    <SlideLayout>
      <SlideHeader
        title={<>Social Media That <span className="text-gradient-warm">Builds Trust</span></>}
        subtitle="Bridging the gap between institution and parent."
      />

      <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start mb-4 md:mb-8">
        
        {/* LEFT COLUMN: The "Demand" (What parents want) */}
        <div className="bg-muted/30 p-4 md:p-6 rounded-xl md:rounded-2xl border border-muted">
          <h3 className="text-sm md:text-lg font-semibold text-foreground mb-3 md:mb-6 flex items-center gap-2">
            <Users size={16} className="text-muted-foreground md:w-5 md:h-5" />
            Parents look for:
          </h3>
          
          <div className="flex flex-col gap-2 md:gap-4">
            {factors.map((factor, index) => (
              <motion.div
                key={factor.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <factor.icon size={12} className="text-secondary md:w-4 md:h-4" />
                </div>
                <span className="font-medium text-foreground text-sm md:text-base">{factor.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: The "Supply" (What we deliver) */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-3 md:mb-6"
          >
            <h3 className="text-sm md:text-lg font-bold text-gradient-hero mb-1 md:mb-2">
              So we create:
            </h3>
            <div className="h-0.5 md:h-1 w-16 md:w-20 bg-gradient-hero rounded-full opacity-50" />
          </motion.div>

          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {content.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-card shadow-sm border border-border/50"
              >
                <CheckCircle2 size={12} className="text-primary flex-shrink-0 md:w-3.5 md:h-3.5" />
                <span className="text-xs md:text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="text-center text-sm md:text-xl font-semibold text-foreground mt-2 md:mt-4"
      >
        Your social media becomes a <span className="text-gradient-hero">trust-building machine</span>.
      </motion.p>
    </SlideLayout>
  );
};
