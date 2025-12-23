"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface StoryProgressProps {
  total: number;
  current: number;
  className?: string;
}

export function StoryProgress({ total, current, className }: StoryProgressProps) {
  return (
    <div className={cn("flex gap-1.5 px-4", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden"
        >
          {index < current ? (
            // Completed segment
            <div className="h-full w-full bg-white rounded-full" />
          ) : index === current ? (
            // Current segment (animating)
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default StoryProgress;
