"use client";

import ParticleButton from "@/components/kokonutui/particle-button";
import Step from "@/components/step";

const AboutPage = () => {
  return(<><div className=" flex flex-col items-center justify-center">
    
   <h1 className="bg-green-700">How it Works</h1>
   <span className=" bg-amber-500">Your Financial Investment Solution.</span>
    </div>
    {/* <div className="flex justify-between flex-row w-[50%]">
        <div className="bg-red-600"><h1>How PropStake
Works</h1>
<p>Invest in curated real estate opportunities through a simple, transparent process. From account setup to returns tracking, everything is designed to be easy and secure.</p>
<ParticleButton>Get Started</ParticleButton>
</div>
        <div className="bg-blue-800 w-[50%]">
            <div>
                <span>01</span>
                <p><h1>Explore Investments</h1>
                <br />Browse curated property opportunities with data and visuals.</p>
            </div>
             <div>
                <span>02</span>
                <p><h1>Explore Investments</h1>
                <br />Browse curated property opportunities with data and visuals.</p>
            </div>
             <div>
                <span>03</span>
                <p><h1>Explore Investments</h1>
                <br />Browse curated property opportunities with data and visuals.</p>
            </div>
             <div>
                <span>04</span>
                <p><h1>Explore Investments</h1>
                <br />Browse curated property opportunities with data and visuals.</p>
            </div>
        </div>

    </div> */}
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