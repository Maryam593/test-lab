"use client";

import ParticleButton from "@/components/kokonutui/particle-button";

const AboutPage = () => {
  return(<><div className=" flex flex-col items-center justify-center">
    
   <h1 className="bg-green-700">How it Works</h1>
   <span className=" bg-amber-500">Your Financial Investment Solution.</span>
    </div>
    <div className="flex justify-between flex-row">
        <div className="bg-red-600"><h1>How PropStake
Works</h1>
<p>Invest in curated real estate opportunities through a simple, transparent process. From account setup to returns tracking, everything is designed to be easy and secure.</p>
<ParticleButton>Get Started</ParticleButton>
</div>
        <div className="bg-blue-800">
            #chart
        </div>

    </div>
    </>)
}

export default AboutPage;