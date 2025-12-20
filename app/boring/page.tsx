"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

const boringTips = [
  {
    title: "10 Ways to Maintain Your Suspicious Positivity",
    description: "Because nothing says 'mentally healthy' like loving Monday mornings.",
  },
  {
    title: "How to Be Even MORE Enthusiastic About Synergy",
    description: "Level up your corporate buzzword game to truly transcendent levels.",
  },
  {
    title: "The Art of Unironic LinkedIn Posting",
    description: "Master the humble brag and the 'grateful for this opportunity' post.",
  },
  {
    title: "Why Reply-All Is Actually Your Friend",
    description: "Spread the joy of unnecessary emails to everyone you know.",
  },
];

export default function BoringPage() {
  return (
    <div className="min-h-screen gradient-boring flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-6 px-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-gray-600 hover:text-gray-800 transition-colors">
            Do I Love My Job?
          </Link>
          <Link
            href="/quiz"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Take Quiz Again
          </Link>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="flex-1 px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <GlassCard variant="subtle" padding="lg">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="text-5xl mb-4"
              >
                🌟
              </motion.div>
              <h1 className="text-3xl font-bold text-gray-700 mb-3">
                Welcome, Corporate Optimist!
              </h1>
              <p className="text-gray-500 text-lg">
                {"Since you apparently love your job, here's some content that matches your suspiciously positive energy."}
              </p>
            </GlassCard>
          </motion.div>

          {/* "Inspiring" content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-xl font-semibold text-gray-600 text-center mb-6">
              Recommended Reading for You
            </h2>

            {boringTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <GlassCard variant="subtle" padding="md" className="hover:bg-white/50 transition-colors cursor-pointer">
                  <h3 className="font-medium text-gray-700 mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-500">{tip.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* LinkedIn-style quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <GlassCard variant="default" padding="lg" className="text-center border-l-4 border-blue-400">
              <p className="text-gray-600 italic text-lg mb-3">
                {'"Your attitude determines your altitude. Rise and grind! Also, I just got promoted. Humble. Blessed. Grateful."'}
              </p>
              <p className="text-sm text-gray-500">
                — Every LinkedIn Post Ever
              </p>
            </GlassCard>
          </motion.div>

          {/* Secret escape hatch */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <GlassCard variant="elevated" padding="lg">
              <p className="text-gray-500 mb-4">
                Psst... between you and me, are you{" "}
                <span className="italic">really</span> this positive?
              </p>
              <p className="text-gray-400 text-sm mb-6">
                {"Maybe you were just having a good day. Or you're really good at compartmentalizing. Either way, the fun side is just one click away."}
              </p>
              <Link href="/quiz">
                <Button variant="secondary" size="md">
                  Fine, Let Me Try Again
                </Button>
              </Link>
            </GlassCard>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pb-6 text-center"
      >
        <p className="text-sm text-gray-400">
          This is the boring side. The fun side has games. Just saying.
        </p>
      </motion.footer>
    </div>
  );
}
