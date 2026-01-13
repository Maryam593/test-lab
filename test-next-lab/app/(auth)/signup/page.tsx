"use client";

import MouseEffectCard from "@/components/kokonutui/mouse-effect-card";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        alert("Error: " + (result.error || "Signup failed"));
      } else {
        alert("Account created successfully! 🎉");
        router.push("/"); // Successful signup par navigate karein
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Check console.");
      router.push('/login')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <MouseEffectCard
        title="Create an account"
        footerText="Already a member? Login here"
        className="max-w-[450px] w-full"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full px-4 relative z-20 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              required
              placeholder="First Name"
              className="w-full bg-zinc-900/80 border border-white/10 text-white rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
            />
            <input
              name="lastName"
              type="text"
              required
              placeholder="Last Name"
              className="w-full bg-zinc-900/80 border border-white/10 text-white rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
            />
          </div>

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full bg-zinc-900/80 border border-white/10 text-white rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full bg-zinc-900/80 border border-white/10 text-white rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-bold py-3 rounded-2xl hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? "Processing..." : "Sign Up"}
          </button>

          <div className="flex items-center justify-end">
            <a href="/forgetPassword" className="text-blue-500 text-sm font-medium hover:text-blue-400">
              Forget Password?
            </a>
          </div>
        </form>
      </MouseEffectCard>
    </div>
  );
}