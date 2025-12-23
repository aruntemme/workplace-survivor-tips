"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { NumberCounter } from "./NumberCounter";

interface StatRevealCardProps {
  gradient?: string;
  children: React.ReactNode;
  className?: string;
}

export function StatRevealCard({
  gradient = "wrap-stat-gradient-1",
  children,
  className,
}: StatRevealCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "w-full max-w-md mx-auto",
        "p-8 rounded-3xl",
        gradient,
        "text-white text-center",
        "shadow-2xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// Pre-built stat slide components

interface ManagerPlayedYouProps {
  timesLoopedIn: number;
  timesNeeded: number;
}

export function ManagerPlayedYouSlide({
  timesLoopedIn,
  timesNeeded,
}: ManagerPlayedYouProps) {
  return (
    <StatRevealCard gradient="wrap-stat-gradient-2">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-white/80 mb-4"
      >
        Your manager played you
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-white/80 mb-8"
      >
        more than Spotify played your top artist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="space-y-4"
      >
        <div>
          <div className="text-5xl font-bold">
            <NumberCounter value={timesLoopedIn} />
          </div>
          <div className="text-sm text-white/60">Times looped in</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white/80">
            <NumberCounter value={timesNeeded} />
          </div>
          <div className="text-sm text-white/60">Times your input mattered</div>
        </div>
      </motion.div>
    </StatRevealCard>
  );
}

interface MeetingGenreProps {
  hours: number;
  couldBeEmails: number;
}

export function MeetingGenreSlide({ hours, couldBeEmails }: MeetingGenreProps) {
  return (
    <StatRevealCard gradient="wrap-stat-gradient-1">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-white/80 mb-2"
      >
        Your meeting calendar genre:
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="text-2xl font-bold mb-8"
      >
        ✦ CORPORATE ELEVATOR MUSIC ✦
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-3 text-left"
      >
        <div className="flex justify-between">
          <span className="text-white/70">Hours in meetings:</span>
          <span className="font-bold">
            <NumberCounter value={hours} />
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/70">Could&apos;ve been emails:</span>
          <span className="font-bold">
            <NumberCounter value={couldBeEmails} />
          </span>
        </div>
      </motion.div>
    </StatRevealCard>
  );
}

interface EmailSkipRateProps {
  skipRate: number;
}

export function EmailSkipRateSlide({ skipRate }: EmailSkipRateProps) {
  return (
    <StatRevealCard gradient="wrap-stat-gradient-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-white/80 mb-2"
      >
        If emails were songs,
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-white/80 mb-8"
      >
        your skip rate would be:
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="text-7xl font-bold mb-4"
      >
        <NumberCounter value={skipRate} suffix="%" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-sm text-white/50"
      >
        Very selective listener energy.
      </motion.p>
    </StatRevealCard>
  );
}

interface CompensationRemixProps {
  inflation: number;
  raise: number;
}

export function CompensationRemixSlide({
  inflation,
  raise,
}: CompensationRemixProps) {
  const difference = inflation - raise;
  const isPositive = raise >= inflation;

  return (
    <StatRevealCard gradient="wrap-stat-gradient-3">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-bold mb-8"
      >
        COMPENSATION REMIX
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-4 mb-8"
      >
        <div className="flex justify-between text-lg">
          <span>Inflation:</span>
          <span className="font-bold">{inflation}%</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Your raise:</span>
          <span className="font-bold">{raise}%</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="p-4 bg-black/20 rounded-xl"
      >
        <p className="text-lg">
          {isPositive ? (
            <>You actually beat inflation. Rare W.</>
          ) : (
            <>
              You are now{" "}
              <span className="font-bold">{difference.toFixed(1)}%</span> poorer
              for being exactly as good at your job.
            </>
          )}
        </p>
        <p className="text-sm text-white/50 mt-2">
          That&apos;s not how remixes should work.
        </p>
      </motion.div>
    </StatRevealCard>
  );
}

interface BossFightsProps {
  bosses: string[];
}

export function BossFightsSlide({ bosses }: BossFightsProps) {
  const statusEmojis = ["🐉", "⚔️", "💀", "🔥"];

  return (
    <StatRevealCard gradient="wrap-stat-gradient-1">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-bold mb-6"
      >
        BOSS FIGHTS SURVIVED
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-3 text-left mb-6"
      >
        {bosses.map((boss, index) => (
          <motion.div
            key={boss}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.2 }}
            className="flex items-center gap-3"
          >
            <span>{statusEmojis[index % statusEmojis.length]}</span>
            <span>{boss}</span>
            <span className="text-green-400 ml-auto text-sm">SURVIVED</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, type: "spring" }}
        className="p-3 bg-yellow-500/20 rounded-lg"
      >
        <span className="text-lg">🏆 Achievement: STILL HERE</span>
      </motion.div>
    </StatRevealCard>
  );
}

interface TopPhrasesProps {
  phrases: Array<{ phrase: string; count: number }>;
}

export function TopPhrasesSlide({ phrases }: TopPhrasesProps) {
  return (
    <StatRevealCard gradient="wrap-stat-gradient-2">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-bold mb-6"
      >
        Your most-played phrases:
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-4 text-left"
      >
        {phrases.map((item, index) => (
          <motion.div
            key={item.phrase}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.2 }}
            className="flex justify-between items-center"
          >
            <span className="text-white/90">&ldquo;{item.phrase}&rdquo;</span>
            <span className="text-white/60">
              × <NumberCounter value={item.count} />
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-6 text-sm text-white/50 italic"
      >
        (You couldn&apos;t. You did anyway.)
      </motion.p>
    </StatRevealCard>
  );
}

interface HPReportProps {
  hpRemaining: number;
}

export function HPReportSlide({ hpRemaining }: HPReportProps) {
  const maxHP = 10;
  const emptyHP = maxHP - hpRemaining;

  return (
    <StatRevealCard gradient="wrap-stat-gradient-3">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-bold mb-6"
      >
        HP STATUS
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-4 mb-6"
      >
        <div className="text-left">
          <span className="text-white/70">Start of year: </span>
          <span className="text-2xl">{"❤️".repeat(maxHP)}</span>
        </div>
        <div className="text-left">
          <span className="text-white/70">End of year: </span>
          <span className="text-2xl">
            {"❤️".repeat(hpRemaining)}
            {"🖤".repeat(emptyHP)}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-2 text-sm text-white/60"
      >
        <p>Primary damage source: Meetings</p>
        <p>Critical healing needed: Vacation</p>
      </motion.div>
    </StatRevealCard>
  );
}

export default StatRevealCard;
