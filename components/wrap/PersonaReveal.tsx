"use client";

import { motion } from "framer-motion";
import { WrapStats } from "@/lib/wrap/types";
import { getPersona } from "@/lib/wrap/personas";
import { WRAP_YEAR } from "@/lib/wrap/constants";

interface PersonaRevealProps {
  stats: WrapStats;
}

export function PersonaReveal({ stats }: PersonaRevealProps) {
  const persona = getPersona(stats.persona);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-white/60 mb-4"
      >
        Based on your {WRAP_YEAR}...
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-white/80 mb-8"
      >
        You are:
      </motion.p>

      {/* Dramatic persona reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className={`p-8 rounded-3xl ${persona.gradient} shadow-2xl mb-6`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-6xl mb-4"
        >
          {persona.emoji}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-2"
        >
          {persona.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="text-lg text-white/80 italic"
        >
          &ldquo;{persona.tagline}&rdquo;
        </motion.p>
      </motion.div>

      {/* Persona description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-white/60 text-sm max-w-sm mx-auto"
      >
        {persona.description}
      </motion.p>
    </motion.div>
  );
}

export default PersonaReveal;
