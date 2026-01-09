// app/page.tsx
import Hero from "./components/landing/Hero/Hero";
import Navbar from "./components/landing/Navbar/Navbar";
import Problem from "./components/landing/Problem/Problem";
import HowItWorks from "./components/landing/HowItWorks/HowItWorks";
import ActiveJobs from "./components/landing/ActiveJobs/ActiveJobs";
import Projects from "./components/landing/Projects/Projects";
import PeerReviews from "./components/landing/PeerReviews/PeerReviews";
import Matching from "./components/landing/Matching/Matching";
import Manisfesto from "./components/landing/Manifesto/Manifesto";
import Footer from "./components/landing/Footer/Footer";

export default function HomePage() {
  return (
    <>
    
    <Navbar />
    <main className="pt-16 min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Hero />
      <Problem /> 
      <HowItWorks />
      <ActiveJobs />
      <Projects />
      <PeerReviews />
      <Matching />
      <Manisfesto />
      <Footer />    
    </main>
    </>
    );
}
