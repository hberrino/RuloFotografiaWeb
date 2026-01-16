import { useEffect, useRef } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Buscate() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="buscate"
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Bus<span className="italic text-blue-500">cate</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Explora mi portfolio completo y descubre los momentos que he tenido el privilegio de capturar
          </p>
        </div>

        <div className="text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform rotate-2"></div>
            <div className="relative bg-white p-12 rounded-2xl shadow-2xl">
              <div className="space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <FaCloudDownloadAlt className="text-4xl text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  Mi Portfolio Completo
                </h3>
                
                <p className="text-gray-700 max-w-md mx-auto">
                  Descubre cientos de imágenes que cuentan historias únicas. 
                  Desde retratos íntimos hasta eventos memorables, 
                  cada fotografía espera ser explorada.
                </p>

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <FaCloudDownloadAlt className="text-xl group-hover:animate-bounce" />
                  Abrir Portfolio
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <p className="text-sm text-gray-500 italic">
                  Se abrirá en una nueva pestaña con mi galería completa
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
            <span className="text-gray-600">¿No encuentras lo que buscas?</span>
            <a 
              href="#contacto" 
              className="text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300"
            >
              Contáctame →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}