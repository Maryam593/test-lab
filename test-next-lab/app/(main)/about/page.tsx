
// "use client";

// import ParticleButton from "@/components/kokonutui/particle-button";
// import Step from "@/components/step";
// import { motion } from "framer-motion";

// const AboutPage = () => {
//   return (
//     <div className="bg-white min-h-screen" id="AboutPage">
//       <div className="flex flex-col items-center justify-center py-10">
//         <h2 className="text-sm font-semibold text-emerald-800 uppercase tracking-widest">How it Works</h2>
//         <h1 className="text-3xl font-bold text-slate-800">Your Financial Investment Solution.</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10 max-w-7xl mx-auto items-center">
//         {/* Left Side */}
//         <div className="space-y-6">
//           <h1 className="text-5xl font-bold text-slate-900 leading-tight">
//             How PropStake <br /> Works
//           </h1>
//           <p className="text-slate-600 text-lg leading-relaxed">
//             Invest in curated real estate opportunities through a simple, transparent process. 
//             From account setup to returns tracking, everything is designed to be easy and secure.
//           </p>
//           <ParticleButton className="mt-4 rounded-full px-8 py-3 bg-emerald-700 text-white">
//             Get Started →
//           </ParticleButton>
//         </div>

//         {/* Right Side: Animated Path & Steps */}
//         <div className="relative h-[550px] w-full">
//           <svg
//             viewBox="0 0 500 400"
//             fill="none"
//             className="absolute inset-0 w-full h-full"
//             preserveAspectRatio="none"
//           >
//             {/* Background Static Path (Optional, for faint gray line) */}
//             <path
//               d="M50 350 C 150 350, 150 250, 300 200 C 400 150, 350 100, 450 50"
//               stroke="#E2E8F0"
//               strokeWidth="2"
//               strokeDasharray="8 8"
//             />
            
//             {/* Animated Path */}
//             <motion.path
//               d="M50 350 C 150 350, 150 250, 300 200 C 400 150, 350 100, 450 50"
//               stroke="#2F7F6F"
//               strokeWidth="3"
//               strokeDasharray="10 10"
//               initial={{ pathLength: 0, opacity: 0 }}
//               animate={{ pathLength: 1, opacity: 1 }}
//               whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, staggerChildren: 0.3, duration:3, ease: "easeInOut" }}
//             />
//           </svg>

//             <div className="absolute top-[93%] left-[5%] transform -translate-y-1/2">
//                <Step name="1" title="Explore Investments" description="Browse curated property." />
//             </div>

//             <div className="absolute top-[70%] left-[35%] transform -translate-y-1/2">
//                <Step name="2" title="Analyze & Decide" description="Use AI-driven tools." />
//             </div>

//             <div className="absolute top-[48%] left-[65%] transform -translate-y-1/2">
//                <Step name="3" title="Invest & Monitor" description="Stake your capital." />
//             </div>

//             <div className="absolute top-[20%] left-[87%] transform -translate-y-1/2">
//                <Step name="4" title="Earn & Exit" description="Track and exit." />
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

"use client";

import ParticleButton from "@/components/kokonutui/particle-button";
import Step from "@/components/step";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen -mt-[100px]">
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-sm font-semibold text-emerald-800 uppercase tracking-widest">How it Works</h2>
        <h1 className="text-3xl font-bold text-slate-800">Your Financial Investment Solution.</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 -mt-[50px] p-8 max-w-6xl mx-auto items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            How PropStake <br /> Works
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Invest in curated real estate opportunities through a simple, transparent process. 
            From account setup to returns tracking, everything is designed to be easy and secure.
          </p>
          <ParticleButton className="mt-4 rounded-full px-8 py-3 bg-emerald-800 text-white">
            Get Started →
          </ParticleButton>
        </div>

        {/* Right Side: Line Animated & Steps Static */}
        <div className="relative h-[570px] w-full">
          <svg
            viewBox="0 0 500 400"
            fill="none"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Background Gray Line (Optional) */}
            <path
              d="M50 350 C 150 350, 150 250, 300 200 C 400 150, 350 100, 450 50"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            
            {/* ONLY THIS LINE IS ANIMATED */}
            <motion.path
              d="M50 350 C 150 350, 150 250, 300 200 C 400 150, 350 100, 450 50"
              stroke="#2F7F6F"
              strokeWidth="3"
              strokeDasharray="10 10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Steps are now simple <div> (No motion/animation) */}
          <div className="absolute top-[93%] left-[5%] transform -translate-y-1/2">
             <Step name="1" title="Explore Investments" description="Browse curated property." />
          </div>

          <div className="absolute top-[70%] left-[35%] transform -translate-y-1/2">
             <Step name="2" title="Analyze & Decide" description="Use AI-driven tools." />
          </div>

          <div className="absolute top-[47%] left-[65%] transform -translate-y-1/2">
             <Step name="3" title="Invest & Monitor" description="Stake your capital." />
          </div>

          <div className="absolute top-[20%] left-[84%] transform -translate-y-1/2">
             <Step name="4" title="Earn & Exit" description="Track and exit." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;