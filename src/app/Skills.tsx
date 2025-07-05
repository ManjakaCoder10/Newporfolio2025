"use client";
import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Avancé' },
  { name: 'React & Next.js', level: 'Intermédiaire' },
  { name: 'Tailwind CSS', level: 'Intermédiaire' },
  { name: 'MySQL/MariaDB', level: 'Intermédiaire' },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-16 tracking-tight text-yellow-400 drop-shadow-md">
          Compétences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-yellow-400/20 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-gray-300 text-sm tracking-wide">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
