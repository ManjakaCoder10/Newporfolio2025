"use client";
import React from 'react';
import Image from 'next/image';

const projects = [
  { title: 'Portfolio Next.js', img: '/projet1.png', link: 'https://github.com/ManjakaCoder10/Newporfolio2025' },
  { title: 'TransfereoApp', img: '/projet3.png', link: 'https://github.com/ManjakaCoder10/Transfereo_APP-web_desktop' },
   { title: 'Flox Maximal ', img: '/projet2.png', link: '#' },
    { title: 'Gestion de projet', img: '/pr.png', link: 'https://github.com/ManjakaCoder10/Gestion_project' },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-16 tracking-tight text-yellow-400 drop-shadow-md">
          Mes Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj) => (
            <a
              key={proj.title}
              href={proj.link}
              className="group bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl hover:scale-[1.015] transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gray-900">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition">
                  {proj.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
