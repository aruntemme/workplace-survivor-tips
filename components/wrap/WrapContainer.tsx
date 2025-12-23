"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { WrapStats } from "@/lib/wrap/types";
import { WRAP_YEAR } from "@/lib/wrap/constants";
import { StoryProgress } from "./StoryProgress";
import {
  ManagerPlayedYouSlide,
  MeetingGenreSlide,
  EmailSkipRateSlide,
  CompensationRemixSlide,
  BossFightsSlide,
  TopPhrasesSlide,
  HPReportSlide,
} from "./StatRevealCard";
import { PersonaReveal } from "./PersonaReveal";

interface WrapContainerProps {
  stats: WrapStats;
}

export function WrapContainer({ stats }: WrapContainerProps) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  // Define slides based on stats
  const slides = [
    // Intro slide
    {
      id: "intro",
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg mb-4"
          >
            Your {WRAP_YEAR}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Work Wrapped
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/40"
          >
            Tap to continue
          </motion.p>
        </motion.div>
      ),
    },
    // Manager played you
    {
      id: "manager",
      content: (
        <ManagerPlayedYouSlide
          timesLoopedIn={stats.managerPlayedYou}
          timesNeeded={Math.floor(stats.managerPlayedYou * 0.02) + 1}
        />
      ),
    },
    // Meeting genre
    {
      id: "meetings",
      content: (
        <MeetingGenreSlide
          hours={stats.meetingHours}
          couldBeEmails={stats.meetingsThatCouldBeEmails}
        />
      ),
    },
    // Email skip rate
    {
      id: "emails",
      content: <EmailSkipRateSlide skipRate={stats.emailSkipRate} />,
    },
    // Compensation remix
    {
      id: "compensation",
      content: (
        <CompensationRemixSlide
          inflation={stats.inflationRate}
          raise={stats.raiseRate}
        />
      ),
    },
    // Boss fights
    {
      id: "bosses",
      content: <BossFightsSlide bosses={stats.bossesDefeated} />,
    },
    // Top phrases
    {
      id: "phrases",
      content: <TopPhrasesSlide phrases={stats.topPhrases} />,
    },
    // HP report
    {
      id: "hp",
      content: <HPReportSlide hpRemaining={stats.hpRemaining} />,
    },
    // Persona reveal
    {
      id: "persona",
      content: <PersonaReveal stats={stats} />,
    },
  ];

  const totalSlides = slides.length;

  const goToNextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    } else {
      // Navigate to summary
      router.push(`/wrap/summary/${stats.persona}`);
    }
  }, [currentSlide, totalSlides, router, stats.persona]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  // Touch/click handlers for left/right navigation
  const handleClick = (e: React.MouseEvent) => {
    const { clientX } = e;
    const { innerWidth } = window;

    if (clientX < innerWidth / 3) {
      goToPrevSlide();
    } else {
      goToNextSlide();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="min-h-screen wrap-bg flex flex-col cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Progress bar */}
      <div className="pt-4 pb-2">
        <StoryProgress total={totalSlides} current={currentSlide} />
      </div>

      {/* Slide content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slides[currentSlide].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pb-6 text-center"
      >
        <p className="text-xs text-white/30">
          {currentSlide === 0
            ? "Tap anywhere to start"
            : currentSlide === totalSlides - 1
            ? "Tap to see your summary"
            : "Tap right to continue • Tap left to go back"}
        </p>
      </motion.div>
    </div>
  );
}

export default WrapContainer;
