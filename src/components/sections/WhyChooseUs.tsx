import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsProps {
  features: Feature[];
}

export default function WhyChooseUs({ features }: WhyChooseUsProps) {
  const getIconPath = (iconName: string) => {
    return `/images/icons/${iconName}.svg`;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos diferenciamos por nuestra experiencia, enfoque personalizado y compromiso con la excelencia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Image 
                  src={getIconPath(feature.icon)} 
                  alt={feature.title} 
                  width={28} 
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}