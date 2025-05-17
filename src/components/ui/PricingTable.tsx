import { ReactNode } from 'react';

interface PlanFeature {
  name: string;
  included: boolean | string;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  cta: {
    text: string;
    link: string;
  };
  highlighted?: boolean;
}

interface PricingTableProps {
  title: string;
  description: string;
  plans: Plan[];
}

export default function PricingTable({ title, description, plans }: PricingTableProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.highlighted ? 'border-2 border-primary ring-4 ring-primary/20' : 'border border-gray-200'
              }`}
            >
              <div className={`p-6 ${plan.highlighted ? 'bg-primary text-white' : 'bg-white'}`}>
                <h3 className="text-xl font-montserrat font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold">{plan.price}</span>
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="p-6 bg-white">
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {typeof feature.included === 'boolean' ? (
                        <span className={`mr-2 mt-1 ${feature.included ? 'text-green-500' : 'text-red-500'}`}>
                          {feature.included ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </span>
                      ) : (
                        <span className="text-primary font-medium mr-2">{feature.included}</span>
                      )}
                      <span className="text-gray-700">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={plan.cta.link} 
                  className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.highlighted 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  {plan.cta.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}