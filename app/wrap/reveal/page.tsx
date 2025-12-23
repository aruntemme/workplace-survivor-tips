"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { WrapStats } from "@/lib/wrap/types";
import { WrapContainer } from "@/components/wrap/WrapContainer";
import { WRAP_YEAR } from "@/lib/wrap/constants";

export default function WrapRevealPage() {
  const router = useRouter();
  const [stats, setStats] = useState<WrapStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get stats from sessionStorage
    const storedStats = sessionStorage.getItem("wrapStats");

    if (storedStats) {
      try {
        const parsedStats = JSON.parse(storedStats) as WrapStats;
        setStats(parsedStats);
      } catch {
        // Invalid stats, redirect to quiz
        router.push("/wrap/quiz");
      }
    } else {
      // No stats found, redirect to quiz
      router.push("/wrap/quiz");
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen wrap-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-green-500/30 border-t-green-500"
          />
          <p className="text-white/60">Loading your {WRAP_YEAR} wrap...</p>
        </motion.div>
      </div>
    );
  }

  if (!stats) {
    return null; // Will redirect
  }

  return <WrapContainer stats={stats} />;
}
