
import {
  Timer,
  CheckCircle,
  Layers

} from "lucide-react";

export default function ActiveJobs(){
  return(
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
    );
}