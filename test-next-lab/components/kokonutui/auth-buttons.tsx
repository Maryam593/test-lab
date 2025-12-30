"use client";

import ParticleButton from "@/components/kokonutui/particle-button";
import Link from "next/link";
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
        <Link href="/login">Login</Link>
      </ParticleButton>

      <ParticleButton
        variant="default"
        size="sm"
        successDuration={1200}
        onSuccess={() => {
          console.log("Signup clicked");
        }}
      >
        <Link href="/signup">Sign Up</Link>
      </ParticleButton>
    </div>
  );
};

export default AuthButtons;
