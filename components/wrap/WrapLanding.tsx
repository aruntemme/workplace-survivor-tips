"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WRAP_YEAR, WRAP_TAGLINE } from "@/lib/wrap/constants";

export function WrapLanding() {
  return (
    <div className="min-h-screen wrap-bg flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Year badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm font-medium border border-white/10">
            {WRAP_YEAR} Edition
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Your{" "}
          <span className="wrap-text-gradient">{WRAP_YEAR}</span>
          <br />
          Work Wrapped
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 mb-8"
        >
          {WRAP_TAGLINE}
        </motion.p>

        {/* Hook text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-white/40 mb-12 max-w-md mx-auto"
        >
          Your manager played you more than your top Spotify artist.
          <br />
          Let&apos;s see the receipts.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/wrap/quiz">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-lg transition-colors shadow-lg shadow-green-500/25"
            >
              Unwrap My Year
            </motion.button>
          </Link>
        </motion.div>

        {/* Teaser stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-4 text-center"
        >
          <div className="p-4 rounded-xl wrap-glass">
            <div className="text-2xl font-bold text-white">247</div>
            <div className="text-xs text-white/50">Times Looped In</div>
          </div>
          <div className="p-4 rounded-xl wrap-glass">
            <div className="text-2xl font-bold text-white">94%</div>
            <div className="text-xs text-white/50">Email Skip Rate</div>
          </div>
          <div className="p-4 rounded-xl wrap-glass">
            <div className="text-2xl font-bold text-white">2/10</div>
            <div className="text-xs text-white/50">HP Remaining</div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-sm text-white/30"
        >
          6 quick questions. Results may cause existential reflection.
        </motion.p>
      </div>
    </div>
  );
}

export default WrapLanding;
