"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiElectron,
  SiBootstrap,
  SiPhp,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";


const skills = [
  { name: "JavaScript", level: "Avancé", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
  { name: "React & Next.js", level: "Intermédiaire", icon: <SiReact className="w-8 h-8 text-blue-400" /> },
  { name: "Tailwind CSS", level: "Intermédiaire", icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" /> },
  { name: "MySQL/MariaDB", level: "Intermédiaire", icon: <SiMysql className="w-8 h-8 text-green-400" /> },
  { name: "Electron.js", level: "Intermédiaire", icon: <SiElectron className="w-8 h-8 text-indigo-400" /> },
  { name: "React Native", level: "Débutant", icon: <SiReact className="w-8 h-8 text-purple-400" /> },
  { name: "Bootstrap", level: "Intermédiaire", icon: <SiBootstrap className="w-8 h-8 text-pink-400" /> },
  { name: "Java Swing", level: "Intermédiaire", icon: <FaJava className="w-8 h-8 text-orange-400" /> },
  { name: "PHP", level: "Débutant", icon: <SiPhp className="w-8 h-8 text-violet-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-16 tracking-tight text-yellow-400 drop-shadow-md">
          Compétences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-yellow-400/20 transition duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-gray-300 text-sm tracking-wide">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
