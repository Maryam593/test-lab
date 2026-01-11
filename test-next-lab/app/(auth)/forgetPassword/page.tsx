"use client";

import MouseEffectCard from "@/components/kokonutui/mouse-effect-card";

const ForgetPassword = () => {
  return <div className="flex min-h-screen  bg-black flex-col items-center justify-center  dark:bg-black">
 <MouseEffectCard title="Reset your password" footerText="Remembered your password? Login here" primaryCtaText="Reset Password" primaryCtaUrl="/login">
  <form action="post" className="flex flex-col gap-4 mt-4">
    <input type="password" name="oldPassword" id="oldPassword" placeholder="Enter your old password" className=" bg-black text-white rounded-2xl pl-5 pt-2 pb-1" />
    <input type="password" name="newPassword" id="newPassword" placeholder="Enter your new password" className=" bg-black text-white rounded-2xl pl-5 pt-2 pb-1" />
  </form>
  </MouseEffectCard>
  </div>;
} 

export default ForgetPassword;