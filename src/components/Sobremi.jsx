import { useEffect, useRef } from "react";

export default function Sobremi() {
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
      id="sobremi"
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Sobre <span className="italic text-blue-500">Mí</span>
          </h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <div className="space-y-4">
              <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-4">
                Mi pasión por la fotografía
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Soy Agustín "Rulo", un fotógrafo apasionado por capturar momentos únicos y 
                convertirlos en recuerdos inolvidables. Mi viaje en la fotografía comenzó 
                hace años, cuando descubrí que cada imagen cuenta una historia que palabras 
                no pueden expresar.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-4">
                Mi estilo
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Me especializo en fotografía retratista y de eventos, buscando siempre la 
                naturalidad y espontaneidad en cada toma. Mi enfoque es crear imágenes 
                que transmitan emociones reales, con un estilo clásico, elegante y atemporal.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-4">
                Por qué elegir mi trabajo
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Cada sesión fotográfica es única y personalizada. Me dedico a entender 
                tus necesidades y visiones para superar tus expectativas. Mi compromiso 
                es entregarte imágenes que no solo sean bellas, sino que significativas 
                para ti.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-8">
                <span className="text-5xl">📷</span>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Estilo Único</h4>
                  <p className="text-gray-600">Clásico y elegante</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Pasión</h4>
                  <p className="text-gray-600">Dedicación total</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Compromiso</h4>
                  <p className="text-gray-600">Resultados garantizados</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Calidad</h4>
                  <p className="text-gray-600">Excelencia profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <p className="text-2xl text-gray-700 italic mb-12 max-w-4xl mx-auto">
            "La fotografía es la forma más poderosa de congelar el tiempo y preservar los recuerdos que más importan."
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Hablemos de tu proyecto
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}