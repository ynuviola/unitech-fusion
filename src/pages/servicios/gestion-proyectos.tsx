import Layout from '../../components/layout/Layout';
import PricingTable from '../../components/ui/PricingTable';
import FAQSection from '../../components/sections/FAQSection';
import CTASection from '../../components/sections/CTASection';
import CaseStudies from '../../components/sections/CaseStudies';

export default function GestionProyectos() {
  const projectPlans = [
    {
      name: "Consultoría",
      price: "Desde USD 50", // Añadir la propiedad price
      description: "Asesoramiento experto para la planificación y gestión de sus proyectos de TI",
      features: [
        { name: "Evaluación inicial de necesidades", included: true },
        { name: "Definición de alcance y objetivos", included: true },
        { name: "Análisis de riesgos", included: true },
        { name: "Recomendaciones estratégicas", included: true },
        { name: "Selección de metodologías", included: true },
        { name: "Seguimiento post-implementación", included: false },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=consultoria-proyectos"
      }
    },
    {
      name: "Gestión Integral",
      price: "Desde USD 120", // Añadir la propiedad price
      description: "Gestión completa de su proyecto de TI desde la planificación hasta la implementación",
      features: [
        { name: "Planificación detallada", included: true },
        { name: "Gestión de recursos y equipos", included: true },
        { name: "Control de presupuesto", included: true },
        { name: "Gestión de riesgos", included: true },
        { name: "Informes de progreso semanales", included: true },
        { name: "Gestión de calidad", included: true },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=gestion-integral"
      },
      highlighted: true
    },
    {
      name: "PMO como Servicio",
      price: "Desde USD 200", // Añadir la propiedad price
      description: "Oficina de gestión de proyectos externa para supervisar múltiples iniciativas de TI",
      features: [
        { name: "Gestión de portafolio de proyectos", included: true },
        { name: "Estandarización de procesos", included: true },
        { name: "Gobierno de proyectos", included: true },
        { name: "Gestión de recursos compartidos", included: true },
        { name: "Métricas y KPIs", included: true },
        { name: "Mejora continua", included: true },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=pmo-servicio"
      }
    }
  ];

  const projectFAQs = [
    {
      question: "¿Qué metodologías de gestión de proyectos utilizan?",
      answer: "Adaptamos la metodología según las necesidades específicas de cada proyecto y cliente. Tenemos experiencia en metodologías tradicionales como PMBOK/PMI y Prince2, así como en enfoques ágiles como Scrum, Kanban y metodologías híbridas. Seleccionamos el enfoque más adecuado para maximizar la eficiencia y el éxito del proyecto."
    },
    {
      question: "¿Cómo garantizan el cumplimiento de plazos y presupuestos?",
      answer: "Implementamos un riguroso sistema de control y seguimiento que incluye: planificación detallada con hitos claros, gestión proactiva de riesgos, reuniones regulares de seguimiento, informes de progreso transparentes, y un enfoque de gestión de cambios estructurado. Nuestra experiencia nos permite anticipar desafíos y tomar medidas correctivas tempranas."
    },
    {
      question: "¿Pueden gestionar proyectos con equipos distribuidos o remotos?",
      answer: "Absolutamente. Tenemos amplia experiencia en la gestión de equipos distribuidos y remotos. Utilizamos herramientas colaborativas como Jira, Asana, Microsoft Teams y Slack para mantener una comunicación efectiva y asegurar que todos los miembros del equipo estén alineados, independientemente de su ubicación geográfica."
    },
    {
      question: "¿Qué tipo de proyectos de TI pueden gestionar?",
      answer: "Gestionamos una amplia variedad de proyectos de TI, incluyendo: implementación de sistemas ERP/CRM, desarrollo de software a medida, migraciones a la nube, transformación digital, implementación de infraestructura, proyectos de ciberseguridad, y despliegue de soluciones de inteligencia artificial y análisis de datos."
    },
    {
      question: "¿Cómo manejan los cambios en el alcance durante un proyecto?",
      answer: "Implementamos un proceso formal de gestión de cambios que incluye: documentación detallada de la solicitud, análisis de impacto en tiempo, costo y calidad, aprobación por parte de los stakeholders clave, y actualización de la planificación del proyecto. Este enfoque asegura que los cambios se implementen de manera controlada y transparente."
    },
    {
      question: "¿Ofrecen capacitación en gestión de proyectos para nuestro equipo interno?",
      answer: "Sí, ofrecemos programas de capacitación y mentoring en gestión de proyectos adaptados a las necesidades de su equipo. Estos programas pueden incluir formación en metodologías específicas, herramientas de gestión, habilidades de liderazgo y mejores prácticas. Nuestro objetivo es fortalecer las capacidades internas de su organización."
    }
  ];

  const caseStudies = [
    {
      title: "Migración a la Nube para Empresa Financiera",
      description: "Gestionamos la migración completa de la infraestructura de TI a la nube, minimizando el tiempo de inactividad y asegurando la continuidad del negocio.",
      image: "/images/case-studies/project-case1.jpg",
      results: ["Migración completada en un 15% menos del tiempo estimado", "Cero incidentes de seguridad", "Reducción del 25% en costos operativos de TI"]
    },
    {
      title: "Implementación de ERP para Empresa Manufacturera",
      description: "Lideramos la implementación de un sistema ERP completo, integrando todas las áreas de la empresa y optimizando los procesos de negocio.",
      image: "/images/case-studies/project-case2.jpg",
      results: ["Reducción del 40% en tiempo de procesamiento de pedidos", "Aumento del 20% en precisión de inventario", "ROI positivo en 18 meses"]
    }
  ];

  return (
    <Layout
      title="Gestión de Proyectos TI | Unitech Fusion"
      description="Servicios profesionales de gestión de proyectos de TI. Aseguramos el éxito de sus iniciativas tecnológicas con metodologías probadas y expertos certificados."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Gestión de Proyectos TI</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Maximizamos el éxito de sus proyectos tecnológicos con metodologías probadas, expertos certificados y un enfoque centrado en resultados.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Gestión profesional para sus proyectos de TI</h2>
              <p className="text-gray-700 mb-4">
                En Unitech Fusion, entendemos que el éxito de un proyecto tecnológico depende tanto de la calidad técnica como de una gestión eficiente. Nuestro equipo de gestores de proyectos certificados asegura que sus iniciativas de TI se entreguen a tiempo, dentro del presupuesto y cumpliendo todos los objetivos.
              </p>
              <p className="text-gray-700 mb-4">
                Aplicamos metodologías probadas y mejores prácticas de la industria para planificar, ejecutar y controlar cada aspecto de sus proyectos, minimizando riesgos y maximizando el retorno de inversión.
              </p>
              <p className="text-gray-700">
                Ya sea que necesite gestionar un proyecto específico o establecer una oficina de gestión de proyectos (PMO), nuestros servicios se adaptan a las necesidades específicas de su organización.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/services/project-management.jpg" 
                alt="Gestión de Proyectos TI" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-12 text-center">Nuestros Servicios de Gestión</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Consultoría en Gestión</h3>
                <p className="text-gray-600 mb-4">
                  Asesoramiento experto para optimizar la planificación y ejecución de sus proyectos de TI.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Evaluación de madurez
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Definición de metodologías
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Optimización de procesos
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">Gestión de Proyectos</h3>
                <p className="text-gray-600 mb-4">
                  Dirección integral de proyectos de TI desde la planificación hasta la implementación.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Planificación detallada
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Control de recursos
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Gestión de stakeholders
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">PMO como Servicio</h3>
                <p className="text-gray-600 mb-4">
                  Oficina de gestión de proyectos externa para supervisar y optimizar su portafolio de iniciativas.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Gestión de portafolio
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Estandarización de procesos
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Gobierno de proyectos
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
              Ofrecemos diferentes niveles de servicio para adaptarnos a las necesidades específicas de su organización y proyectos.
            </p>
          </div>
          
          <PricingTable 
            title="Planes de Gestión de Proyectos"
            description="Elija el plan que mejor se adapte a las necesidades de su empresa"
            plans={projectPlans}
          />
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              ¿Necesita una solución personalizada? Contáctenos para una propuesta adaptada a sus necesidades específicas.
            </p>
            <a 
              href="/contacto?servicio=gestion-proyectos-personalizada" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Solicitar Propuesta Personalizada
            </a>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">Nuestra Metodología</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aplicamos un enfoque estructurado y flexible que se adapta a las características específicas de cada proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Iniciación</h3>
              <p className="text-gray-600">
                Definimos el alcance, objetivos, stakeholders y expectativas del proyecto, estableciendo las bases para su éxito.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Planificación</h3>
              <p className="text-gray-600">
                Desarrollamos un plan detallado que incluye cronograma, presupuesto, recursos, riesgos y estrategias de comunicación.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Ejecución y Control</h3>
              <p className="text-gray-600">
                Implementamos el plan, monitoreamos el progreso, gestionamos cambios y aseguramos la calidad en cada etapa.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">4</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">Cierre</h3>
              <p className="text-gray-600">
                Formalizamos la aceptación, documentamos lecciones aprendidas y aseguramos una transición efectiva a operaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* FAQ Section */}
      <FAQSection 
        faqs={projectFAQs} 
        title="Preguntas Frecuentes sobre Gestión de Proyectos" 
        description="Respuestas a las consultas más comunes sobre nuestros servicios de gestión"
      />

      {/* CTA Section */}
      <CTASection 
        title="¿Necesita gestionar eficientemente sus proyectos de TI?" 
        description="Contáctenos hoy mismo para discutir cómo podemos ayudarle a maximizar el éxito de sus iniciativas tecnológicas."
        buttonText="Solicitar Consulta Gratuita"
        buttonLink="/contacto?servicio=gestion-proyectos"
      />
    </Layout>
  );
}