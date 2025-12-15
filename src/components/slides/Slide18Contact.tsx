import { motion } from "framer-motion";
import { SlideLayout } from "./SlideLayout";
import { Mail, Phone, Globe } from "lucide-react";
import abstractGrowth from "@/assets/abstract-growth.jpg";

export const Slide18Contact = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-16 md:py-0">
      <div className="absolute inset-0 z-0">
        <img
          src={abstractGrowth}
          alt="Abstract"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4"
        >
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4"
        >
          <span className="text-gradient-hero">EyeLevel</span>{" "}
          <span className="text-foreground">Growth Studio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-xl text-muted-foreground mb-6 md:mb-12"
        >
          Transforming Education Brands. Driving Admissions Growth.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-12">
          <motion.a
            href="mailto:hello@eyelevelstudio.in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-card shadow-elevated hover:shadow-glow-coral transition-all"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center mb-2 md:mb-4">
              <Mail size={18} className="text-primary md:w-6 md:h-6" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mb-1">Email</p>
            <p className="font-semibold text-foreground text-sm md:text-base">hello@eyelevelstudio.in</p>
          </motion.a>

          <motion.a
            href="tel:+919789099499"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-card shadow-elevated hover:shadow-glow-teal transition-all"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-2 md:mb-4">
              <Phone size={18} className="text-secondary md:w-6 md:h-6" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mb-1">Phone</p>
            <p className="font-semibold text-foreground text-sm md:text-base">+91 97890 99499</p>
          </motion.a>

          <motion.a
            href="https://www.theeyelevelstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-card shadow-elevated hover:shadow-glow-coral transition-all"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center mb-2 md:mb-4">
              <Globe size={18} className="text-primary md:w-6 md:h-6" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mb-1">Website</p>
            <p className="font-semibold text-foreground text-sm md:text-base">www.theeyelevelstudio.com</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="inline-block"
        >
          <a
            href="mailto:hello@eyelevelstudio.in"
            className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 bg-gradient-hero text-primary-foreground font-semibold text-sm md:text-lg rounded-xl shadow-glow-coral hover:scale-105 transition-transform"
          >
            Let's Start Your Growth Journey
          </a>
        </motion.div>
      </div>
    </div>
  );
};
