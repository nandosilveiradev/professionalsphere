// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Rocket,
  Star,
  Brain,
  Globe,
  Briefcase,
  Users,
  CheckCircle,
  Calendar,
  Building2,
  Timer,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* NAVBAR */}
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
          <span className="font-bold tracking-tight text-gray-800"> Professional Sphere </span>
        </div>

          {/* LINKS */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a
            href="#inicio"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Início
          </a>
          <a
            href="#problema"
            className="text-gray-700 hover:text-black transition-colors"
          >
            O problema
          </a>
          <a
            href="#como-funciona"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Como funciona
          </a>
          <a
            href="#vagas-vivas"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Vagas vivas
          </a>
          <a
            href="#projetos"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Projetos
          </a>
          <a
            href="#avaliacoes"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Avaliações
          </a>
          <a
            href="#matching"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Matching
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Entrar
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-900 transition-colors"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </header>

    <main className="pt-16 min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
        {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
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
        </div>
      </section>

        {/* PROBLEMA + BUSCA */}
      <section id="problema" className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O mercado profissional está ruidoso.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Vagas que não existem mais. Portfólios inflados. Pouca
              transparência sobre como empresas realmente operam. Encontrar
              oportunidades legítimas se tornou mais difícil do que deveria.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              O problema não é falta de vagas. É excesso de vagas irreais.
              O Professional Sphere foi desenhado para mostrar apenas o que
              é vivo, verificável e rastreável.
            </p>
          </div>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" />
              Projetos
            </li>
            <li className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Eventos
            </li>
            <li className="flex items-center gap-3">
              <Building2 className="w-5 h-5" />
              Vaga CLT
            </li>
            <li className="flex items-center gap-3">
              <Briefcase className="w-5 h-5" />
              Vaga PJ / Freelancer
            </li>
            <li className="flex items-center gap-3">
              <Timer className="w-5 h-5" />
              Vaga Temporária / Squad
            </li>
          </ul>
        </div>
      </section>

        {/* COMO FUNCIONA */}
      <section id="como-funciona" className="px-6 py-28 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Profissionais, empresas e projetos no mesmo lugar.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tudo gira em torno de projetos reais. Entregas geram histórico.
              Histórico gera reputação. Portfólios deixam de ser promessas e
              passam a ser registros públicos de entrega.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="rounded-2xl border p-8 bg-gray-50">
              <Briefcase className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Vagas com prazo real</h3>
              <p className="text-gray-700">
                Vagas expiram automaticamente. Repostagem mantém o feed limpo
                e confiável.
              </p>
            </div>

            <div className="rounded-2xl border p-8 bg-gray-50">
              <Users className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Avaliação bilateral</h3>
              <p className="text-gray-700">
                Empresas e profissionais se avaliam. O mercado cria memória.
              </p>
            </div>

            <div className="rounded-2xl border p-8 bg-gray-50">
              <Star className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Portfólio automático</h3>
              <p className="text-gray-700">
                Projetos reais sugeridos com base em vínculos verificáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* VAGAS VIVAS */}
      <section id="vagas-vivas" className="px-6 py-28 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Vagas vivas. O que não é real, expira.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Toda vaga ou projeto possui um tempo de vida definido. Ao
              expirar, sai automaticamente de circulação. Quem publicou pode
              repostar com um clique, mantendo histórico, contexto e
              rastreabilidade.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Timer className="w-5 h-5" />
                Expiração automática
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" />
                Repostagem com 1 clique
              </li>
              <li className="flex items-center gap-3">
                <Layers className="w-5 h-5" />
                Histórico preservado
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-10 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Um feed sempre atualizado</h3>
            <p className="text-gray-700 leading-relaxed">
              O resultado é um ecossistema onde apenas oportunidades reais
              permanecem visíveis. Nada de vagas abandonadas. Nada de projetos
              esquecidos. Apenas o que existe agora.
            </p>
          </div>
        </div>
      </section>

        {/* PROJETOS CONTRATADOS / PORTFÓLIO VIVO */}
      <section id="projetos" className="px-6 py-28 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Projetos contratados viram evidência pública.
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
            Quando um projeto é contratado dentro da plataforma, ele se torna
            uma entidade verificável. A empresa vincula oficialmente os
            participantes, e o trabalho passa a ser um registro público —
            integrado ao portfólio de todos os envolvidos.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="rounded-2xl border p-8 bg-gray-50">
              <Globe className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Página pública</h3>
              <p className="text-gray-700">
                Cada projeto possui uma página indexável, com imagem, vídeo e
                histórico.
              </p>
            </div>

            <div className="rounded-2xl border p-8 bg-gray-50">
              <Users className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Vínculo oficial</h3>
              <p className="text-gray-700">
                Apenas a empresa contratante pode confirmar quem participou.
              </p>
            </div>

            <div className="rounded-2xl border p-8 bg-gray-50">
              <Star className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Portfólio vivo</h3>
              <p className="text-gray-700">
                O projeto aparece automaticamente no perfil de todos os
                envolvidos.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border p-8 bg-gray-50">
            <h3 className="text-xl font-bold mb-3">
              Portfólios não são montados. Eles acontecem.
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cada projeto pode trazer uma imagem principal, um vídeo (por
                exemplo, no YouTube), descrição do contexto e resultado,
              empresa contratante e perfis dos participantes. O portfólio
              deixa de ser uma coleção de promessas e passa a ser histórico
              real de entregas.
            </p>
          </div>
        </div>
      </section>

        {/* AVALIAÇÕES MULTILATERAIS */}
      <section id="avaliacoes" className="px-6 py-28 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Avaliações multilaterais. Confiança com contexto.
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
            Profissionais avaliam empresas. Empresas avaliam profissionais. E
            o projeto também é avaliado. Com o tempo, padrões emergem: pessoas
            consistentes, empresas saudáveis e ambientes problemáticos se
            tornam visíveis.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="rounded-2xl border p-8 bg-white">
              <Briefcase className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Empresa → Profissional</h3>
              <p className="text-gray-700">
                Hard skills, soft skills, comunicação, profissionalismo e
                qualidade da entrega.
              </p>
            </div>

            <div className="rounded-2xl border p-8 bg-white">
              <Users className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Profissional → Empresa</h3>
              <p className="text-gray-700">
                Organização, clareza de escopo, políticas internas e
                experiência geral.
              </p>
            </div>

            <div className="rounded-2xl border p-8 bg-white">
              <Star className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-bold mb-3">Avaliação do Projeto</h3>
              <p className="text-gray-700">
                Complexidade, impacto, organização e resultado final.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* MATCHING ATIVO */}
      <section id="matching" className="px-6 py-28 bg-white border-t">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Matching ativo. Oportunidades reais.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Projetos, eventos e demandas pontuais podem ser publicados como
              oportunidades abertas. À medida que as características são
              definidas, profissionais e empresas compatíveis aparecem em
              tempo real.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Rocket className="w-5 h-5" />
                Lista dinâmica de candidatos
              </li>
              <li className="flex items-center gap-3">
                <Brain className="w-5 h-5" />
                Matching por skills e contexto
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" />
                Contato direto e rápido
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-gray-50 p-10 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Exemplo real</h3>
            <p className="text-gray-700 leading-relaxed">
             Um casamento pode divulgar um projeto para fotografia, filmagem e cobertura completa. À medida que os detalhes são especificados, fotógrafos, videomakers e empresas adequadas aparecem automaticamente, sem a necessidade de intermediários e sem complicação.
           </p>
         </div>
       </div>
     </section>

        {/* MANIFESTO FINAL */}
     <section
      id="manifesto"
      className="px-6 py-28 bg-gray-900 text-white text-center border-t"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Um ecossistema onde trabalho real constrói reputação real.
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          O Professional Sphere não é apenas uma plataforma de vagas. É um
          registro vivo do mercado profissional — transparente,
          meritocrático e baseado em evidências. Aqui, reputação não é
          marketing. É consequência.
        </p>
      </div>
    </section>

        {/* FOOTER */}
    <footer className="px-6 py-12 text-center text-sm text-gray-500 border-t bg-white">
      Professional Sphere — Porque o que você constrói importa mais do que o
      que você diz.
    </footer>
  </main>
  </>
  );
}
