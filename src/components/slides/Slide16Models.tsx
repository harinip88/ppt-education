import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Star, Briefcase, Calendar, Wrench } from "lucide-react";

const models = [
  {
    icon: Star,
    title: "Admissions Growth Plan",
    description: "Full 360° setup + monthly management",
    badge: "Most Popular",
    featured: true
  },
  {
    icon: Briefcase,
    title: "Project-Based",
    description: "Websites, branding, campaigns, videos, events"
  },
  {
    icon: Calendar,
    title: "Annual Institutional Partnership",
    description: "Year-round branding + marketing + events + automation"
  },
  {
    icon: Wrench,
    title: "Custom Plans",
    description: "Tailored to your institution's goals"
  },
];

export const Slide16Models = () => {
  return (
    <SlideLayout variant="muted">
      <SlideHeader
        title={<>Our <span className="text-gradient-hero">Engagement Models</span></>}
        centered
      />

      {/* Moved out of SlideHeader to guarantee centering */}
      <div className="text-center -mt-4 mb-6 md:mb-10">
        <p className="text-base md:text-xl text-muted-foreground">
          Choose a model that fits your needs:
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {models.map((model, index) => (
          <motion.div
            key={model.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className={`relative p-3 md:p-6 rounded-xl md:rounded-2xl ${
              model.featured
                ? "bg-gradient-hero text-primary-foreground shadow-glow-coral"
                : "bg-card shadow-soft"
            }`}
          >
            {model.badge && (
              <span className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 px-2 md:px-3 py-0.5 md:py-1 bg-secondary text-secondary-foreground text-[10px] md:text-xs font-bold rounded-full">
                {model.badge}
              </span>
            )}
            <div
              className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4 ${
                model.featured ? "bg-primary-foreground/20" : "bg-accent"
              }`}
            >
              <model.icon size={20} className={`${model.featured ? "text-primary-foreground" : "text-primary"} md:w-7 md:h-7`} />
            </div>
            <h3 className={`text-sm md:text-lg font-bold mb-1 md:mb-2 ${!model.featured && "text-foreground"}`}>
              {model.title}
            </h3>
            <p className={`text-[10px] md:text-sm ${model.featured ? "opacity-90" : "text-muted-foreground"}`}>
              {model.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};
