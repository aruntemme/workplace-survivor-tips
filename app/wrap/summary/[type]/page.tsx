"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { WrapStats, WrapPersonaType } from "@/lib/wrap/types";
import { WrapSummary } from "@/components/wrap/WrapSummary";
import { WRAP_YEAR } from "@/lib/wrap/constants";

const validPersonas: WrapPersonaType[] = [
  "chart-topper",
  "one-hit-wonder",
  "b-side",
  "cover-artist",
  "leaked-album",
  "underground-hit",
];

export default function WrapSummaryPage() {
  const router = useRouter();
  const params = useParams();
  const [stats, setStats] = useState<WrapStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const personaType = params.type as string;

    // Validate persona type
    if (!validPersonas.includes(personaType as WrapPersonaType)) {
      router.push("/wrap");
      return;
    }

    // Get stats from sessionStorage
    const storedStats = sessionStorage.getItem("wrapStats");

    if (storedStats) {
      try {
        const parsedStats = JSON.parse(storedStats) as WrapStats;
        // Verify the persona matches the URL
        if (parsedStats.persona === personaType) {
          setStats(parsedStats);
        } else {
          // Mismatch, redirect to quiz
          router.push("/wrap/quiz");
        }
      } catch {
        router.push("/wrap/quiz");
      }
    } else {
      // No stats, redirect to quiz
      router.push("/wrap/quiz");
    }

    setLoading(false);
  }, [router, params.type]);

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
          <p className="text-white/60">Loading your {WRAP_YEAR} summary...</p>
        </motion.div>
      </div>
    );
  }

  if (!stats) {
    return null; // Will redirect
  }

  return <WrapSummary stats={stats} />;
}
