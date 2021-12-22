import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero"

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-800 body-font">
      <Navbar />
      <Hero/>
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}