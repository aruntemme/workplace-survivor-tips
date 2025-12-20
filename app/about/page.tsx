"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-6 px-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-gray-700 hover:text-gray-800 transition-colors">
            Do I Love My Job?
          </Link>
          <Link href="/quiz">
            <Button variant="secondary" size="sm">
              Take the Quiz
            </Button>
          </Link>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard variant="elevated" padding="xl">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-8"
              >
                <span className="text-4xl mb-4 block">📋</span>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  About Do I Love My Job?
                </h1>
                <p className="text-gray-500">
                  The website your HR department hopes you never find
                </p>
              </motion.div>

              {/* What is this */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                  What is this?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Do I Love My Job? is a satirical quiz that helps you understand
                  your current relationship with corporate life. It&apos;s meant to be
                  funny, relatable, and entirely harmless to share with your
                  colleagues (yes, even on LinkedIn).
                </p>
              </motion.section>

              {/* Important disclaimer */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-8 p-4 bg-purple-50 rounded-2xl"
              >
                <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Important Disclaimer
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is <strong>100% satire</strong>. We&apos;re not therapists,
                  career coaches, or HR professionals (thank goodness). The
                  results are meant to make you laugh, not to diagnose any
                  actual workplace conditions. If you&apos;re genuinely struggling
                  at work, please talk to a real professional.
                </p>
              </motion.section>

              {/* Privacy */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                  Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We don&apos;t store any of your quiz answers. Your workplace
                  frustration levels are between you and your browser. We use
                  basic analytics to see how many people take the quiz, but
                  that&apos;s it. No tracking, no accounts, no data mining.
                </p>
              </motion.section>

              {/* Credits */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                  Made With
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Framer Motion", "Caffeine", "Existential Dread", "Love"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/50 rounded-full text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.section>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <p className="text-gray-500 mb-4">
                  Ready to find out how you really feel about work?
                </p>
                <Link href="/quiz">
                  <Button size="lg">
                    Take the Vibe Check
                  </Button>
                </Link>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="pb-6 text-center"
      >
        <p className="text-sm text-gray-500">
          {"Built by someone who has sat through too many meetings that could've been emails."}
        </p>
      </motion.footer>
    </div>
  );
}
