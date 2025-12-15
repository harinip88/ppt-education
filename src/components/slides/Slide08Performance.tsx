import { motion } from "framer-motion";
import { SlideLayout, SlideHeader } from "./SlideLayout";
import { Facebook, Instagram, Youtube, RefreshCw, Calendar, BarChart, Settings, Chrome } from "lucide-react";


const campaigns = [
  {
    icon: Chrome,
    iconColor: "text-blue-500",
    label: (
      <>
        Google Search Ads <br />
        <span className="text-xs text-muted-foreground font-normal">
          (Parents Actively Searching)
        </span>
      </>
    ),
  },
  {
    icon: Facebook,
    iconColor: "text-blue-700",
    label: (
      <>
        Meta Lead Ads <br />
        <span className="text-xs text-muted-foreground font-normal">
          (Awareness + Inquiries)
        </span>
      </>
    ),
  },
  {
    icon: Instagram,
    iconColor: "text-pink-600",
    label: "Instagram & Reels-Based Funnels",
  },
  {
    icon: Youtube,
    iconColor: "text-red-600",
    label: "YouTube Ads For Brand Films",
  },
  {
    icon: RefreshCw,
    iconColor: "text-primary",
    label: "Retargeting & Remarketing",
  },
  {
    icon: Calendar,
    iconColor: "text-primary",
    label: "Season-Based Admission Campaigns",
  },
  {
    icon: BarChart,
    iconColor: "text-primary",
    label: "Lead Qualification + Scoring",
  },
  {
    icon: Settings,
    iconColor: "text-primary",
    label: "CRM Integrated Automation",
  },
];

export const Slide08Performance = () => {
  return (
    <SlideLayout variant="muted">
      <div className="flex flex-col justify-center min-h-[calc(100vh-8rem)]">
        <SlideHeader
          title={
            <>
              Performance Marketing & {" "}
              <span className="text-gradient-hero">Lead Generation</span>
            </>
          }
          subtitle="We specialize in high-quality admissions leads. Our campaigns include:"
        />

        {/* Campaigns Grid - Centered */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-4xl mx-auto w-full">
          {campaigns.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.06 }}
              className="flex items-start gap-2 p-2 md:p-3 rounded-lg bg-card shadow-soft"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                <item.icon size={12} className={`${item.iconColor} md:w-4 md:h-4`} />
              </div>
              <span className="font-medium text-foreground text-[10px] md:text-xs leading-snug">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-4 md:mt-6 bg-gradient-warm p-3 md:p-5 rounded-2xl text-secondary-foreground text-center max-w-4xl mx-auto w-full"
        >
          <p className="text-xs md:text-base font-bold">
            We bring you inquiries that convert — not random traffic.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
