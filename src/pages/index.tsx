import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';
import BlogPreview from '../components/sections/BlogPreview';
// Eliminar la importación de NewsletterSection si existe

export default function Home() {
  const whyChooseUsFeatures = [
    {
      title: "Experiencia Comprobada",
      description: "Más de 10 años transformando empresas con soluciones tecnológicas innovadoras.",
      icon: "experience"
    },
    {
      title: "Enfoque Personalizado",
      description: "Soluciones adaptadas a las necesidades específicas de cada cliente y sector.",
      icon: "personalized"
    },
    {
      title: "Soporte Proactivo",
      description: "Anticipamos problemas antes de que afecten su operación con monitoreo constante.",
      icon: "support"
    },
    {
      title: "Tecnología de Vanguardia",
      description: "Implementamos las últimas innovaciones en IA y automatización para su negocio.",
      icon: "innovation"
    }
  ];

  return (
    <Layout 
      title="Unitech Fusion | Servicios de TI y Transformación Digital"
      description="Aceleramos la transformación digital de empresas con servicios integrales de TI, IA aplicada y soporte proactivo."
    >
      <Hero />
      <Services />
      <WhyChooseUs features={whyChooseUsFeatures} />
      <Testimonials />
      {/* Eliminar el componente NewsletterSection si existe */}
      <CTASection 
        title="¿Listo para transformar su empresa?"
        description="Contáctenos hoy para una consulta gratuita y descubra cómo podemos impulsar su negocio"
        buttonText="Agendar Consulta"
        buttonLink="/contacto"
      />
      <BlogPreview />
    </Layout>
  );
}