"use client";
import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 text-yellow-400 drop-shadow-md">
          À propos de moi
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl">
          Je suis étudiant en troisième année à l’<strong>ENI</strong>, passionné par le développement web et
          backend en <strong>Java</strong>. J’ai déjà effectué un stage au <strong>Centre Fiscal B</strong> et je suis actuellement à la recherche
          d’un nouvel apprentissage afin de <strong>valider mon diplôme</strong> dans un environnement professionnel stimulant.
        </p>
      </div>
    </section>
  );
}
