import {
  Layers,
  Rocket,
  Star,
  Brain,
  Globe,
  Briefcase,
  Users,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Professional Sphere — Onde reputação é construída",
  description:
    "Um ecossistema profissional onde reputação nasce de projetos reais, avaliações mútuas e histórico verificável.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.06),transparent_60%)]" />
        <div className="relative px-6 py-28 max-w-7xl mx-auto text-center">
          <span className="inline-block mb-6 rounded-full border border-gray-200 px-4 py-1 text-sm font-medium text-gray-600">
            Um novo padrão para o mercado profissional
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            Professional Sphere
            <br />
            Reputação não se declara.
            <br />
            Reputação se constrói.
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Um ecossistema onde profissionais, empresas e projetos se conectam
            por meio de entregas reais, avaliações mútuas e histórico público.
            Menos ruído. Mais evidência.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 text-white font-semibold shadow-lg hover:bg-gray-900 transition"
            >
              Entrar na plataforma
            </a>
            <a
              href="https://github.com/nandosilveiradev/professionalsphere/wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              Entender a proposta
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O mercado profissional está ruidoso.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vagas que não existem mais. Portfólios inflados. Avaliações
              superficiais. Pouca transparência sobre como empresas realmente
              operam. Encontrar oportunidades legítimas se tornou mais difícil
              do que deveria.
            </p>
          </div>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" />
              Vagas desatualizadas
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" />
              Histórico profissional fragmentado
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" />
              Falta de confiança entre as partes
            </li>
          </ul>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-28 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Profissionais, empresas e projetos no mesmo lugar.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              No Professional Sphere, tudo gira em torno de projetos reais.
              Entregas geram histórico. Histórico gera reputação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="rounded-2xl border p-8 bg-gray-50">
              <Briefcase className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Vagas e projetos reais</h3>
              <p className="text-gray-700">
                Vagas possuem prazo. Expiraram, somem. Quem publica pode
                repostar mantendo o histórico limpo e transparente.
              </p>
            </div>

            <div className="rounded-2xl border p-8 bg-gray-50">
              <Users className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Avaliação em duas vias</h3>
              <p className="text-gray-700">
                Empresas avaliam profissionais. Profissionais avaliam empresas.
                O mercado passa a ter memória.
              </p>
            </div>

            <div className="rounded-2xl border p-8 bg-gray-50">
              <Star className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Portfólio que se constrói sozinho
              </h3>
              <p className="text-gray-700">
                Projetos são sugeridos automaticamente com base em vínculos
                reais, mesmo que o cadastro aconteça depois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Layers className="w-6 h-6 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Base sólida</h3>
              <p className="text-gray-700">
                Identidade verificável, URLs públicas e histórico imutável como
                princípio, não como feature.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <Rocket className="w-6 h-6 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Tornar o trabalho visível
              </h3>
              <p className="text-gray-700">
                Projetos, vagas e eventos deixam de ser PDFs esquecidos e passam
                a ser páginas indexáveis.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Brain className="w-6 h-6 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Inteligência aplicada ao talento
              </h3>
              <p className="text-gray-700">
                Dados reais geram decisões melhores. Menos achismo. Mais
                resultado.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <Globe className="w-6 h-6 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Padrão global</h3>
              <p className="text-gray-700">
                Quando reputação é objetiva, o mercado se torna global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 text-center text-sm text-gray-500 border-t bg-white">
        Professional Sphere — Porque o que você constrói importa mais do que o
        que você diz.
      </footer>
    </main>
  );
}


