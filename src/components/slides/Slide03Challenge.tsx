import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Eye, Target, Users, Settings, AlertCircle, BarChart, Swords } from "lucide-react";

const problems = [
  { icon: Eye, text: "Weak or outdated brand presence" },
  { icon: Target, text: "Low online visibility" },
  { icon: Users, text: "Ineffective admissions marketing" },
  { 
    icon: Settings, 
    text: <>Disconnected systems <br/><span className="text-xs opacity-80">(website, CRM, ads, counsellors)</span></> 
  },
  { icon: AlertCircle, text: "Poor-quality leads" },
  { icon: BarChart, text: "No measurement or tracking" },
  { icon: Swords, text: "Competing institutions running aggressive digital campaigns" },
];

export const Slide03Challenge = () => {
  return (
    <SlideLayout>
      <SlideHeader
        title={<>Why Education Needs a Strong <span className="text-gradient-warm">Growth Partner</span></>}
        centered
      />

      {/* Moved Subtitle OUTSIDE SlideHeader */}
      <div className="text-center -mt-4 mb-6 md:mb-10">
        <p className="text-sm md:text-xl text-muted-foreground md:whitespace-nowrap">
          Today's parents and students have more options than ever. But institutions struggle with:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-10">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.08 }}
            className={`flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-muted/60 
              ${index === 6 ? 'lg:col-start-2' : ''}
            `}
          >
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <problem.icon size={14} className="text-secondary md:w-4 md:h-4" />
            </div>
            <span className="text-foreground font-medium text-xs md:text-sm leading-snug">
              {problem.text}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="bg-gradient-hero p-4 md:p-8 rounded-2xl text-primary-foreground text-center"
      >
        <p className="text-sm md:text-xl font-medium mb-1 md:mb-2">This is not a marketing problem.</p>
        <p className="text-lg md:text-3xl font-bold">This is a growth-system problem.</p>
        <p className="text-sm md:text-lg mt-2 md:mt-3 opacity-90">EyeLevel solves it end-to-end.</p>
      </motion.div>
    </SlideLayout>
  );
};
