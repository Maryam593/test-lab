"use client";

import MouseEffectCard from "@/components/kokonutui/mouse-effect-card";

const ForgetPassword = () => {
  return <div>
 <MouseEffectCard title="Reset your password" footerText="Remembered your password? Login here" primaryCtaText="Reset Password" primaryCtaUrl="/login">
  <form action="post">
    <input type="password" name="oldPassword" id="oldPassword" placeholder="Enter your old password" />
    <input type="password" name="newPassword" id="newPassword" placeholder="Enter your new password" />
  </form>
  </MouseEffectCard>
  </div>;
} 

export default ForgetPassword;