"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
useEffect(() => {
  checkUser();
}, []);

const checkUser = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    router.push("/admin/dashboard");
  }
};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

  console.log("Login Clicked");

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    alert(error.message);
  } else {
    alert("Login Success");
    router.push("/admin/dashboard");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#FF6B00] text-white py-3 rounded-lg"
        >
          Login
        </button>

      </div>

    </div>
  );
}