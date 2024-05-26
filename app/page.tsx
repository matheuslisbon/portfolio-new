"use client"

import About from "./components/About";
import Header from "./components/Headers";
import Home from "./components/Home";
import { motion } from "framer-motion";
import { Parts } from "./components/Particles";
import Skills from "./components/Skills";
import { useEffect } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i:number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};


export default function Page() {
  useEffect(() => {
    scrollToTop()
  }, [])
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  
  return (
    <main>
      <Parts/>
      <Header />
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contact />
    </main>
  );
}
