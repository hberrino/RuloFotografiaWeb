import fotoLanding from "../assets/imgs/fotoLandingRulo.jpg";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Hero() {
  const mainColor = "teal-600";

  return (
    <section
  id="hero"
  className="pt-24 md:pt-0 relative min-h-screen flex flex-col justify-center px-6"
>
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
    
    <div className="flex flex-col justify-center gap-4 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-gray-900">
  Hola, soy Agustín,
  <br />
  <span className="italic text-blue-500 drop-shadow-md transition-colors duration-300 hover:text-blue-600">
    pero podés decirme Rulo.
  </span>
</h1>

      <p className="text-base md:text-lg text-gray-700 max-w-md">
        Me apasiona la fotografía y la posibilidad de convertir un momento en un recuerdo único.
      </p>

      <div className="flex gap-3 mt-6 justify-center md:justify-start flex-wrap">
        <a
          href="https://instagram.com/rulo.fotografia"
          target="_blank"
          className={`flex items-center gap-2 px-4 py-2 bg-white border-2 border-${mainColor} text-${mainColor} rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300`}
        >
          <SiInstagram size={20} /> Instagram
        </a>

        <a
  href="https://wa.me/5492494621986"
  target="_blank"
  className={`flex items-center gap-2 px-4 py-2 bg-white border-2 border-${mainColor} text-${mainColor} rounded-lg font-medium hover:bg-green-500 hover:text-white transition-colors duration-300`}
>
  <SiWhatsapp size={20} /> WhatsApp
</a>
      </div>
    </div>

    <div className="flex justify-center md:justify-end w-full md:w-auto mt-6 md:mt-0">
      <img
        src={fotoLanding}
        alt="Fotógrafo sosteniendo una cámara"
        className="max-h-[55vh] md:max-h-[60vh] w-auto object-contain rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
  <span className="block text-gray-700 text-sm tracking-widest mt-1">
      ↓ Explorar
    </span>
    <a
      href="#sobremi"
      className="text-black font-semibold hover:text-blue-800 transition-colors duration-300"
    >
      Ver más sobre mí
    </a>
  </div>
</section>

  );
}
