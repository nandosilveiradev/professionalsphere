import Link from "next/link";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href="/login"
        className="inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 text-white font-semibold shadow-lg hover:bg-gray-900 transition"
      >
        Entrar na plataforma
      </Link>

      <a
        href="https://github.com/nandosilveiradev/professionalsphere/wiki"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 hover:bg-gray-100 transition"
      >
        Entender a proposta
      </a>
    </div>
    );
}
