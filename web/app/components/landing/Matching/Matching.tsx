import {
  Brain,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function Matching(){
  return (
    <section id="matching" className="px-6 py-28 bg-white border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
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

   );
}