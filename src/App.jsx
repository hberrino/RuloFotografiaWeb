import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
