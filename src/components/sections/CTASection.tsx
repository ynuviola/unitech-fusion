import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <Link 
          href={buttonLink} 
          className="inline-block bg-white text-primary font-montserrat font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}