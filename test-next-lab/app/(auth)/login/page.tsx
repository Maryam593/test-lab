"use client";

import MouseEffectCard from "@/components/kokonutui/mouse-effect-card";
export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  dark:bg-black">
      <MouseEffectCard  title="Already a member" footerText="If you get bored from us! please remember us in your prayers" primaryCtaText="Login" primaryCtaUrl="/">
        <form>
          <input type="email" className=" bg-black text-white rounded-2xl pl-5 pt-2 pb-1"></input>
          <div className="flex flex-row gap-2 mt-3 ml-3">
            <input type="checkbox" name="remember" id="remember" />
            <p>remember me?</p>
          </div>
        </form>
      </MouseEffectCard>
    </div>
  );
}   