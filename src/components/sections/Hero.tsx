import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-0 md:pt-20 md:pb-0 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
              Sinergia Tecnológica para tu Crecimiento
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl">
              Aceleramos la transformación digital de tu empresa con servicios integrales de TI, IA aplicada y soporte proactivo
            </p>
            <Link 
              href="/contacto" 
              className="inline-block bg-white text-primary font-montserrat font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Consulta Gratuita
            </Link>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/hero-image.png"
                alt="Transformación Digital"
                width={600}
                height={500}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}