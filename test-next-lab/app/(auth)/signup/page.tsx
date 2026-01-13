"use client";

import MouseEffectCard from "@/components/kokonutui/mouse-effect-card";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <MouseEffectCard
        title="Create an account"
        subtitle="" // Subtitle khali rakhein taake extra text na aaye
        topText="" // Top text bhi khali kar dein
        footerText="Already a member? Login here"
        primaryCtaText="Sign Up"
        primaryCtaUrl="/"
        className="max-w-[450px] max-h-[700px]" // Card ki width thodi barhadi
      >
        <form
         className="flex flex-col gap-4  w-full px-4 relative z-20"  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      password: (form.elements.namedItem("password") as HTMLInputElement).value
    };

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.error);
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }}>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-zinc-900/80 border border-white/10 text-white rounded-2xl px-2 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-zinc-900/80 border border-white/10 text-white rounded-2xl px-2 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-zinc-900/80 border border-white/10 text-white rounded-2xl px-2 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-zinc-900/80 border border-white/10 text-white rounded-2xl px-2 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
          />

          {/* Checkbox & Forgot Password */}
          <div className="flex items-center justify-end">
        
            <a
              href="/forgetPassword"
              className="text-blue-500 text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Forget Password?
            </a>
          </div>
        </form>
      </MouseEffectCard>
    </div>
  );
}