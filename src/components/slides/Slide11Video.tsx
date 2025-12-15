import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout"; 
import { Camera, Video, Users, Building, Plane, Eye } from "lucide-react";

import lab from "@/assets/lab.jpeg";
import ground from "@/assets/ground.jpg";
import preschool from "@/assets/preschool.jpg";

const productions = [
  { icon: Building, label: "Campus infrastructure shoots" },
  { icon: Camera, label: "Classroom & lab photography" },
  { icon: Video, label: "Student life videos" },
  { icon: Users, label: "Teacher introduction films" },
  { icon: Users, label: "Testimonial videos" },
  { icon: Building, label: "Hostel & cafeteria tours" },
  { icon: Plane, label: "Drone campus walkthroughs" },
  { icon: Eye, label: "Virtual campus experiences" },
];

export const Slide11Video = () => {
  return (
    <SlideLayout>
      {/* CENTERING: The 'text-center' div ensures both the title and the subtitle are centered. */}
      <div className="text-center"> 
        <SlideHeader
          title={<>Photography & <span className="text-gradient-warm">Video Production</span></>}
          subtitle={
            <span className="md:whitespace-nowrap">
              We help parents see the environment where their child will grow. We produce:
            </span>
          }
        />
      </div>

      {/* CONTENT BLOCK (PRODUCTION BOXES) */}
      <div className="grid grid-cols-2 gap-2 mt-4 max-w-3xl mx-auto">
        {productions.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.08 }}
            className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl bg-muted"
          >
            <item.icon size={14} className="text-primary flex-shrink-0 md:w-[18px] md:h-[18px]" />
            <span className="font-medium text-foreground text-xs md:text-sm">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* IMAGES BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative w-full mt-4 md:mt-8" 
      >
        <div className="grid grid-cols-3 gap-2 md:gap-4"> 
          <img 
            src={lab} 
            alt="Classroom or Lab photo" 
            className="rounded-lg md:rounded-2xl w-full aspect-[4/3] object-cover shadow-elevated" 
          />
          <img 
            src={ground} 
            alt="Playground or campus ground photo" 
            className="rounded-lg md:rounded-2xl w-full aspect-[4/3] object-cover shadow-elevated" 
          />
          <img 
            src={preschool} 
            alt="Preschool or group activity photo" 
            className="rounded-lg md:rounded-2xl w-full aspect-[4/3] object-cover shadow-elevated" 
          />
        </div>
      </motion.div>

      {/* CALL TO ACTION / SUMMARY */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-4 md:mt-8 text-center text-sm md:text-xl font-semibold text-foreground"
      >
        Powerful visuals = <span className="text-secondary">higher trust</span> = <span className="text-gradient-hero">higher admissions</span>
      </motion.p>
    </SlideLayout>
  );
};
