import {
  Globe,
  Users,
  Star
} from "lucide-react";

export default function Projects(){
  return (
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
    );
}