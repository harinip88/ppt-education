import { motion } from "framer-motion";
import abstractGrowth from "@/assets/abstract-growth.jpg";
import logo from "@/assets/logo.png";

export const Slide01Title = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-16 md:py-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={abstractGrowth}
          alt="Abstract growth"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-4 md:left-16 w-16 md:w-20 h-16 md:h-20 rounded-full bg-secondary/20 blur-2xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-4 md:right-20 w-24 md:w-32 h-24 md:h-32 rounded-full bg-primary/15 blur-2xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-accent/80 backdrop-blur-sm text-accent-foreground text-xs md:text-sm font-medium mb-4 md:mb-8"
        >
          For Preschools, Schools, Colleges & Education Institutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold leading-tight relative z-20"
        >
          <span className="md:whitespace-nowrap">
            Transforming <span className="text-gradient-hero">Education Brands.</span>
          </span>
          
          <span className="block mt-3 md:mt-6 text-lg sm:text-xl md:text-4xl lg:text-5xl font-semibold text-foreground/90">
            Driving <span className="text-secondary">Admissions Growth.</span>
          </span>
        </motion.h1>

        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-2 md:mt-4 relative z-10"
        >
          <img
            src={logo}
            alt="EyeLevel Growth Studio Logo"
            className="h-20 sm:h-28 md:h-60 w-auto object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      </div>
    </div>
  );
};
