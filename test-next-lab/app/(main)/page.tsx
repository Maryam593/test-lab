"use client";
import ShapeHero from "@/components/kokonutui/shape-hero";
import { motion } from "framer-motion";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black scroll-smooth">
      <main className="flex flex-col w-full bg-white dark:bg-black">
        
        {/* Hero Section */}
        <section id="home" className="w-full min-h-screen">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <ShapeHero />
          </motion.div>
        </section>
        <section id="AboutPage" className="w-full min-h-screen pt-20 overflow-hidden"> 
      
            <AboutPage />
        </section>

      </main>
    </div>
  );
}