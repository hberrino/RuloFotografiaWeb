import fotoLanding from "../assets/imgs/fotoLandingRulo.jpg"
export default function Hero() {
  return (
    <section
      id="hero"
      className="
        min-h-screen
        flex items-center
        bg-neutral-50
        px-6
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
            Hola, soy Agustín.
            <br />
            <span className="italic">Pero podés decirme Rulo.</span>
          </h1>

          <p className="text-lg text-neutral-600 max-w-md">
            Me apasiona la fotografía y la posibilidad de convertir
            un momento en un recuerdo.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={fotoLanding}
            alt="Fotógrafo sosteniendo una cámara"
            className="
              max-h-[75vh]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  )
}
