"use client";
import ShapeHero from "@/components/kokonutui/shape-hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full  bg-white dark:bg-black sm:items-start">
        
         <motion.div className="w-full"><ShapeHero/></motion.div>
      </main>
      
    </div>
  );
}
