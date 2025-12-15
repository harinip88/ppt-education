import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";

const steps = [
  "Discovery Call",
  "Audit of Current Marketing & Admissions",
  "Custom Roadmap",
  "Execution Timeline",
  "Launch"
];

export const Slide17Next = () => {
  return (
    <SlideLayout>
      <SlideHeader
        title={<>What's <span className="text-gradient-hero">Next?</span></>}
        centered
      />

      {/* Moved out of SlideHeader to guarantee centering */}
      <div className="text-center -mt-4 mb-6 md:mb-10">
        <p className="text-base md:text-xl text-muted-foreground">
          We begin with:
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-0.5 bg-gradient-hero hidden md:block" />

          <div className="space-y-3 md:space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15 }}
                className="flex items-center gap-3 md:gap-6"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground text-lg md:text-2xl font-bold shadow-glow-coral z-10 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 p-3 md:p-5 rounded-lg md:rounded-xl bg-muted">
                  <span className="text-sm md:text-xl font-semibold text-foreground">{step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 md:mt-12 text-center text-lg md:text-2xl font-bold text-gradient-hero"
        >
          Let's build your growth — together.
        </motion.p>
      </div>
    </SlideLayout>
  );
};
