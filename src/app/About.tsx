"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const sentences = [
  "Actuellement en M1 à l’ENI, passionné par le développement mobile, web et desktop.",
  "Je réalise des projets innovants, multi-plateformes et adaptés aux besoins utilisateurs.",
  "Motivé à relever de nouveaux défis dans un environnement stimulant et collaboratif.",
];

// Typage de variants pour framer-motion
const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-10 text-yellow-400 drop-shadow-md"
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          À propos de moi
        </motion.h2>

        <div
          className="text-lg text-gray-300 leading-relaxed bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl inline-block text-left"
        >
          {sentences.map((sentence, idx) => (
            <p
              key={idx}
              className="mb-6 flex flex-wrap justify-center sm:justify-start"
            >
              {sentence.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="mr-2 whitespace-nowrap"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
