"use client";

export default function Logout() {
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "same-origin", // ← obrigatório
    });
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
    >
      Logout
    </button>
    );
}
