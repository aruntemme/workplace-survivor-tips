"use client";

import { useReducer, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getWrapQuestions } from "@/lib/wrap/questions";
import { generateWrapStats, accumulateModifiers } from "@/lib/wrap/stats";
import { WrapState, WrapAction, BaseStatModifiers } from "@/lib/wrap/types";
import { WrapAnswerOption } from "./WrapAnswerOption";
import { WRAP_YEAR } from "@/lib/wrap/constants";

const initialState: WrapState = {
  status: "idle",
  currentQuestionIndex: 0,
  questions: [],
  answers: {},
  totalScore: 0,
  stats: null,
};

function wrapReducer(state: WrapState, action: WrapAction): WrapState {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...state,
        status: "quiz",
        questions: action.questions,
        currentQuestionIndex: 0,
        answers: {},
        totalScore: 0,
      };
    case "ANSWER_QUESTION":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.points,
        },
        totalScore: state.totalScore + action.points,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case "CALCULATE_STATS":
      return {
        ...state,
        status: "calculating",
      };
    case "SET_STATS":
      return {
        ...state,
        status: "complete",
        stats: action.stats,
      };
    default:
      return state;
  }
}

export function WrapQuiz() {
  const router = useRouter();
  const [state, dispatch] = useReducer(wrapReducer, initialState);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [modifiers, setModifiers] = useState<Partial<BaseStatModifiers>>({});

  // Initialize quiz
  useEffect(() => {
    const questions = getWrapQuestions();
    dispatch({ type: "START_QUIZ", questions });
  }, []);

  const handleAnswer = useCallback(
    (questionId: string, points: number, answerModifiers?: Partial<BaseStatModifiers>) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      // Record the answer
      dispatch({ type: "ANSWER_QUESTION", questionId, points });

      // Accumulate modifiers
      if (answerModifiers) {
        setModifiers((prev) => accumulateModifiers(prev, answerModifiers));
      }

      const isLastQuestion =
        state.currentQuestionIndex >= state.questions.length - 1;

      if (isLastQuestion) {
        // Calculate final stats and navigate to reveal
        dispatch({ type: "CALCULATE_STATS" });

        const finalScore = state.totalScore + points;
        const finalModifiers = accumulateModifiers(modifiers, answerModifiers);
        const stats = generateWrapStats(finalScore, finalModifiers);

        // Store stats in sessionStorage for the reveal page
        sessionStorage.setItem("wrapStats", JSON.stringify(stats));

        // Navigate to reveal
        setTimeout(() => {
          router.push("/wrap/reveal");
        }, 800);
      } else {
        // Move to next question
        setTimeout(() => {
          dispatch({ type: "NEXT_QUESTION" });
          setIsTransitioning(false);
        }, 400);
      }
    },
    [
      state.currentQuestionIndex,
      state.questions.length,
      state.totalScore,
      isTransitioning,
      router,
      modifiers,
    ]
  );

  // Loading state
  if (state.status === "idle" || state.questions.length === 0) {
    return (
      <div className="min-h-screen wrap-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-green-500/30 border-t-green-500"
          />
          <p className="text-white/60 font-medium">
            Preparing your {WRAP_YEAR} wrap...
          </p>
        </motion.div>
      </div>
    );
  }

  // Calculating state
  if (state.status === "calculating") {
    return (
      <div className="min-h-screen wrap-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            🎵
          </motion.div>
          <p className="text-white font-medium text-xl mb-2">
            Analyzing your {WRAP_YEAR}...
          </p>
          <p className="text-white/50 text-sm">This might hurt a little.</p>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = state.questions[state.currentQuestionIndex];
  const progress =
    ((state.currentQuestionIndex + 1) / state.questions.length) * 100;

  return (
    <div className="min-h-screen wrap-bg flex flex-col">
      {/* Progress bar */}
      <div className="pt-6 px-4">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between text-sm text-white/50 mb-2">
            <span>
              {state.currentQuestionIndex + 1} of {state.questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-green-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xl"
          >
            {/* Question text */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
            >
              {currentQuestion.text}
            </motion.h2>

            {/* Answer options */}
            <div className="space-y-3">
              {currentQuestion.answers.map((answer, index) => (
                <WrapAnswerOption
                  key={answer.id}
                  answer={answer}
                  index={index}
                  disabled={isTransitioning}
                  onSelect={() =>
                    handleAnswer(
                      currentQuestion.id,
                      answer.points,
                      answer.statModifiers
                    )
                  }
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="pb-8 text-center"
      >
        <p className="text-sm text-white/30">
          Be honest. Your Spotify already knows too much about you.
        </p>
      </motion.div>
    </div>
  );
}

export default WrapQuiz;
