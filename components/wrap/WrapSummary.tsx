"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WrapStats } from "@/lib/wrap/types";
import { getPersona } from "@/lib/wrap/personas";
import { WRAP_YEAR, WRAP_TITLE } from "@/lib/wrap/constants";
import { NumberCounter } from "./NumberCounter";
import { ShareButtons } from "./ShareCard";

interface WrapSummaryProps {
  stats: WrapStats;
}

function getPersonaSpecificContent(stats: WrapStats) {
  const { personaStats } = stats;

  switch (personaStats.type) {
    case "chart-topper":
      return (
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-white/70">Projects shipped</span>
            <span className="font-bold text-green-400">
              {personaStats.projectsShipped}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Recognition received</span>
            <span className="font-bold text-green-400">
              {personaStats.recognitionReceived}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Positive reviews</span>
            <span className="font-bold text-green-400">
              {personaStats.positiveReviews}
            </span>
          </div>
        </div>
      );

    case "one-hit-wonder":
      return (
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-white/70">Peak quarter</span>
            <span className="font-bold text-yellow-400">
              {personaStats.peakQuarter}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Weeks coasting since</span>
            <span className="font-bold text-yellow-400">
              {personaStats.weeksCoastingSince}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Glory sustained</span>
            <span className="font-bold text-yellow-400">
              {personaStats.glorySustained}
            </span>
          </div>
        </div>
      );

    case "b-side":
      return (
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-white/70">Times went unnoticed</span>
            <span className="font-bold text-blue-400">
              {personaStats.timesWentUnnoticed}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Meetings skipped (success)</span>
            <span className="font-bold text-blue-400">
              {personaStats.meetingsSkippedSuccessfully}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Visibility score</span>
            <span className="font-bold text-blue-400">
              {personaStats.visibilityScore}
            </span>
          </div>
        </div>
      );

    case "cover-artist":
      return (
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-white/70">Others&apos; tasks completed</span>
            <span className="font-bold text-purple-400">
              {personaStats.otherPeoplesTasksCompleted}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Credit given</span>
            <span className="font-bold text-purple-400">
              {personaStats.creditGiven}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Credit received</span>
            <span className="font-bold text-red-400">
              {personaStats.creditReceived}
            </span>
          </div>
        </div>
      );

    case "leaked-album":
      return (
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-white/70">Job applications sent</span>
            <span className="font-bold text-orange-400">
              {personaStats.jobApplicationsSent}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Interview prep hours</span>
            <span className="font-bold text-orange-400">
              {personaStats.interviewPrepHours}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Resignation letter drafts</span>
            <span className="font-bold text-orange-400">
              {personaStats.resignationLetterDrafts}
            </span>
          </div>
        </div>
      );

    case "underground-hit":
      return (
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-white/70">LinkedIn lurk sessions</span>
            <span className="font-bold text-pink-400">
              {personaStats.linkedInLurkSessions}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Salary research queries</span>
            <span className="font-bold text-pink-400">
              {personaStats.salaryResearchQueries}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Secret skills built</span>
            <span className="font-bold text-pink-400">
              {personaStats.secretSkillsBuilt}
            </span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export function WrapSummary({ stats }: WrapSummaryProps) {
  const persona = getPersona(stats.persona);

  return (
    <div className="min-h-screen wrap-bg px-4 py-8">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-white/50 text-sm mb-2">{WRAP_TITLE}</p>
          <h1 className="text-3xl font-bold text-white mb-2">Your Summary</h1>
        </motion.div>

        {/* Persona Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-3xl ${persona.gradient} shadow-xl mb-6`}
        >
          <div className="text-center">
            <span className="text-5xl">{persona.emoji}</span>
            <h2 className="text-2xl font-bold text-white mt-3">
              {persona.title}
            </h2>
            <p className="text-white/80 italic">&ldquo;{persona.tagline}&rdquo;</p>
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl wrap-glass mb-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">
            Your {WRAP_YEAR} Stats
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-white/70">Times looped in</span>
              <span className="font-bold text-white">
                <NumberCounter value={stats.managerPlayedYou} />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Meeting hours</span>
              <span className="font-bold text-white">
                <NumberCounter value={stats.meetingHours} />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Email skip rate</span>
              <span className="font-bold text-white">{stats.emailSkipRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">HP remaining</span>
              <span className="font-bold text-white">
                {stats.hpRemaining}/10
              </span>
            </div>
          </div>
        </motion.div>

        {/* Persona-Specific Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl wrap-glass mb-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">
            {persona.title} Stats
          </h3>
          {getPersonaSpecificContent(stats)}
        </motion.div>

        {/* Top Phrases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl wrap-glass mb-8"
        >
          <h3 className="text-lg font-bold text-white mb-4">Top Phrases</h3>
          <div className="space-y-2 text-sm">
            {stats.topPhrases.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-white/70">&ldquo;{item.phrase}&rdquo;</span>
                <span className="text-white/50">× {item.count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Share section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-white/50 text-sm text-center">Share your results</p>
          <ShareButtons stats={stats} />

          <div className="pt-6 border-t border-white/10 mt-8 text-center">
            <Link
              href="/wrap/quiz"
              className="text-white/50 hover:text-white/70 text-sm transition-colors"
            >
              Take it again →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WrapSummary;
