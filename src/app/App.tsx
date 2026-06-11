import { Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Proposta from "./pages/Proposta";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/proposta" element={<Proposta />} />
    </Routes>
  );
}
