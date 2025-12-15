import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "gradient" | "muted";
}

export const SlideLayout = ({ children, className, variant = "default" }: SlideLayoutProps) => {
  const bgVariants = {
    default: "bg-background",
    accent: "bg-accent",
    gradient: "bg-gradient-soft",
    muted: "bg-muted",
  };

  return (
    <div className={cn("min-h-screen w-full flex items-start md:items-center justify-center p-4 py-16 md:p-16 overflow-y-auto", bgVariants[variant], className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </div>
  );
};

interface SlideHeaderProps {
  badge?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
}

export const SlideHeader = ({ badge, title, subtitle, centered = false }: SlideHeaderProps) => {
  return (
    <div className={cn("mb-4 md:mb-12", centered && "text-center")}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm md:text-xl text-muted-foreground mt-2 md:mt-4 max-w-3xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

interface ContentItemProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  delay?: number;
  className?: string;
}

export const ContentItem = ({ icon, title, description, delay = 0, className }: ContentItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + delay * 0.1 }}
      className={cn("flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft", className)}
    >
      {icon && (
        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
      )}
      <div>
        {title && <h4 className="font-semibold text-foreground">{title}</h4>}
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
    </motion.div>
  );
};
