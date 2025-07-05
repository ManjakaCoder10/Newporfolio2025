"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden flex items-center justify-center px-6 py-16">
      {/* Animation circle glow */}
      <div className="absolute -top-20 -left-20 w-[30rem] h-[30rem] bg-yellow-400 opacity-20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>

      {/* Contenu */}
      <div className="z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-6xl w-full">
        {/* Texte animé */}
        <div className="text-center lg:text-left space-y-8 backdrop-blur-md bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl animate-fade-in-up">
          <h1 className="text-6xl font-extrabold uppercase leading-tight drop-shadow-sm tracking-tight">
            Salut, je suis <span className="text-yellow-400">Manjaka</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-200">
            Développeur Fullstack passionné par <strong>React</strong>, <strong>Next.js</strong> et <strong>Tailwind CSS</strong>. Je conçois des expériences élégantes et performantes.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg rounded-xl transition duration-300 shadow-lg animate-bounce"
          >
            Contactez-moi
          </a>
        </div>

        {/* Image animée */}
        <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 hover:scale-105 transition-transform duration-300 animate-zoom-in">
          <Image
            src="/imagehero.jpg"
            alt="Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Animations CSS directement ici */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-zoom-in {
          animation: zoomIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
