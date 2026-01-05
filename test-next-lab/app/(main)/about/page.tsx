"use client";

import ParticleButton from "@/components/kokonutui/particle-button";
import Step from "@/components/step";

const AboutPage = () => {
  return(<><div className=" flex flex-col items-center justify-center">
    
   <h1 className="bg-green-700">How it Works</h1>
   <span className=" bg-amber-500">Your Financial Investment Solution.</span>
    </div>

    <div className="grid bg-fuchsia-700 grid-cols-2 gap-4 p-4">
       <div>
        <h1>How PropStake
Works</h1><p>Invest in curated real estate opportunities through a simple, transparent process. From account setup to returns tracking, everything is designed to be easy and secure.</p>
<ParticleButton className="mt-2 rounded-3xl w-[150px]">Get Started</ParticleButton>
       </div>
       <div>
        <Step name={"01"} title = {"Explore Investments"} description={"Browse curated property opportunities with data and visuals."} />
        <Step name={"02"} title={"Analyze & Decide"} description={"Use our AI-driven tools to see ROI, risk, and growth forecasts."}
         />
        <Step name={"03"} title={"Invest & Monitor"} description={"Stake your capital, and track performance via dashboard."} />
        <Step name={"04"} title={"Earn & Exit"} description={"Stake your capital, and track performance via dashboard."} />
       </div>
    </div>
    </>)
}

export default AboutPage;