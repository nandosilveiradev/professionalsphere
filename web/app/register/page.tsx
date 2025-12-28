"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("BR");
  const [nationalId, setNationalId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password, country, nationalId }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage("Cadastro realizado com sucesso!");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setMessage("Erro ao registrar: " + (data.error || "Tente novamente"));
      }
    } catch (err: any) {
      console.error("Erro inesperado:", err);
      setMessage("Erro inesperado ao registrar: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const getNationalIdLabel = () => {
    switch (country) {
    case "BR":
      return "CPF";
    case "US":
      return "SSN (Social Security Number)";
    case "PT":
      return "NIF (Número de Identificação Fiscal)";
    case "AR":
      return "DNI (Documento Nacional de Identidad)";
    default:
      return "Documento Nacional";
    }
  };

  return (
    <>
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
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
        <nav className="flex items-center gap-6 text-base font-medium">
          <Link href="/" className="text-gray-700 hover:text-black transition-colors">
          Página Inicial
        </Link>
        <Link href="/login" className="text-gray-700 hover:text-black transition-colors">
        Entrar
      </Link>
    </nav>
  </div>
</header>

<main className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 flex items-center justify-center">
  <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 border">
    <h1 className="text-2xl font-bold mb-6 text-center">Criar Conta</h1>

    <form onSubmit={handleRegister} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">País</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black px-3 py-2 text-sm"
        >
          <option value="BR">Brasil</option>
          <option value="US">Estados Unidos</option>
          <option value="PT">Portugal</option>
          <option value="AR">Argentina</option>
          <option value="OTHER">Outro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {getNationalIdLabel()}
        </label>
        <input
          type="text"
          placeholder={getNationalIdLabel()}
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
          required
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black px-3 py-2 text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-black text-white py-2 font-semibold shadow-md hover:bg-gray-900 transition disabled:opacity-50 text-sm"
      >
        {loading ? "Enviando..." : "Criar Conta"}
      </button>
    </form>

    {message && (
      <p
        className={`mt-6 text-center text-sm font-medium ${
          message.includes("sucesso") ? "text-green-600" : "text-red-600"
        }`}
      >
        {message}
      </p>
      )}

    <p className="mt-6 text-center text-sm text-gray-600">
      Já tem conta?{" "}
      <Link href="/login" className="font-medium text-black hover:underline">
      Entrar
    </Link>
  </p>
</div>
</main>

</>
);
}
