import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import all slides
import { Slide01Title } from "@/components/slides/Slide01Title";
import { Slide02Advantage } from "@/components/slides/Slide02Advantage";
import { Slide03Challenge } from "@/components/slides/Slide03Challenge";
import { Slide04Deliver } from "@/components/slides/Slide04Deliver";
import { Slide05Approach } from "@/components/slides/Slide05Approach";
import { Slide07Branding } from "@/components/slides/Slide07Branding";
import { Slide08Performance } from "@/components/slides/Slide08Performance";
import { Slide10CRM } from "@/components/slides/Slide10CRM";
import { Slide13Recruitment } from "@/components/slides/Slide13Recruitment";
import { Slide15WhyUs } from "@/components/slides/Slide15WhyUs";
import { Slide16Models } from "@/components/slides/Slide16Models";
import { Slide17Next } from "@/components/slides/Slide17Next";
import { Slide18Contact } from "@/components/slides/Slide18Contact";

const slides = [
  { id: 1, component: Slide01Title },
  { id: 2, component: Slide02Advantage },
  { id: 3, component: Slide03Challenge },
  { id: 4, component: Slide04Deliver },
  { id: 5, component: Slide05Approach },
  { id: 7, component: Slide07Branding },
  { id: 8, component: Slide08Performance },
  { id: 10, component: Slide10CRM },
  { id: 13, component: Slide13Recruitment },
  { id: 15, component: Slide15WhyUs },
  { id: 16, component: Slide16Models },
  { id: 17, component: Slide17Next },
  { id: 18, component: Slide18Contact },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-background">
      {/* Slide Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={cn(
          "fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-foreground/20",
          currentSlide === 0 && "opacity-30 cursor-not-allowed"
        )}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className={cn(
          "fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-foreground/20",
          currentSlide === slides.length - 1 && "opacity-30 cursor-not-allowed"
        )}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
      </button>

      {/* Slide Counter & Progress */}
      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 md:gap-3">
        {/* Progress Dots - Hidden on very small screens */}
        <div className="hidden sm:flex gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "bg-primary w-4 md:w-6"
                  : "bg-foreground/20 hover:bg-foreground/40"
              )}
            />
          ))}
        </div>

        {/* Slide Number */}
        <p className="text-xs md:text-sm text-muted-foreground font-medium bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
          {currentSlide + 1} / {slides.length}
        </p>
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 text-xs text-muted-foreground">
        <kbd className="px-2 py-1 rounded bg-muted">←</kbd>
        <kbd className="px-2 py-1 rounded bg-muted">→</kbd>
        <span>to navigate</span>
      </div>
    </div>
  );
};

export default Index;
