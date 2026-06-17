"use client";

import { supabase } from "@/lib/supabase";

export default function LogoutButton() {

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href =
      "/admin/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-5 py-3 rounded-lg"
    >
      Logout
    </button>
  );
}