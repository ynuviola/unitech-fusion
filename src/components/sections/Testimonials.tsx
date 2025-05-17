import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Unitech Fusion transformó nuestra infraestructura tecnológica. Su soporte proactivo ha reducido nuestros tiempos de inactividad en un 90%.",
      author: "María Rodríguez",
      position: "Gerente de Operaciones",
      company: "Consultora Financiera",
      avatar: "/images/testimonials/avatar1.jpg"
    },
    {
      quote: "El equipo desarrolló una aplicación a medida que automatizó nuestros procesos de inventario, ahorrando más de 20 horas semanales de trabajo manual.",
      author: "Carlos Méndez",
      position: "Director de Logística",
      company: "Importadora del Este",
      avatar: "/images/testimonials/avatar2.jpg"
    },
    {
      quote: "La implementación de IA en nuestro servicio al cliente ha mejorado la satisfacción de nuestros usuarios en un 40%. Excelente trabajo.",
      author: "Laura Fernández",
      position: "CEO",
      company: "TechRetail Uruguay",
      avatar: "/images/testimonials/avatar3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que han confiado en nosotros para su transformación digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8v6a6 6 0 01-6 6H2v4h4a10 10 0 0010-10V8h-6zm18 0v6a6 6 0 01-6 6h-2v4h4a10 10 0 0010-10V8h-6z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    width={48} 
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-dark">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}