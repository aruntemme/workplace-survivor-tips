"use client";

import { motion } from "framer-motion";
import { WrapStats } from "@/lib/wrap/types";
import { getPersona } from "@/lib/wrap/personas";
import { WRAP_YEAR, WRAP_URL } from "@/lib/wrap/constants";

interface ShareCardProps {
  stats: WrapStats;
  variant?: "persona" | "stats" | "achievement";
}

export function ShareCard({ stats, variant = "persona" }: ShareCardProps) {
  const persona = getPersona(stats.persona);

  if (variant === "stats") {
    return (
      <div className="w-80 p-6 rounded-2xl wrap-stat-gradient-2 text-white text-center">
        <p className="text-sm text-white/70 mb-2">MY {WRAP_YEAR} WORK WRAPPED</p>
        <div className="space-y-4 my-6">
          <div>
            <div className="text-4xl font-bold">{stats.managerPlayedYou}</div>
            <div className="text-xs text-white/60">Times looped in</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{stats.emailSkipRate}%</div>
            <div className="text-xs text-white/60">Email skip rate</div>
          </div>
        </div>
        <p className="text-xs text-white/50">{WRAP_URL}</p>
      </div>
    );
  }

  if (variant === "achievement") {
    return (
      <div className="w-80 p-6 rounded-2xl wrap-stat-gradient-1 text-white text-center">
        <p className="text-sm text-white/70 mb-4">MY {WRAP_YEAR} WORK WRAPPED</p>
        <div className="text-5xl mb-2">🏆</div>
        <p className="text-xl font-bold mb-1">ACHIEVEMENT UNLOCKED</p>
        <p className="text-2xl font-bold text-yellow-300">&ldquo;STILL HERE&rdquo;</p>
        <p className="text-sm text-white/60 mt-2">
          Survived another year of corporate.
        </p>
        <p className="text-xs text-white/60 mt-4">Rarity: Surprisingly Rare</p>
        <p className="text-xs text-white/50 mt-4">{WRAP_URL}</p>
      </div>
    );
  }

  // Default: persona card
  return (
    <div className={`w-80 p-6 rounded-2xl ${persona.gradient} text-white text-center`}>
      <p className="text-sm text-white/70 mb-4">MY {WRAP_YEAR} WORK WRAPPED</p>
      <div className="text-5xl mb-3">{persona.emoji}</div>
      <p className="text-sm text-white/70 mb-1">Work Persona:</p>
      <p className="text-2xl font-bold mb-2">{persona.title.toUpperCase()}</p>
      <p className="text-sm text-white/80 italic mb-4">
        &ldquo;{persona.tagline}&rdquo;
      </p>
      <p className="text-xs text-white/50">{WRAP_URL}</p>
    </div>
  );
}

interface ShareButtonsProps {
  stats: WrapStats;
}

export function ShareButtons({ stats }: ShareButtonsProps) {
  const persona = getPersona(stats.persona);
  const shareUrl = typeof window !== "undefined"
    ? `${window.location.origin}/wrap`
    : "";

  const shareText = `${persona.shareText}\n\nGet your Work Wrap:`;

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert("Copied to clipboard!");
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = `${shareText} ${shareUrl}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Copied to clipboard!");
    }
  };

  const handleTwitterShare = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(tweetUrl, "_blank");
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(linkedInUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-3"
    >
      <button
        onClick={handleTwitterShare}
        className="w-full px-6 py-3 rounded-full bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white font-medium transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Share on X
      </button>

      <button
        onClick={handleLinkedInShare}
        className="w-full px-6 py-3 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white font-medium transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        Share on LinkedIn
      </button>

      <button
        onClick={handleCopyToClipboard}
        className="w-full px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors flex items-center justify-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        Copy to Clipboard
      </button>
    </motion.div>
  );
}

export default ShareCard;
