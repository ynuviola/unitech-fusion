import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Soporte TI Premium",
      description: "Servicio de soporte técnico proactivo con planes flexibles adaptados a las necesidades de tu empresa.",
      icon: "/images/icons/support.svg",
      link: "/servicios/soporte-ti"
    },
    {
      title: "Desarrollo de Software",
      description: "Creamos aplicaciones a medida que automatizan procesos y mejoran la eficiencia de tu negocio.",
      icon: "/images/icons/code.svg",
      link: "/servicios/desarrollo-software"
    },
    {
      title: "Gestión de Proyectos TI",
      description: "Planificación, ejecución y seguimiento de proyectos tecnológicos con metodologías ágiles.",
      icon: "/images/icons/project.svg",
      link: "/servicios/gestion-proyectos"
    },
    {
      title: "Transformación Digital",
      description: "Implementamos soluciones de IA y automatización para potenciar la competitividad de tu empresa.",
      icon: "/images/icons/ai.svg",
      link: "/servicios/transformacion-digital"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para impulsar el crecimiento de tu empresa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <div className="text-center">
                <Link 
                  href={service.link} 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Conocer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}