import {
  Briefcase,
  Users,
  Star,
  
} from "lucide-react";

export default function PeerReviews() {
  return (
    <section id="avaliacoes" className="px-6 py-28 bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Avaliações multilaterais. Confiança com contexto.
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
          Profissionais avaliam empresas. Empresas avaliam profissionais. E o projeto também é avaliado. 
          Com o tempo, padrões emergem: pessoas consistentes, empresas saudáveis e ambientes problemáticos se tornam visíveis.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="rounded-2xl border p-8 bg-white">
            <Briefcase className="w-6 h-6 mb-4" />
            <h3 className="text-xl font-bold mb-3">Empresa → Profissional</h3>
            <p className="text-gray-700">
              Hard skills, soft skills, comunicação, profissionalismo e qualidade da entrega.
            </p>
          </div>

          <div className="rounded-2xl border p-8 bg-white">
            <Users className="w-6 h-6 mb-4" />
            <h3 className="text-xl font-bold mb-3">Profissional → Empresa</h3>
            <p className="text-gray-700">
              Organização, clareza de escopo, políticas internas e experiência geral.
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
    );
}
