import { useState, useEffect, useRef } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle, FaCamera, FaHeart, FaPhone, FaExclamationTriangle } from "react-icons/fa";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'El nombre es requerido';
        } else if (value.trim().length < 2) {
          newErrors.name = 'El nombre debe tener al menos 2 caracteres';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'El email es requerido';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Ingresa un email válido';
        } else {
          delete newErrors.email;
        }
        break;
      case 'phone':
        if (value && !/^[0-9\s\-\(\)]+$/.test(value)) {
          newErrors.phone = 'Ingresa un número de teléfono válido';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'El mensaje es requerido';
        } else if (value.trim().length < 10) {
          newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        } else if (value.trim().length > 500) {
          newErrors.message = 'El mensaje no puede exceder 500 caracteres';
        } else {
          delete newErrors.message;
        }
        break;
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const newErrors = validateField(name, value);
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const newErrors = validateField(name, value);
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const allErrors = {};
    Object.keys(formData).forEach(key => {
      const fieldErrors = validateField(key, formData[key]);
      Object.assign(allErrors, fieldErrors);
    });
    
    setErrors(allErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    
    if (Object.keys(allErrors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setTouched({});
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Contac<span className="italic text-blue-500">to</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">Conectemos</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/5492494621986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <SiWhatsapp className="text-xl text-green-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp</div>
                    <div className="text-sm text-gray-500">+54 9 2494 621986</div>
                  </div>
                </a>
                
                <a
                  href="https://instagram.com/rulo.fotografia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-pink-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <SiInstagram className="text-xl text-pink-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Instagram</div>
                    <div className="text-sm text-gray-500">@rulo.fotografia</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaCamera className="text-xl text-blue-500" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900">
                    Mi proceso
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Escucho tu idea</h4>
                      <p className="text-sm text-gray-600">Cada proyecto empieza con una conversación</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Planificamos juntos</h4>
                      <p className="text-sm text-gray-600">Definimos estilo, locación y momentos</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Capturamos magia</h4>
                      <p className="text-sm text-gray-600">Sesión fotográfica con atención al detalle</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Entregamos recuerdos</h4>
                      <p className="text-sm text-gray-600">Edición profesional y entrega final</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="text-4xl text-green-500" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
                  ¡Gracias por tu mensaje!
                </h3>
                <p className="text-gray-600 mb-8">
                  Te responderé a la brevedad. Mientras tanto, 
                  podés explorar más de mi trabajo.
                </p>
                <div className="flex justify-center gap-6">
                  <a href="#buscate" className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-2">
                    Ver portfolio <span className="text-xl">→</span>
                  </a>
                  <a href="#sobremi" className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-2">
                    Sobre mí <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">Envíame un mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`peer w-full px-4 py-4 bg-white border-2 rounded-lg focus:outline-none transition-all duration-300 placeholder-transparent ${
                          errors.name 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-blue-500'
                        }`}
                        placeholder="Nombre"
                      />
                      <label 
                        htmlFor="name" 
                        className={`absolute left-4 -top-2.5 bg-white px-2 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white ${
                          errors.name
                            ? 'text-red-500 peer-focus:text-red-500'
                            : 'text-gray-600 peer-focus:text-blue-500'
                        }`}
                      >
                        Tu nombre
                      </label>
                      <FaUser className={`absolute right-4 top-4 transition-colors ${
                        errors.name ? 'text-red-500' : 'text-gray-400'
                      }`} />
                      {errors.name && (
                        <div id="name-error" className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <FaExclamationTriangle className="text-xs" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`peer w-full px-4 py-4 bg-white border-2 rounded-lg focus:outline-none transition-all duration-300 placeholder-transparent ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-blue-500'
                        }`}
                        placeholder="Email"
                      />
                      <label 
                        htmlFor="email" 
                        className={`absolute left-4 -top-2.5 bg-white px-2 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white ${
                          errors.email
                            ? 'text-red-500 peer-focus:text-red-500'
                            : 'text-gray-600 peer-focus:text-blue-500'
                        }`}
                      >
                        Tu email
                      </label>
                      <FaEnvelope className={`absolute right-4 top-4 transition-colors ${
                        errors.email ? 'text-red-500' : 'text-gray-400'
                      }`} />
                      {errors.email && (
                        <div id="email-error" className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <FaExclamationTriangle className="text-xs" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`peer w-full px-4 py-4 bg-white border-2 rounded-lg focus:outline-none transition-all duration-300 placeholder-transparent ${
                        errors.phone 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="Teléfono (opcional)"
                    />
                    <label 
                      htmlFor="phone" 
                      className={`absolute left-4 -top-2.5 bg-white px-2 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white ${
                        errors.phone
                          ? 'text-red-500 peer-focus:text-red-500'
                          : 'text-gray-600 peer-focus:text-blue-500'
                      }`}
                    >
                      Tu teléfono (opcional)
                    </label>
                    <FaPhone className={`absolute right-4 top-4 transition-colors ${
                      errors.phone ? 'text-red-500' : 'text-gray-400'
                    }`} />
                    {errors.phone && (
                      <div id="phone-error" className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                        <FaExclamationTriangle className="text-xs" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows={6}
                      maxLength={500}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : 'message-counter'}
                      className={`peer w-full px-4 py-4 bg-white border-2 rounded-lg focus:outline-none transition-all duration-300 resize-none placeholder-transparent ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="Mensaje"
                    />
                    <label 
                      htmlFor="message" 
                      className={`absolute left-4 -top-2.5 bg-white px-2 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white ${
                        errors.message
                          ? 'text-red-500 peer-focus:text-red-500'
                          : 'text-gray-600 peer-focus:text-blue-500'
                      }`}
                    >
                      Cuéntame sobre tu proyecto...
                    </label>
                    <div className="flex items-center justify-between mt-1">
                      {errors.message && (
                        <div id="message-error" className="flex items-center gap-1 text-red-500 text-sm">
                          <FaExclamationTriangle className="text-xs" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                      <div id="message-counter" className={`text-sm ml-auto ${
                        formData.message.length > 450 ? 'text-orange-500' : 'text-gray-400'
                      }`}>
                        {formData.message.length}/500
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}