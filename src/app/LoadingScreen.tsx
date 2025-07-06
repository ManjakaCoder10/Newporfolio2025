"use client";
import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-yellow-400 z-50">
      <div className="w-20 h-20 border-[5px] border-yellow-400 border-t-transparent rounded-full animate-spin shadow-md mb-6"></div>

      <h1 className="text-2xl font-extrabold tracking-widest uppercase animate-pulse">
        Mon Portfolio
      </h1>

      <p className="mt-2 text-sm text-gray-300 text-center px-6">
        Fanomezantsoa Manjaka – Développeur Fullstack JavaScript
      </p>

      <p className="mt-1 text-xs text-gray-400 italic">
        Création. Performance. Élégance.
      </p>
    </div>
  );
}

