"use client"; // se estiver usando App Router

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO + NOME */}
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

        {/* LINKS - Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#inicio" className="text-gray-700 hover:text-black transition-colors">Início</a>
          <a href="#problema" className="text-gray-700 hover:text-black transition-colors">O problema</a>
          <a href="#como-funciona" className="text-gray-700 hover:text-black transition-colors">Como funciona</a>
          <a href="#vagas-vivas" className="text-gray-700 hover:text-black transition-colors">Vagas vivas</a>
          <a href="#projetos" className="text-gray-700 hover:text-black transition-colors">Projetos</a>
          <a href="#avaliacoes" className="text-gray-700 hover:text-black transition-colors">Avaliações</a>
          <a href="#matching" className="text-gray-700 hover:text-black transition-colors">Matching</a>
        </nav>

        {/* BOTÕES - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
          Entrar
        </Link>
        <Link href="/register" className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-900 transition-colors">
        Criar conta
      </Link>
    </div>

        {/* Hamburger - Mobile/Tablet */}
    <button
      className="md:hidden p-2 rounded-lg hover:bg-gray-100"
      onClick={() => setMenuOpen(!menuOpen)}
    >
          {/* Ícone simples */}
      <svg
        className="h-6 w-6 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {menuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>

      {/* Dropdown - Mobile/Tablet */}
    {menuOpen && (
      <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
        <nav className="flex flex-col p-4 gap-3 text-sm font-medium">
          <a href="#inicio" className="text-gray-700 hover:text-black">Início</a>
          <a href="#problema" className="text-gray-700 hover:text-black">O problema</a>
          <a href="#como-funciona" className="text-gray-700 hover:text-black">Como funciona</a>
          <a href="#vagas-vivas" className="text-gray-700 hover:text-black">Vagas vivas</a>
          <a href="#projetos" className="text-gray-700 hover:text-black">Projetos</a>
          <a href="#avaliacoes" className="text-gray-700 hover:text-black">Avaliações</a>
          <a href="#matching" className="text-gray-700 hover:text-black">Matching</a>
          <Link href="/login" className="text-gray-700 hover:text-black">Entrar</Link>
          <Link href="/register" className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-900">
          Criar conta
        </Link>
      </nav>
    </div>
    )}
  </header>
  );
}
