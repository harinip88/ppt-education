import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Briefcase, Video, FileText, Users, Award } from "lucide-react";

const services = [
  { icon: Briefcase, label: "Career-focused marketing campaigns" },
  { icon: Users, label: "Industry partnership visual campaigns" },
  { icon: Video, label: "Alumni success story videos" },
  { icon: FileText, label: "Placement brochures" },
  { icon: Award, label: "Recruiter partnership decks" },
];

export const Slide13Recruitment = () => {
  // Split the data into two groups
  const leftServices = services.slice(0, 3);
  const rightServices = services.slice(3);

  return (
    <SlideLayout>
      <SlideHeader
        title={<>Student Recruitment Campaigns <span className="text-gradient-warm">(Colleges)</span></>}
        subtitle="For higher education, we deliver:"
      />

      {/* Increased max-width to accommodate two columns nicely */}
      <div className="max-w-5xl mx-auto">
        
        {/* Grid container for the split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start mb-6 md:mb-10">
          
          {/* LEFT COLUMN (3 items) */}
          <div className="space-y-2 md:space-y-4">
            {leftServices.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-muted shadow-sm"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                  <service.icon size={18} className="text-primary-foreground md:w-6 md:h-6" />
                </div>
                <span className="font-semibold text-foreground text-sm md:text-lg leading-tight">{service.label}</span>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN (2 items) */}
          <div className="space-y-2 md:space-y-4 md:mt-8">
            {rightServices.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (index + 3) * 0.1 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-muted shadow-sm"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-warm flex items-center justify-center flex-shrink-0">
                  <service.icon size={18} className="text-secondary-foreground md:w-6 md:h-6" />
                </div>
                <span className="font-semibold text-foreground text-sm md:text-lg leading-tight">{service.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom full-width box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-gradient-teal p-4 md:p-6 rounded-2xl text-primary-foreground text-center shadow-md max-w-4xl mx-auto"
        >
          <p className="text-base md:text-2xl font-bold">
            We help colleges attract both students and recruiters.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
