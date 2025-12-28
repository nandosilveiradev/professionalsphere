"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      const error = await res.json();
      alert(error.error || "Erro no login");
    }
  };

  // 🔥 O return precisa estar aqui dentro da função
  return (
    <>
      {/* NAVBAR */}
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 text-lg">
          <Image
            src="/logo.png"
            alt="Professional Sphere"
            width={32}
            height={32}
            className="h-8 w-auto drop-shadow-sm"
          />
          <span className="font-bold tracking-tight text-gray-800">
            Professional Sphere
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-gray-700 hover:text-black transition-colors">
          Página Inicial
        </Link>
        <Link href="/register" className="text-gray-700 hover:text-black transition-colors">
        Criar Conta
      </Link>
    </nav>
  </div>
</header>

      {/* CONTEÚDO PRINCIPAL */}
<main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 flex items-center justify-center">
  <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border">
    <h1 className="text-2xl font-bold mb-6 text-center">Entrar</h1>

    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Senha
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-black text-white py-2 font-semibold shadow-md hover:bg-gray-900 transition"
      >
        Entrar
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-gray-600">
      Não tem conta?{" "}
      <Link href="/register" className="font-medium text-black hover:underline">
      Criar conta
    </Link>
  </p>
</div>
</main>
</>
);
}
