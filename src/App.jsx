import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobremi from "./components/Sobremi";
import Buscate from "./components/Buscate";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Sobremi />
      <Buscate />
      <Contacto />
    </div>
  );
}

export default App;
