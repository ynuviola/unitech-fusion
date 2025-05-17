import Layout from '../components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Nosotros() {
  const teamMembers = [
    {
      name: "Yasel Nuviola",
      position: "CEO & Fundador",
      bio: "Ingeniero en Sistemas con más de 15 años de experiencia en el sector tecnológico. Especialista en transformación digital y estrategia de TI.",
      image: "/images/team/team-1.jpg"
    },
    {
      name: "Lisandra Leyé",
      position: "Directora de Marketing y Ventas & Fundadora",
      bio: "Máster en marketing y ventas con basta experiencia en desarrollo de negocios digitales.",
      image: "/images/team/team-2.jpg"
    },
    {
      name: "Martín González",
      position: "Director de Operaciones",
      bio: "Especialista en gestión de proyectos con certificación PMP y amplia experiencia en implementación de soluciones TI.",
      image: "/images/team/team-3.jpg"
    },
    {
      name: "Ana Silva",
      position: "Directora de Innovación",
      bio: "Experta en IA y análisis de datos con enfoque en soluciones de negocio basadas en inteligencia artificial.",
      image: "/images/team/team-4.jpg"
    }
  ];

  const values = [
    {
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de aplicar la tecnología para resolver problemas de negocio.",
      icon: "lightbulb"
    },
    {
      title: "Excelencia",
      description: "Nos comprometemos con los más altos estándares de calidad en cada proyecto que emprendemos.",
      icon: "star"
    },
    {
      title: "Colaboración",
      description: "Trabajamos en estrecha colaboración con nuestros clientes, convirtiéndonos en una extensión de su equipo.",
      icon: "users"
    },
    {
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia en todas nuestras interacciones profesionales.",
      icon: "shield"
    }
  ];

  return (
    <Layout
      title="Nosotros | Unitech Fusion"
      description="Conozca al equipo detrás de Unitech Fusion, nuestra historia, valores y misión en el sector tecnológico uruguayo."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Somos un equipo apasionado por la tecnología, comprometido con impulsar el crecimiento de las empresas a través de soluciones digitales innovadoras.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4">
                Unitech Fusion nace con una visión clara: transformar la manera en que las empresas aprovechan la tecnología. Fundada por un grupo de profesionales con amplia experiencia en el sector TI, nuestra empresa surgió como respuesta a la creciente necesidad de servicios tecnológicos integrales y personalizados.
              </p>
              <p className="text-gray-700 mb-4">
                Lo que comenzó como una pequeña consultora especializada en soporte técnico, rápidamente evolucionó hacia una empresa de servicios completos de TI, incorporando desarrollo de software, gestión de proyectos y, más recientemente, soluciones basadas en inteligencia artificial.
              </p>
              <p className="text-gray-700">
                Hoy, Unitech Fusion ayuda a empresas de todos los tamaños a navegar con éxito su transformación digital y a maximizar el valor de sus inversiones en tecnología.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/office.jpg" 
                alt="Oficinas de Unitech Fusion" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Nuestra Misión</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
            Potenciar el crecimiento y la competitividad de las empresas a través de soluciones tecnológicas innovadoras, accesibles y adaptadas a sus necesidades específicas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {value.icon === "lightbulb" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />}
                    {value.icon === "star" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />}
                    {value.icon === "users" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                    {value.icon === "shield" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Contamos con profesionales altamente calificados y apasionados por la tecnología, comprometidos con el éxito de nuestros clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <div className="h-64 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Certificaciones y Alianzas</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Trabajamos con los mejores socios tecnológicos y contamos con certificaciones que avalan nuestra experiencia.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-32 h-32 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src="/images/certifications/microsoft.png" alt="Microsoft Partner" className="max-w-full max-h-full" />
            </div>
            <div className="w-32 h-32 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src="/images/certifications/aws.png" alt="AWS Partner" className="max-w-full max-h-full" />
            </div>
            <div className="w-32 h-32 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src="/images/certifications/cisco.png" alt="Cisco Partner" className="max-w-full max-h-full" />
            </div>
            <div className="w-32 h-32 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src="/images/certifications/google.png" alt="Google Cloud Partner" className="max-w-full max-h-full" />
            </div>
            <div className="w-32 h-32 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src="/images/certifications/pmi.png" alt="PMI Registered Education Provider" className="max-w-full max-h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">¿Listo para trabajar con nosotros?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contáctenos hoy mismo para discutir cómo podemos ayudar a su empresa a alcanzar sus objetivos tecnológicos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Contáctenos
            </Link>
            <Link href="/servicios/soporte-ti" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}