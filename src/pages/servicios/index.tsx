import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '../../components/sections/CTASection';

export default function Servicios() {
  const servicios = [
    {
      title: "Soporte TI Premium",
      description: "Servicio de soporte técnico proactivo con planes flexibles adaptados a las necesidades de su empresa.",
      icon: "/images/icons/support.svg",
      link: "/servicios/soporte-ti",
      planes: [
        { nombre: "Básico", descripcion: "Ideal para pequeñas empresas" },
        { nombre: "Intermedio", descripcion: "Para empresas en crecimiento" },
        { nombre: "Avanzado (24/7)", descripcion: "Soporte completo sin tiempo de inactividad" }
      ]
    },
    {
      title: "Desarrollo de Software",
      description: "Creamos aplicaciones a medida que automatizan procesos y mejoran la eficiencia de su negocio.",
      icon: "/images/icons/code.svg",
      link: "/servicios/desarrollo-software",
      planes: [
        { nombre: "Aplicación Web", descripcion: "Desarrollo web a medida" },
        { nombre: "Aplicación Móvil", descripcion: "Apps nativas o híbridas" },
        { nombre: "Software Empresarial", descripcion: "Soluciones empresariales personalizadas" }
      ]
    },
    {
      title: "Gestión de Proyectos TI",
      description: "Planificación, ejecución y seguimiento de proyectos tecnológicos con metodologías ágiles.",
      icon: "/images/icons/project.svg",
      link: "/servicios/gestion-proyectos",
      planes: [
        { nombre: "Consultoría", descripcion: "Asesoramiento experto" },
        { nombre: "Gestión Integral", descripcion: "Gestión completa de proyectos" },
        { nombre: "PMO como Servicio", descripcion: "Oficina de gestión de proyectos externa" }
      ]
    },
    {
      title: "Transformación Digital",
      description: "Implementamos soluciones de IA y automatización para potenciar la competitividad de su empresa.",
      icon: "/images/icons/ai.svg",
      link: "/servicios/transformacion-digital",
      planes: [
        { nombre: "Diagnóstico Digital", descripcion: "Evaluación de madurez digital" },
        { nombre: "Transformación Integral", descripcion: "Programa completo de transformación" },
        { nombre: "Soluciones IA", descripcion: "Implementación de inteligencia artificial" }
      ]
    }
  ];

  return (
    <Layout
      title="Servicios de TI | Unitech Fusion"
      description="Descubra nuestra gama completa de servicios de tecnología: soporte técnico, desarrollo de software, gestión de proyectos y transformación digital."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento y la eficiencia de su empresa
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Servicios Tecnológicos Integrales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En Unitech Fusion ofrecemos un ecosistema completo de servicios tecnológicos para satisfacer todas las necesidades de su empresa
            </p>
          </div>

          <div className="space-y-24">
            {servicios.map((servicio, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Image 
                        src={servicio.icon} 
                        alt={servicio.title} 
                        width={24} 
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <h2 className="text-3xl font-montserrat font-bold text-dark">{servicio.title}</h2>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">
                    {servicio.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-montserrat font-semibold mb-4">Planes disponibles:</h3>
                    <div className="space-y-4">
                      {servicio.planes.map((plan, planIndex) => (
                        <div key={planIndex} className="flex items-start">
                          <svg className="h-6 w-6 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <span className="font-medium">{plan.nombre}:</span> {plan.descripcion}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={servicio.link}
                    className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                  >
                    Ver detalles
                  </Link>
                </div>
                
                <div className={`rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                  <img 
                    src={`/images/services/${servicio.title.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
                    alt={servicio.title} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Comparativa de Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentre el servicio que mejor se adapta a las necesidades específicas de su empresa
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Servicio</th>
                  <th className="p-4 text-left">Ideal para</th>
                  <th className="p-4 text-left">Características principales</th>
                  <th className="p-4 text-left">Planes</th>
                  <th className="p-4 text-left">Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Soporte TI Premium</td>
                  <td className="p-4">Empresas que necesitan mantener su infraestructura tecnológica funcionando sin interrupciones</td>
                  <td className="p-4">
                    <ul className="list-disc pl-5">
                      <li>Asistencia remota y presencial</li>
                      <li>Mantenimiento preventivo</li>
                      <li>Resolución rápida de incidentes</li>
                    </ul>
                  </td>
                  <td className="p-4">Básico, Intermedio, Avanzado</td>
                  <td className="p-4">
                    <Link 
                      href="/servicios/soporte-ti"
                      className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
                    >
                      Ver detalles
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Desarrollo de Software</td>
                  <td className="p-4">Empresas que necesitan soluciones personalizadas para automatizar procesos o mejorar la experiencia del cliente</td>
                  <td className="p-4">
                    <ul className="list-disc pl-5">
                      <li>Aplicaciones web y móviles</li>
                      <li>Software empresarial a medida</li>
                      <li>Integración con sistemas existentes</li>
                    </ul>
                  </td>
                  <td className="p-4">Web, Móvil, Empresarial</td>
                  <td className="p-4">
                    <Link 
                      href="/servicios/desarrollo-software"
                      className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
                    >
                      Ver detalles
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Gestión de Proyectos TI</td>
                  <td className="p-4">Empresas que necesitan implementar proyectos tecnológicos complejos con eficiencia y control</td>
                  <td className="p-4">
                    <ul className="list-disc pl-5">
                      <li>Metodologías ágiles</li>
                      <li>Control de presupuesto y plazos</li>
                      <li>Gestión de riesgos</li>
                    </ul>
                  </td>
                  <td className="p-4">Consultoría, Gestión Integral, PMO</td>
                  <td className="p-4">
                    <Link 
                      href="/servicios/gestion-proyectos"
                      className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
                    >
                      Ver detalles
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 font-medium">Transformación Digital</td>
                  <td className="p-4">Empresas que buscan innovar y adaptarse al entorno digital para mantener su competitividad</td>
                  <td className="p-4">
                    <ul className="list-disc pl-5">
                      <li>Diagnóstico de madurez digital</li>
                      <li>Implementación de IA y automatización</li>
                      <li>Rediseño de procesos</li>
                    </ul>
                  </td>
                  <td className="p-4">Diagnóstico, Integral, IA</td>
                  <td className="p-4">
                    <Link 
                      href="/servicios/transformacion-digital"
                      className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
                    >
                      Ver detalles
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Beneficios de Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Al elegir Unitech Fusion como su socio tecnológico, su empresa obtiene ventajas competitivas significativas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Mayor Eficiencia Operativa</h3>
              <p className="text-gray-600">
                Optimizamos sus procesos tecnológicos para reducir costos operativos y aumentar la productividad de su equipo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Seguridad Garantizada</h3>
              <p className="text-gray-600">
                Implementamos las mejores prácticas de seguridad para proteger sus datos y sistemas contra amenazas cibernéticas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Tiempo de Respuesta Rápido</h3>
              <p className="text-gray-600">
                Nuestro equipo está disponible para resolver sus problemas tecnológicos con tiempos de respuesta garantizados.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Equipo Especializado</h3>
              <p className="text-gray-600">
                Contamos con profesionales certificados y especializados en diferentes áreas de la tecnología.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Escalabilidad</h3>
              <p className="text-gray-600">
                Nuestras soluciones crecen con su empresa, adaptándose a sus necesidades cambiantes sin interrupciones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Optimización de Costos</h3>
              <p className="text-gray-600">
                Reducimos sus gastos tecnológicos mediante soluciones eficientes y planes adaptados a su presupuesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="¿Listo para potenciar su empresa con tecnología?" 
        description="Contáctenos hoy mismo para una consulta gratuita y descubra cómo nuestros servicios pueden impulsar su negocio."
        buttonText="Solicitar Consulta Gratuita"
        buttonLink="/contacto"
      />
    </Layout>
  );
}