import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Check } from "lucide-react";
import heroEducation from "@/assets/hero-education-2.jpeg";

const expertise = [
  "Parent psychology",
  "Digital-first decision-making",
  "Importance of trust & safety",
  "Seasonal admissions cycles",
  "Locality-based lead targeting",
];

export const Slide14Trust = () => {
  return (
    <SlideLayout variant="muted">
      <SlideHeader
        title={(
          <>
            Why Leading Preschools & Schools {" "}
            <span className="text-gradient-hero">Trust Us</span>
          </>
        )}
      />

      <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
        <div>
          {/* LEADERSHIP CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 md:mb-8"
          >
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-4">
              Leadership You Can Trust
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Our co-founder, <strong>Akmal Rahman</strong>, brings <strong>15+ years</strong> of
              marketing experience across global brands, including serving as Head
              of Global Marketing for <strong>major early education and pre-school chains</strong>.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-lg font-medium text-foreground mb-3 md:mb-4"
          >
            We understand:
          </motion.p>

          <div className="space-y-2 md:space-y-3">
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Check size={10} className="text-secondary-foreground md:w-3.5 md:h-3.5" />
                </div>
                <span className="font-medium text-foreground text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-4 md:mt-8 text-sm md:text-lg font-semibold text-foreground"
          >
            This deep domain experience gives us a {" "}
            <span className="text-gradient-hero">winning advantage</span>.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 lg:mt-0"
        >
          <img
            src={heroEducation}
            alt="Happy students"
            className="rounded-2xl shadow-elevated w-full aspect-video object-cover"
          />
        </motion.div>
      </div>
    </SlideLayout>
  );
};
