"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { WRAP_YEAR } from "@/lib/wrap/constants";

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      {/* Work Wrap Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[#121212] to-[#1a1a2e] text-white py-3 px-4"
      >
        <Link href="/wrap" className="block max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className="text-green-400 font-bold">NEW</span>
            <span>
              Work Wrap {WRAP_YEAR} is here! Your year in corporate, quantified.
            </span>
            <span className="text-green-400">→</span>
          </div>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-6 px-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-700">
            Do I Love My Job?
          </span>
          <Link
            href="/about"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            About
          </Link>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard variant="elevated" padding="xl" className="text-center">
              {/* Emoji decoration */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3, stiffness: 200 }}
                className="text-5xl mb-6"
              >
                🏢
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight"
              >
                {"Let's find out if you love your job..."}
                <span className="block text-2xl md:text-3xl text-gray-600 font-medium mt-2">
                  {"or if you're just really good at pretending"}
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 mb-8"
              >
                5 questions. 2 minutes. The truth about your workplace survival
                level.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <Link href="/quiz">
                  <Button size="lg" className="float">
                    Begin the Vibe Check
                  </Button>
                </Link>
              </motion.div>

              {/* Disclaimer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-gray-500"
              >
                {"Based on your answers, we'll show you the internet you deserve."}
              </motion.p>
            </GlassCard>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm flex-wrap">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                No data stored
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                100% satire
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                HR-safe to share
              </span>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="pb-6 text-center"
      >
        <p className="text-sm text-gray-500">
          The website your HR department hopes you never find
        </p>
      </motion.footer>
    </div>
  );
}
