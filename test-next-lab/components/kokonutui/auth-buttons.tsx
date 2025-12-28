"use client";

import ParticleButton from "@/components/kokonutui/particle-button";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <ParticleButton
        variant="outline"
        size="sm"
        onSuccess={() => {
          console.log("Login clicked");
        }}
      >
        Login
      </ParticleButton>

      <ParticleButton
        variant="default"
        size="sm"
        successDuration={1200}
        onSuccess={() => {
          console.log("Signup clicked");
        }}
      >
        Sign Up
      </ParticleButton>
    </div>
  );
};

export default AuthButtons;
