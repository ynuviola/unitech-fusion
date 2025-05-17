import Layout from '../../components/layout/Layout';
import PricingTable from '../../components/ui/PricingTable';
import FAQSection from '../../components/sections/FAQSection';
import CTASection from '../../components/sections/CTASection';
import CaseStudies from '../../components/sections/CaseStudies';

export default function SoporteTI() {
  const soportePlans = [
    {
      name: "Básico",
      price: "Suscripción mensual",
      description: "Ideal para pequeñas empresas con necesidades básicas de soporte",
      features: [
        { name: "Mantenimiento preventivo mensual", included: true },
        { name: "Asistencia remota (L-V 9-18h)", included: true },
        { name: "Reparaciones", included: "20% off" },
        { name: "Diagnóstico crítico gratuito", included: true },
        { name: "Visitas presenciales", included: false },
        { name: "Revisión de backups & antivirus", included: true },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=soporte-basico"
      }
    },
    {
      name: "Intermedio",
      price: "Suscripción mensual",
      description: "Para empresas en crecimiento con infraestructura más compleja",
      features: [
        { name: "Preventivo + chequeo de redes/servidores", included: true },
        { name: "Asistencia remota + presenciales", included: true },
        { name: "2 visitas presenciales/mes", included: true },
        { name: "Reparaciones para configuración incluidas", included: true },
        { name: "Incidentes críticos < 4h hábiles", included: true },
        { name: "Reporte mensual + recomendaciones", included: true },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=soporte-intermedio"
      },
      highlighted: true
    },
    {
      name: "Avanzado (24/7)",
      price: "Suscripción mensual",
      description: "Soporte completo para empresas que no pueden permitirse tiempo de inactividad",
      features: [
        { name: "Preventivo + correctivo sin límite", included: true },
        { name: "Visitas ilimitadas", included: true },
        { name: "Asistencia 24/7 remoto y presencial urgente", included: true },
        { name: "Reparaciones incluidas sin costo", included: true },
        { name: "Respuesta < 2h en cualquier momento", included: true },
        { name: "Inventario TI + asesoramiento bimensual", included: true },
      ],
      cta: {
        text: "Solicitar Cotización",
        link: "/contacto?servicio=soporte-avanzado"
      }
    }
  ];

  const faqs = [
    {
      question: "¿Qué incluye el mantenimiento preventivo?",
      answer: "El mantenimiento preventivo incluye limpieza de equipos, actualización de software, revisión de seguridad, optimización de rendimiento y verificación de backups."
    },
    {
      question: "¿Cómo funciona el soporte remoto?",
      answer: "Utilizamos herramientas seguras de acceso remoto para conectarnos a sus equipos y resolver problemas sin necesidad de desplazamiento, lo que agiliza la resolución de incidencias."
    },
    {
      question: "¿Qué es el SLA y cómo me beneficia?",
      answer: "El Acuerdo de Nivel de Servicio (SLA) garantiza tiempos máximos de respuesta ante incidencias. Dependiendo del plan, nos comprometemos a atender problemas críticos en menos de 2-4 horas."
    },
    {
      question: "¿Puedo cambiar de plan si mis necesidades cambian?",
      answer: "Sí, puede actualizar o cambiar su plan en cualquier momento con un preaviso de 30 días. Nos adaptamos al crecimiento y las necesidades cambiantes de su empresa."
    }
  ];

  return (
    <Layout 
      title="Soporte TI Premium | Unitech Fusion"
      description="Servicio de soporte técnico profesional para empresas en Montevideo. Planes flexibles con asistencia remota y presencial, mantenimiento preventivo y correctivo."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Soporte TI Premium</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Mantenga su infraestructura tecnológica funcionando sin interrupciones con nuestro servicio de soporte técnico profesional
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contacto?servicio=soporte-ti" 
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Solicitar Información
            </a>
            <a 
              href="https://wa.me/59897675436" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">Soporte técnico integral para su empresa</h2>
              <p className="text-gray-700 mb-4">
                En Unitech Fusion entendemos que el tiempo de inactividad tecnológica significa pérdidas para su negocio. Nuestro servicio de Soporte TI Premium está diseñado para mantener su infraestructura funcionando de manera óptima, prevenir problemas antes de que ocurran y resolver rápidamente cualquier incidencia.
              </p>
              <p className="text-gray-700 mb-6">
                Con técnicos certificados y procesos optimizados, ofrecemos diferentes niveles de servicio adaptados a las necesidades específicas de cada empresa, desde soporte básico hasta cobertura completa 24/7.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Resolución rápida de incidencias técnicas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Mantenimiento preventivo programado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Monitoreo proactivo de sistemas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Gestión de seguridad y backups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Asesoramiento tecnológico continuo</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/soporte-ti.jpg" 
                alt="Soporte TI Premium Unitech Fusion" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable 
        title="Planes de Soporte TI"
        description="Elija el plan que mejor se adapte a las necesidades de su empresa"
        plans={soportePlans}
      />

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra cómo nuestras soluciones han ayudado a empresas a optimizar su infraestructura tecnológica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/case-study-1.jpg" 
                  alt="Reducción del 85% en tiempo de inactividad" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold mb-3">Reducción del 85% en tiempo de inactividad</h3>
                <p className="text-gray-600 mb-2">Cliente: Distribuidora Nacional</p>
                <p className="text-gray-600">
                  Implementamos un sistema de monitoreo proactivo que redujo drásticamente el tiempo de inactividad de sus servidores críticos.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/case-study-2.jpg" 
                  alt="Modernización de infraestructura" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold mb-3">Modernización de infraestructura</h3>
                <p className="text-gray-600 mb-2">Cliente: Consultora Financiera</p>
                <p className="text-gray-600">
                  Actualizamos toda su infraestructura tecnológica, mejorando el rendimiento y reduciendo costos operativos en un 30%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Preguntas Frecuentes"
        description="Respuestas a las dudas más comunes sobre nuestro servicio de Soporte TI"
        faqs={faqs}
      />

      {/* CTA Section */}
      <CTASection 
        title="¿Necesita soporte técnico confiable?"
        description="Contáctenos hoy mismo para una evaluación gratuita de sus necesidades de TI"
        buttonText="Solicitar Evaluación"
        buttonLink="/contacto?servicio=soporte-ti"
      />
    </Layout>
  );
}