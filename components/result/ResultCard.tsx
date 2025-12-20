"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ResultType } from "@/lib/quiz/types";
import { resultContent } from "@/lib/quiz/results";
import { calculateFrustrationPercentage } from "@/lib/quiz/scoring";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ShareButtons } from "./ShareButtons";

interface ResultCardProps {
  resultType: ResultType;
  score: number;
}

export function ResultCard({ resultType, score }: ResultCardProps) {
  const content = resultContent[resultType];
  const frustrationPercent = calculateFrustrationPercentage(score);

  const getFrustrationLabel = () => {
    if (frustrationPercent < 30) return { text: "Suspiciously Low", color: "text-green-600" };
    if (frustrationPercent < 50) return { text: "Manageable", color: "text-yellow-600" };
    if (frustrationPercent < 70) return { text: "Concerning", color: "text-orange-600" };
    if (frustrationPercent < 85) return { text: "Critical", color: "text-red-500" };
    return { text: "Send Help", color: "text-red-600" };
  };

  const frustrationLabel = getFrustrationLabel();

  return (
    <div className={`min-h-screen ${content.gradient} flex flex-col`}>
      {/* Minimal header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="pt-4 px-4"
      >
        <Link
          href="/"
          className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
        >
          Do I Love My Job?
        </Link>
      </motion.header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-3xl">
          {/* Hero section - Emoji + Title + Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
              className="text-6xl mb-3"
            >
              {content.emoji}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs text-gray-500 uppercase tracking-widest mb-2"
            >
              Your Diagnosis
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-3xl font-bold text-gray-800 mb-3"
            >
              {content.title}
            </motion.h1>

            {/* Inline badge */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-medium"
              style={{ backgroundColor: content.badgeColor }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
              {content.badgeLevel}
            </motion.span>
          </motion.div>

          {/* Two-column layout on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left card - Description & Traits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <GlassCard variant="elevated" padding="lg" className="h-full">
                {/* Description - the main insight */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {content.description}
                </p>

                {/* Traits list */}
                <div className="space-y-2">
                  {content.traits.map((trait, index) => (
                    <motion.div
                      key={trait}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{trait}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Right card - Frustration meter & Survival tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard variant="elevated" padding="lg" className="h-full flex flex-col">
                {/* Frustration meter */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">Frustration Level</span>
                    <span className={`text-xs font-medium ${frustrationLabel.color}`}>
                      {frustrationLabel.text}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${frustrationPercent}%` }}
                      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 to-red-500 rounded-full"
                    />
                  </div>
                  <p className="text-right text-lg font-bold text-gray-700 mt-1">
                    {frustrationPercent}%
                  </p>
                </div>

                {/* Survival tip - highlighted */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex-1 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100/50"
                >
                  <p className="text-xs font-medium text-purple-600 mb-1">
                    💡 Survival Tip
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {content.survivalTip}
                  </p>
                </motion.div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Share section - outside main card for visual separation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6"
          >
            <ShareButtons resultType={resultType} score={score} />
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <Link href="/quiz">
              <Button variant="secondary" size="sm">
                Retake Quiz
              </Button>
            </Link>

            {content.isPositivePath && (
              <Link href="/boring">
                <Button variant="ghost" size="sm">
                  Your Content
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </main>

      {/* Minimal footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="py-4 text-center"
      >
        <p className="text-xs text-gray-400">
          {content.isPositivePath
            ? "You're actually happy? Rare."
            : "HR isn't watching. Probably."}
        </p>
      </motion.footer>
    </div>
  );
}

export default ResultCard;
