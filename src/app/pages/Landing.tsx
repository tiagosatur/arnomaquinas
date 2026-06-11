import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { StatsStrip } from "../components/StatsStrip";
import { Especialidades } from "../components/Especialidades";
import { Diferenciais } from "../components/Diferenciais";
import { Processo } from "../components/Processo";
import { AutoridadeTecnica } from "../components/AutoridadeTecnica";
import { SocialProof } from "../components/SocialProof";
import { Contato } from "../components/Contato";
import { Footer } from "../components/Footer";

export default function Landing() {
  return (
    <div style={{ fontFamily: "Manrope, 'Segoe UI', system-ui, sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <StatsStrip />
      <Especialidades />
      <Diferenciais />
      <AutoridadeTecnica />
      <SocialProof />
      <Processo />
      <Contato />
      <Footer />
    </div>
  );
}
