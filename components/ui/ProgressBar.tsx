"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className={cn("w-full", className)}>
      {/* Question counter */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-500">
          {current} / {total}
        </span>
        <span className="text-xs text-gray-400">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Sleek progress bar */}
      <div className="h-1 w-full bg-black/5 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"
        />
      </div>
    </div>
  );
}

export default ProgressBar;
