import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { TrendingUp, Users, Target, BarChart3, Zap } from "lucide-react";
import heroEducation from "@/assets/hero-education-2.jpeg";

const advantages = [
  { icon: TrendingUp, label: "More visibility" },
  { icon: Users, label: "More admissions inquiries" },
  { icon: Target, label: "More parent trust" },
  { icon: BarChart3, label: "More systemized operations" },
  { icon: Zap, label: "Smoother admissions cycles year after year" },
];

export const Slide02Advantage = () => {
  return (
    <SlideLayout variant="muted">
      {/* Header Section */}
      <div className="mb-6 md:mb-10">
        <SlideHeader
          title={
            <span className="md:whitespace-nowrap">
              The <span className="text-primary font-bold">EyeLevel</span> Advantage
            </span>
          }
          subtitle={
            <span className="md:whitespace-nowrap block">
              We are a modern Growth Studio built for institutions that want:
            </span>
          }
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start mb-6 md:mb-10">
        {/* Left Column: List */}
        <div className="space-y-2 md:space-y-3">
          {advantages.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card shadow-soft"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-primary md:w-5 md:h-5" />
              </div>
              <span className="font-medium text-foreground text-sm md:text-base">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mt-4 lg:mt-12"
        >
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
          <img
            src={heroEducation}
            alt="Happy children learning"
            className="relative rounded-2xl shadow-elevated w-full aspect-video object-cover"
          />
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="text-sm md:text-lg text-muted-foreground max-w-6xl leading-relaxed"
      >
        For preschools, schools, colleges, and universities — we bring together branding,
        performance marketing, automation, <br className="hidden lg:block" /> video production, and event execution into one
        powerful growth engine.
      </motion.p>
    </SlideLayout>
  );
};
