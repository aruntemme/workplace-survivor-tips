"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Question, Answer } from "@/lib/quiz/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnswerOption } from "./AnswerOption";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (questionId: string, points: number) => void;
  isTransitioning?: boolean;
}

/**
 * Fisher-Yates shuffle for randomizing answer order
 */
function shuffleAnswers(answers: Answer[]): Answer[] {
  const shuffled = [...answers];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  isTransitioning = false,
}: QuestionCardProps) {
  // Shuffle answers once when the question changes
  const shuffledAnswers = useMemo(
    () => shuffleAnswers(question.answers),
    [question.id] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleAnswerSelect = (points: number) => {
    if (!isTransitioning) {
      onAnswer(question.id, points);
    }
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-full max-w-xl mx-auto"
    >
      <GlassCard variant="elevated" padding="lg" className="relative">
        {/* Question number badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2"
        >
          <span className="px-4 py-1 text-sm font-medium text-purple-600 bg-white rounded-full shadow-sm border border-purple-100">
            {questionNumber} / {totalQuestions}
          </span>
        </motion.div>

        {/* Question text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-xl md:text-2xl font-semibold text-gray-800 text-center mt-4 mb-8 leading-relaxed"
        >
          {question.text}
        </motion.h2>

        {/* Answer options - shuffled */}
        <div className="space-y-3">
          {shuffledAnswers.map((answer, index) => (
            <AnswerOption
              key={answer.id}
              answer={answer}
              index={index}
              onSelect={() => handleAnswerSelect(answer.points)}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default QuestionCard;
