import Image from 'next/image';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Optimización de infraestructura para empresa logística",
      description: "Redujimos los costos de TI en un 30% y mejoramos el rendimiento implementando soluciones en la nube y optimizando la red.",
      image: "/images/case-studies/logistics.jpg",
      results: ["30% reducción de costos", "99.9% de uptime", "Escalabilidad mejorada"]
    },
    {
      title: "Transformación digital para consultora financiera",
      description: "Implementamos un sistema de gestión documental con IA que redujo el tiempo de procesamiento de documentos en un 70%.",
      image: "/images/case-studies/finance.jpg",
      results: ["70% menos tiempo en procesamiento", "Acceso seguro remoto", "Automatización de reportes"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">Casos de Éxito</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que han mejorado su rendimiento con nuestras soluciones de soporte TI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-56 w-full">
                <Image 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-dark mb-3">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {caseStudy.description}
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h4 className="font-medium text-dark mb-2">Resultados:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}