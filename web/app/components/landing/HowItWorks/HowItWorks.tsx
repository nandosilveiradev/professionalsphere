import {
  Briefcase,
  Users,
  Star
} from "lucide-react";

export default function HowItWorks() {
  return (
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
    );
}