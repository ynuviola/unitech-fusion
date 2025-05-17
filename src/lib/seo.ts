type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
};

export const defaultSEO = {
  title: 'Unitech Fusion | Sinergia Tecnológica para tu Crecimiento',
  description: 'Servicios integrales de TI con IA aplicada, soporte proactivo, desarrollo de aplicaciones y gestión ágil de proyectos en Uruguay.',
  ogType: 'website' as const,
  ogImage: '/images/og-image.jpg',
};

export function getSEOTags(props: SEOProps = {}) {
  const seo = { ...defaultSEO, ...props };
  
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: seo.ogType,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    canonical: seo.canonical,
  };
}

export function getServiceSEO(service: string) {
  const services = {
    'soporte-ti': {
      title: 'Soporte TI Premium | Unitech Fusion',
      description: 'Servicio de soporte técnico profesional para empresas en Montevideo. Planes flexibles con asistencia remota y presencial, mantenimiento preventivo y correctivo.',
    },
    'desarrollo-software': {
      title: 'Desarrollo de Software a Medida | Unitech Fusion',
      description: 'Creamos aplicaciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu empresa. Desarrollo ágil y enfocado en resultados.',
    },
    'gestion-proyectos': {
      title: 'Gestión de Proyectos TI (PMO) | Unitech Fusion',
      description: 'Servicios de gestión de proyectos tecnológicos con metodologías ágiles. Optimizamos tiempos, recursos y resultados para tus iniciativas de TI.',
    },
    'transformacion-digital': {
      title: 'Transformación Digital con IA | Unitech Fusion',
      description: 'Implementamos soluciones de Inteligencia Artificial para optimizar procesos, mejorar la toma de decisiones y aumentar la competitividad de tu empresa.',
    },
  };
  
  return services[service] || defaultSEO;
}