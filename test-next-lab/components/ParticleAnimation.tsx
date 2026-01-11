"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function DotToDotBG() {
  const particlesInit = async (main:any) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0 pointer-events-none"
      options={{
        background: { color: "#000" },
        fpsLimit: 60,
        particles: {
          number: { value: 90, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.6 },
          size: { value: 2, random: true },
          links: {
            enable: true,
            distance: 140,
            color: "#fff",
            opacity: 0.3,
            width: 1
          },
          move: { enable: true, speed: 1.3, outModes: "out" }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 160, links: { opacity: 0.6 } } }
        },
        detectRetina: true
      }}
    />
  );
}
