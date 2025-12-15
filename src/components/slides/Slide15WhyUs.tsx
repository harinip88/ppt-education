import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Shield, Brain, Award, Rocket, Clock, Check } from "lucide-react";

const reasons = [
  { icon: Shield, title: "One partner for everything", desc: "Branding to automation" },
  { icon: Brain, title: "Senior-led strategy", desc: "Expert guidance at every step" },
  { icon: Award, title: "Consistent, high-quality execution", desc: "Premium results" },
  { icon: Rocket, title: "Domain experience in education", desc: "Deep sector knowledge" },
  { icon: Check, title: "Proven success with premium institutions", desc: "Track record" },
  { icon: Clock, title: "Fast delivery + measurable outcomes", desc: "Quick turnaround" },
];

export const Slide15WhyUs = () => {
  return (
    <SlideLayout>
      <SlideHeader
        title={<>Why EyeLevel is the <span className="text-gradient-hero">Right Partner</span></>}
        centered
      />

      {/* Moved out of SlideHeader to guarantee centering */}
      <div className="text-center -mt-4 mb-6 md:mb-10">
        <p className="text-base md:text-xl text-muted-foreground">
          for Your Institution
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-10">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="p-3 md:p-5 rounded-xl md:rounded-2xl bg-muted hover:bg-muted/80 transition-colors"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-hero flex items-center justify-center mb-2 md:mb-4">
              <reason.icon size={18} className="text-primary-foreground md:w-6 md:h-6" />
            </div>
            <h3 className="font-bold text-foreground mb-1 text-xs md:text-base">{reason.title}</h3>
            <p className="text-[10px] md:text-sm text-muted-foreground">{reason.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-center"
      >
        <p className="text-sm md:text-lg text-muted-foreground">A complete admissions engine — not fragmented services.</p>
        <p className="text-base md:text-2xl font-bold text-gradient-hero mt-2">
          We help you grow admissions predictably, professionally, and powerfully.
        </p>
      </motion.div>
    </SlideLayout>
  );
};
