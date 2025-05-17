import Layout from '../../components/layout/Layout';
import PricingTable from '../../components/ui/PricingTable';
import FAQSection from '../../components/sections/FAQSection';
import CTASection from '../../components/sections/CTASection';
import CaseStudies from '../../components/sections/CaseStudies';

export default function DesarrolloSoftware() {
  const developmentPlans = [
    {
      name: "Aplicación Web",
      price: "Desde USD 120", // Añadir esta propiedad
      description: "Desarrollo de aplicaciones web a medida para su negocio",
      features: [
        { name: "Diseño UI/UX personalizado", included: true },
        { name: "Desarrollo frontend y backend", included: true },
        { name: "Responsive design", included: true },
        { name: "Integración con APIs", included: true },
        { name: "Testing y QA", included: true },
        { name: "Mantenimiento post-lanzamiento", included: "3 meses" },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=desarrollo-web"
      }
    },
    {
      name: "Aplicación Móvil",
      price: "Desde USD 200", // Añadir esta propiedad
      description: "Desarrollo de aplicaciones nativas o híbridas para iOS y Android",
      features: [
        { name: "Diseño UI/UX para móviles", included: true },
        { name: "Desarrollo para iOS y Android", included: true },
        { name: "Integración con servicios en la nube", included: true },
        { name: "Notificaciones push", included: true },
        { name: "Testing en múltiples dispositivos", included: true },
        { name: "Publicación en App Stores", included: true },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=desarrollo-movil"
      },
      highlighted: true
    },
    {
      name: "Software Empresarial",
      price: "Desde USD 300", // Añadir esta propiedad
      description: "Soluciones empresariales personalizadas para optimizar procesos",
      features: [
        { name: "Análisis de procesos de negocio", included: true },
        { name: "Arquitectura escalable", included: true },
        { name: "Integración con sistemas existentes", included: true },
        { name: "Módulos personalizados", included: true },
        { name: "Capacitación de usuarios", included: true },
        { name: "Soporte técnico premium", included: "6 meses" },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=software-empresarial"
      }
    }
  ];

  const developmentFAQs = [
    {
      question: "¿Cuánto tiempo toma desarrollar una aplicación web o móvil?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Una aplicación web básica puede tomar de 2 a 3 meses, mientras que proyectos más complejos pueden extenderse a 6 meses o más. Durante la fase de planificación, estableceremos un cronograma detallado adaptado a sus necesidades específicas."
    },
    {
      question: "¿Qué tecnologías utilizan para el desarrollo?",
      answer: "Trabajamos con un amplio stack tecnológico que incluye React, Angular y Vue para frontend; Node.js, Python y .NET para backend; React Native y Flutter para desarrollo móvil; y bases de datos SQL y NoSQL según los requerimientos del proyecto. Seleccionamos las tecnologías más adecuadas para cada caso específico."
    },
    {
      question: "¿Cómo es el proceso de desarrollo de software?",
      answer: "Nuestro proceso sigue metodologías ágiles e incluye: 1) Análisis y planificación, 2) Diseño de UI/UX, 3) Desarrollo iterativo, 4) Testing y QA, 5) Implementación y despliegue, y 6) Mantenimiento y soporte. Mantenemos una comunicación constante con el cliente durante todo el ciclo."
    },
    {
      question: "¿Ofrecen mantenimiento después del lanzamiento?",
      answer: "Sí, todos nuestros planes incluyen un período de mantenimiento post-lanzamiento. Además, ofrecemos contratos de mantenimiento extendido que incluyen actualizaciones, corrección de errores, mejoras de rendimiento y soporte técnico continuo."
    },
    {
      question: "¿Pueden integrar mi software con sistemas existentes?",
      answer: "Absolutamente. Nos especializamos en desarrollar soluciones que se integran perfectamente con sus sistemas actuales, ya sean CRM, ERP, plataformas de e-commerce, pasarelas de pago u otros servicios. Nuestro equipo tiene amplia experiencia en desarrollo de APIs y middleware para facilitar estas integraciones."
    },
    {
      question: "¿Cómo garantizan la calidad del software?",
      answer: "Implementamos prácticas rigurosas de control de calidad, incluyendo pruebas unitarias, pruebas de integración, pruebas de rendimiento y pruebas de usuario. Utilizamos herramientas de CI/CD para automatizar pruebas y despliegues, asegurando que cada versión cumpla con los más altos estándares de calidad."
    }
  ];

  const caseStudies = [
    {
      title: "Plataforma de Gestión para Distribuidora Nacional",
      description: "Desarrollamos un sistema integral que automatizó la gestión de inventario, logística y ventas, reduciendo costos operativos en un 30%.",
      image: "/images/case-studies/software-case1.jpg",
      results: ["Reducción de 30% en costos operativos", "Aumento de 25% en eficiencia logística", "Implementación en 4 meses"]
    },
    {
      title: "Aplicación Móvil para Cadena de Retail",
      description: "Creamos una app que revolucionó la experiencia de compra, permitiendo escaneo de productos, pagos móviles y programa de fidelización.",
      image: "/images/case-studies/software-case2.jpg",
      results: ["Incremento de 40% en retención de clientes", "Aumento de 15% en valor promedio de compra", "Más de 50,000 descargas en 3 meses"]
    }
  ];

  return (
    <Layout
      title="Desarrollo de Software | Unitech Fusion"
      description="Servicios de desarrollo de software a medida para empresas. Aplicaciones web, móviles y sistemas empresariales con las últimas tecnologías."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Desarrollo de Software</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transformamos ideas en soluciones digitales innovadoras. Desarrollamos software a medida que impulsa el crecimiento de su negocio.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Software a la medida de sus necesidades</h2>
              <p className="text-gray-700 mb-4">
                En Unitech Fusion, entendemos que cada negocio tiene desafíos únicos. Por eso, desarrollamos soluciones de software personalizadas que se adaptan perfectamente a sus procesos y objetivos específicos.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestro equipo de desarrolladores experimentados trabaja con las tecnologías más avanzadas para crear aplicaciones web, móviles y sistemas empresariales que destacan por su funcionalidad, usabilidad y escalabilidad.
              </p>
              <p className="text-gray-700">
                Ya sea que necesite una aplicación desde cero o modernizar sistemas existentes, le ofrecemos soluciones robustas que impulsan la eficiencia operativa y la ventaja competitiva de su empresa.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/services/software-development.jpg" 
                alt="Desarrollo de Software" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-12 text-center">Nuestros Servicios de Desarrollo</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Aplicaciones Web</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos aplicaciones web responsivas, intuitivas y de alto rendimiento que funcionan perfectamente en cualquier dispositivo.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Sitios web corporativos
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Plataformas e-commerce
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Aplicaciones SaaS
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Aplicaciones Móviles</h3>
                <p className="text-gray-600 mb-4">
                  Creamos aplicaciones nativas e híbridas para iOS y Android que ofrecen experiencias de usuario excepcionales.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Apps nativas (iOS/Android)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Aplicaciones híbridas
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Integración con APIs
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Software Empresarial</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos sistemas empresariales personalizados que optimizan procesos y aumentan la productividad.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    ERPs personalizados
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Sistemas de gestión
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Integraciones con APIs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">Nuestros Planes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones adaptadas a diferentes necesidades y presupuestos. Todos nuestros proyectos incluyen análisis, diseño, desarrollo, testing y soporte post-lanzamiento.
            </p>
          </div>
          
          <PricingTable 
            plans={developmentPlans} 
            title="Planes de Desarrollo de Software"
            description="Seleccione el plan que mejor se adapte a sus necesidades"
          />
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              ¿Necesita una solución personalizada? Contáctenos para una cotización detallada.
            </p>
            <a 
              href="/contacto?servicio=desarrollo-personalizado" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Solicitar Cotización Personalizada
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">Nuestro Proceso de Desarrollo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos una metodología ágil que garantiza transparencia, calidad y resultados alineados con sus objetivos de negocio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Análisis y Planificación</h3>
              <p className="text-gray-600">
                Analizamos sus requerimientos, definimos el alcance y elaboramos un plan detallado con cronograma y presupuesto.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Diseño UI/UX</h3>
              <p className="text-gray-600">
                Creamos wireframes y prototipos interactivos para visualizar la interfaz y experiencia de usuario antes del desarrollo.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Desarrollo</h3>
              <p className="text-gray-600">
                Implementamos la solución utilizando metodologías ágiles con sprints y entregas incrementales para su revisión.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">4</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Testing y QA</h3>
              <p className="text-gray-600">
                Realizamos pruebas exhaustivas para garantizar la calidad, seguridad y rendimiento óptimo de la solución.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">5</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Implementación</h3>
              <p className="text-gray-600">
                Desplegamos la solución en el entorno de producción y realizamos la migración de datos si es necesario.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">6</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Soporte y Mantenimiento</h3>
              <p className="text-gray-600">
                Ofrecemos soporte continuo, actualizaciones y mejoras para mantener su software funcionando de manera óptima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra cómo nuestras soluciones de software han ayudado a empresas a transformar sus operaciones y alcanzar sus objetivos.
            </p>
          </div>
          <CaseStudies />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={developmentFAQs} 
        title="Preguntas Frecuentes sobre Desarrollo de Software" 
        description="Respuestas a las consultas más comunes sobre nuestros servicios de desarrollo"
      />

      {/* CTA Section */}
      <CTASection 
        title="¿Listo para desarrollar su próximo proyecto?" 
        description="Contáctenos hoy mismo para analizar sus ideas y cómo podemos ayudarle a convertirlas en realidad."
        buttonText="Solicitar Consulta Gratuita"
        buttonLink="/contacto?servicio=desarrollo-software"
      />
    </Layout>
  ); // Close the return statement
} // Close the DesarrolloSoftware component
