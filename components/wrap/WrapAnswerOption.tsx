"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { WrapAnswer } from "@/lib/wrap/types";

interface WrapAnswerOptionProps {
  answer: WrapAnswer;
  onSelect: () => void;
  index: number;
  disabled?: boolean;
}

export function WrapAnswerOption({
  answer,
  onSelect,
  index,
  disabled = false,
}: WrapAnswerOptionProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      whileHover={
        disabled
          ? undefined
          : { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }
      }
      whileTap={disabled ? undefined : { scale: 0.98 }}
      onClick={onSelect}
      disabled={disabled}
      className={cn(
        "w-full text-left",
        "p-4 md:p-5",
        "rounded-2xl",
        "bg-white/5 hover:bg-white/15",
        "backdrop-blur-sm",
        "border border-white/10 hover:border-white/20",
        "shadow-sm hover:shadow-lg",
        "transition-all duration-200",
        "text-white",
        "group",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Answer letter indicator */}
        <span
          className={cn(
            "flex-shrink-0",
            "w-7 h-7",
            "rounded-full",
            "bg-gradient-to-br from-green-500/20 to-green-600/20",
            "border border-green-500/30",
            "flex items-center justify-center",
            "text-sm font-medium text-green-400",
            "group-hover:from-green-500/30 group-hover:to-green-600/30",
            "group-hover:border-green-400/50",
            "transition-all duration-200"
          )}
        >
          {String.fromCharCode(65 + index)}
        </span>

        {/* Answer text */}
        <span className="flex-1 text-base md:text-lg leading-relaxed">
          {answer.text}
        </span>
      </div>

      {/* Subtle vibe indicator on hover */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileHover={{ opacity: 1, height: "auto" }}
        className="mt-2 ml-10 text-xs text-green-400/70 italic overflow-hidden"
      >
        {answer.vibe}
      </motion.div>
    </motion.button>
  );
}

export default WrapAnswerOption;
