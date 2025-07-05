"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import LoadingScreen from "./LoadingScreen";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement (ex: fetch API, etc.)
    const timer = setTimeout(() => setLoading(false), 3000); // 3 secondes

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Navbar />
      <div className="pt-16">{/* pour éviter que le menu fixe cache le contenu */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
