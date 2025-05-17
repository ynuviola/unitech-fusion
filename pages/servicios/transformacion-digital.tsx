import Layout from '../../components/layout/Layout';
import PricingTable from '../../components/ui/PricingTable';
import FAQSection from '../../components/sections/FAQSection';
import CTASection from '../../components/sections/CTASection';
import CaseStudies from '../../components/sections/CaseStudies';

export default function TransformacionDigital() {
  const transformationPlans = [
    {
      name: "Diagnóstico Digital",
      price: "Desde USD 60", // Añadir la propiedad price
      description: "Evaluación completa de su madurez digital y hoja de ruta para la transformación",
      features: [
        { name: "Análisis de madurez digital", included: true },
        { name: "Evaluación de procesos", included: true },
        { name: "Análisis de tecnología actual", included: true },
        { name: "Identificación de oportunidades", included: true },
        { name: "Hoja de ruta de transformación", included: true },
        { name: "Implementación de soluciones", included: false },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=diagnostico-digital"
      }
    },
    {
      name: "Transformación Integral",
      price: "Desde USD 200", // Añadir la propiedad price
      description: "Programa completo de transformación digital para toda su organización",
      features: [
        { name: "Diagnóstico y hoja de ruta", included: true },
        { name: "Rediseño de procesos", included: true },
        { name: "Implementación tecnológica", included: true },
        { name: "Gestión del cambio", included: true },
        { name: "Capacitación de personal", included: true },
        { name: "Soporte post-implementación", included: true },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=transformacion-integral"
      },
      highlighted: true
    },
    {
      name: "Soluciones IA",
      price: "Desde USD 300", // Añadir la propiedad price
      description: "Implementación de soluciones específicas basadas en inteligencia artificial",
      features: [
        { name: "Análisis de caso de uso", included: true },
        { name: "Desarrollo de modelo de IA", included: true },
        { name: "Integración con sistemas", included: true },
        { name: "Automatización de procesos", included: true },
        { name: "Capacitación de usuarios", included: true },
        { name: "Monitoreo y optimización", included: true },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=soluciones-ia"
      }
    }
  ];

  const transformationFAQs = [
    {
      question: "¿Qué es exactamente la transformación digital?",
      answer: "La transformación digital es un proceso integral que implica reimaginar y rediseñar los procesos de negocio mediante la incorporación de tecnologías digitales. Va más allá de simplemente implementar nuevas herramientas; implica un cambio cultural y organizacional que permite a las empresas adaptarse al entorno digital actual, mejorar la experiencia del cliente, optimizar operaciones y crear nuevos modelos de negocio."
    },
    {
      question: "¿Cuánto tiempo toma completar un proceso de transformación digital?",
      answer: "El tiempo necesario para una transformación digital varía según el tamaño de la organización, la complejidad de sus procesos y el alcance del proyecto. Un diagnóstico inicial puede completarse en 4-6 semanas, mientras que una transformación integral puede extenderse de 6 meses a 2 años. Implementamos un enfoque por fases que permite obtener resultados tangibles a corto plazo mientras se avanza hacia objetivos más amplios."
    },
    {
      question: "¿Cómo manejan la resistencia al cambio durante la transformación?",
      answer: "La gestión del cambio es un componente crítico de nuestro enfoque. Implementamos una estrategia integral que incluye: comunicación clara y constante, participación temprana de los stakeholders, programas de capacitación adaptados a diferentes perfiles, identificación y apoyo de 'campeones' internos, y un sistema de feedback continuo. Nuestro objetivo es asegurar que las personas no solo adopten las nuevas tecnologías, sino que se conviertan en impulsores del cambio."
    },
    {
      question: "¿Qué tecnologías utilizan en sus proyectos de transformación digital?",
      answer: "Trabajamos con un amplio espectro de tecnologías según las necesidades específicas de cada cliente, incluyendo: cloud computing (AWS, Azure, Google Cloud), inteligencia artificial y machine learning, automatización robótica de procesos (RPA), Internet de las Cosas (IoT), blockchain, big data y analytics, y plataformas de experiencia digital. Seleccionamos las tecnologías más adecuadas para cada caso de uso específico."
    },
    {
      question: "¿Cómo miden el éxito de un proyecto de transformación digital?",
      answer: "Definimos métricas de éxito específicas al inicio del proyecto, alineadas con los objetivos de negocio del cliente. Estas pueden incluir: mejora en la eficiencia operativa, reducción de costos, aumento en ingresos, mejora en la satisfacción del cliente, reducción de tiempo de ciclo, aumento en la agilidad organizacional, y retorno de inversión (ROI). Implementamos dashboards que permiten monitorear estos KPIs en tiempo real."
    },
    {
      question: "¿Pueden implementar soluciones de IA en nuestra empresa?",
      answer: "Sí, nos especializamos en la implementación de soluciones basadas en inteligencia artificial adaptadas a casos de uso específicos. Nuestro enfoque incluye: identificación de oportunidades de aplicación de IA, selección o desarrollo de algoritmos apropiados, integración con sistemas existentes, capacitación del modelo con datos relevantes, y monitoreo continuo para asegurar resultados óptimos. Trabajamos con tecnologías como procesamiento de lenguaje natural, visión por computadora, análisis predictivo y sistemas de recomendación."
    }
  ];

  const caseStudies = [
    {
      title: "Transformación Digital en Empresa de Logística",
      description: "Implementamos un programa integral de transformación que digitalizó toda la cadena de suministro, desde la recepción de pedidos hasta la entrega final.",
      image: "/images/case-studies/digital-case1.jpg",
      results: ["Reducción del 35% en tiempos de entrega", "Aumento del 28% en precisión de inventario", "Mejora del 40% en satisfacción del cliente"]
    },
    {
      title: "Implementación de IA en Sector Retail",
      description: "Desarrollamos e implementamos soluciones de inteligencia artificial para optimizar la gestión de inventario y personalizar la experiencia del cliente.",
      image: "/images/case-studies/digital-case2.jpg",
      results: ["Reducción del 22% en costos de inventario", "Aumento del 18% en ventas cruzadas", "Incremento del 30% en retención de clientes"]
    }
  ];

  return (
    <Layout
      title="Transformación Digital | Unitech Fusion"
      description="Servicios de transformación digital para empresas. Reimaginamos sus procesos de negocio con tecnologías innovadoras para impulsar su competitividad."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Transformación Digital</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reimaginamos su negocio para la era digital. Combinamos estrategia, tecnología y gestión del cambio para impulsar su competitividad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Transforme su negocio para el futuro digital</h2>
              <p className="text-gray-700 mb-4">
                En Unitech Fusion, entendemos que la transformación digital no se trata solo de tecnología, sino de reimaginar cómo opera su negocio en la era digital. Nuestro enfoque integral combina estrategia, tecnología y gestión del cambio para ayudarle a adaptarse y prosperar en un entorno empresarial en constante evolución.
              </p>
              <p className="text-gray-700 mb-4">
                Trabajamos con usted para identificar oportunidades de innovación, optimizar procesos, mejorar la experiencia del cliente y desarrollar nuevos modelos de negocio habilitados por la tecnología.
              </p>
              <p className="text-gray-700">
                Ya sea que esté comenzando su viaje digital o buscando acelerar iniciativas existentes, nuestros expertos le guiarán en cada paso del camino hacia una transformación exitosa.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/services/digital-transformation.jpg" 
                alt="Transformación Digital" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-12 text-center">Nuestros Servicios de Transformación</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Estrategia Digital</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos estrategias digitales alineadas con sus objetivos de negocio y centradas en el cliente.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Diagnóstico de madurez digital
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Hoja de ruta de transformación
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Modelos de negocio digitales
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Transformación de Procesos</h3>
                <p className="text-gray-600 mb-4">
                  Rediseñamos y digitalizamos procesos para aumentar la eficiencia y agilidad de su organización.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Mapeo y análisis de procesos
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Automatización inteligente
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Optimización continua
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Innovación Tecnológica</h3>
                <p className="text-gray-600 mb-4">
                  Implementamos tecnologías emergentes para crear ventajas competitivas y nuevas oportunidades.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Inteligencia artificial
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Internet de las Cosas (IoT)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Big Data y Analytics
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
              Ofrecemos diferentes opciones para acompañarle en su viaje de transformación digital, desde el diagnóstico inicial hasta la implementación completa.
            </p>
          </div>
          
          <PricingTable 
            title="Planes de Transformación Digital"
            description="Seleccione el plan que mejor se adapte a sus necesidades de transformación"
            plans={transformationPlans} 
          />
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              ¿Necesita una solución personalizada? Contáctenos para una propuesta adaptada a sus necesidades específicas.
            </p>
            <a 
              href="/contacto?servicio=transformacion-personalizada" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Solicitar Propuesta Personalizada
            </a>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">Nuestro Enfoque</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implementamos un enfoque integral que aborda los aspectos tecnológicos, organizacionales y humanos de la transformación digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Diagnóstico</h3>
              <p className="text-gray-600">
                Evaluamos su madurez digital actual, identificamos oportunidades y definimos objetivos claros para la transformación.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Estrategia</h3>
              <p className="text-gray-600">
                Desarrollamos una hoja de ruta detallada con iniciativas priorizadas y métricas de éxito claramente definidas.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Implementación</h3>
              <p className="text-gray-600">
                Ejecutamos las iniciativas de transformación con un enfoque ágil, adaptándonos a los cambios y aprendizajes continuos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">4</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Evolución</h3>
              <p className="text-gray-600">
                Monitoreamos resultados, optimizamos continuamente y desarrollamos capacidades internas para la innovación sostenible.
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
              Descubra cómo hemos ayudado a empresas a transformarse digitalmente y obtener ventajas competitivas significativas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={transformationFAQs} 
        title="Preguntas Frecuentes sobre Transformación Digital" 
        description="Respuestas a las consultas más comunes sobre nuestros servicios de transformación"
      />

      {/* CTA Section */}
      <CTASection 
        title="¿Listo para iniciar su transformación digital?" 
        description="Contáctenos hoy mismo para discutir cómo podemos ayudarle a reimaginar su negocio para la era digital."
        buttonText="Solicitar Consulta Gratuita"
        buttonLink="/contacto?servicio=transformacion-digital"
      />
    </Layout>
  ); // Close TransformacionDigital component
}
