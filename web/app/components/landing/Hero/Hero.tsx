import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
   <section id="inicio" className="relative overflow-hidden">
    <div className="relative px-6 py-28 max-w-7xl mx-auto text-center">
      <HeroBadge />
      <HeroTitle />
      <HeroDescription />
      <HeroActions />
    </div>
  </section>

  );
}
