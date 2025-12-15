import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Check } from "lucide-react";

const crmFeatures = [
  "HubSpot, Salesforce, Zoho, or Odoo setup",
  "Automated parent reminders for: Interviews, Campus visits, Fee payments",
  "End-to-end admission automation",
  "Lead scoring & segmentation",
  "Counsellor dashboards",
  "Call center integration via: Exotel, Knowlarity, Nora Ready",
  "Parent journey mapping",
  "Pipeline optimization",
  "Click-to-call & WhatsApp integration",
];

export const Slide10CRM = () => {
  return (
    <SlideLayout variant="muted">
      <SlideHeader
        title={<>CRM & <span className="text-gradient-hero">Automation</span> for Admissions</>}
        subtitle="Most institutions lose leads due to slow follow-up. We fix this."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-10">
        {crmFeatures.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.06 }}
            className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-card shadow-soft"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Check size={10} className="text-secondary-foreground md:w-3.5 md:h-3.5" />
            </div>
            <span className="text-foreground text-xs md:text-sm">{feature}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-gradient-teal p-4 md:p-6 rounded-2xl text-primary-foreground text-center"
      >
        <p className="text-sm md:text-xl font-bold">No lead is ever lost again.</p>
      </motion.div>
    </SlideLayout>
  );
};
