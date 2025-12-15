import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import brandingPreview from "@/assets/broucher.jpeg";

const brandingItems = [
  { 
    category: "Marketing Materials", 
    items: [
      "Flyers, Brochures & Admission Booklets", 
      "Sales Kits For Admission Counsellors", 
      "Parent Handbook Design", 
      "Event Branding Kits (Graduation, Annual Day, Fests)"
    ] 
  },
  { 
    category: "Campus & Classroom", 
    items: [
      "Classroom Posters & Subject Visuals", 
      "Identity Design For New Campuses"
    ] 
  },
  { 
    category: "Academic Kits", 
    items: [
      "Worksheets", 
      "Session Planners", 
      "Timetable Designs", 
      "Parent Communication Templates"
    ] 
  },
  { 
    category: "Admission Kits", 
    items: [
      "Enrollment Forms", 
      "Info Packets", 
      "Welcome Kits"
    ] 
  },
];

export const Slide07Branding = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center min-h-[calc(100vh-8rem)]">
        <SlideHeader
          title={<>Branding & <span className="text-gradient-warm">Creative Assets</span></>}
          subtitle="Your brand must communicate trust, credibility, and excellence. We create:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-center mx-auto w-full max-w-5xl">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-[500px]">
              <img
                src={brandingPreview}
                alt="Branding materials example"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {brandingItems.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + sectionIndex * 0.1 }}
                className="p-2 md:p-4 rounded-xl bg-muted"
              >
                <h3 className="font-bold text-foreground mb-1 md:mb-2 text-xs md:text-sm">{section.category}</h3>
                <ul className="space-y-0.5 md:space-y-1">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-muted-foreground text-[10px] md:text-xs">
                      <div className="w-1 h-1 rounded-full bg-secondary flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-3 md:mt-6 text-center text-xs md:text-base font-semibold text-foreground max-w-5xl mx-auto"
        >
          We make your institution look <span className="text-gradient-hero">premium and professional</span> — everywhere.
        </motion.p>
      </div>
    </SlideLayout>
  );
};
