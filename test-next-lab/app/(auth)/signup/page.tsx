"use client";

import MouseEffectCard from "@/components/kokonutui/mouse-effect-card";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black dark:bg-black">
      <MouseEffectCard title="Create an account" footerText="Not a member? Sign up here" primaryCtaText="Sign Up" primaryCtaUrl="/l">
        <form action="post">
          <div className="flex flex-row justify-between">
            <input type="text" className=" bg-black text-white rounded-2xl pl-5 pt-2 pb-1" name="fname" id="fname" placeholder="enter your first name" />
            <input type="text" className=" bg-black text-white rounded-2xl pl-5 pt-2 pb-1" name="lname" id="lname" placeholder="enter your last name" />
          </div>
          <input type="email" className=" bg-black text-white rounded-2xl pl-5 pt-2 pb-1" placeholder="enter you email"></input>
          <div className="flex flex-row gap-2 mt-3 ml-3">
            <input type="password" className = " bg-black text-white rounded-2xl pl-5 pt-2 pb-1" name="password" id="password" placeholder="enter your password" />
            <input type="checkbox" className = " bg-black text-white rounded-2xl pl-5 pt-2 pb-1" name="forgetP" id="forgetP" />
            <a className="auth/forgetPassword">Forget Password?</a>
          </div>
        </form>
      </MouseEffectCard>
    </div>
  );
}   