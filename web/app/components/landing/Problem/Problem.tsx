
import {
  CheckCircle,
  Calendar,
  Building2,
  Briefcase,
  Timer,
  
} from "lucide-react";


export default function Problem(){

  return (
    <section id="problema" className="px-6 py-24 bg-gray-50">
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
    );
}