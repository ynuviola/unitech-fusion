import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/utf-logo.jpg" 
              alt="Unitech Fusion" 
              width={150} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors font-medium`}>
              Inicio
            </Link>
            <Link href="/servicios" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors font-medium`}>
              Servicios
            </Link>
            <Link href="/blog" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors font-medium`}>
              Blog
            </Link>
            <Link href="/nosotros" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors font-medium`}>
              Nosotros
            </Link>
            <Link href="/contacto" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors font-medium`}>
              Contacto
            </Link>
            <a 
              href="https://wa.me/59897675436?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors font-medium`}
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Mejorado */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 z-50">
            <nav className="flex flex-col py-4">
              <Link 
                href="/" 
                className={`px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-primary transition-colors font-medium ${router.pathname === '/' ? 'text-primary bg-blue-50' : ''}`}
              >
                Inicio
              </Link>
              <Link 
                href="/servicios" 
                className={`px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-primary transition-colors font-medium ${router.pathname.startsWith('/servicios') ? 'text-primary bg-blue-50' : ''}`}
              >
                Servicios
              </Link>
              <Link 
                href="/blog" 
                className={`px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-primary transition-colors font-medium ${router.pathname.startsWith('/blog') ? 'text-primary bg-blue-50' : ''}`}
              >
                Blog
              </Link>
              <Link 
                href="/nosotros" 
                className={`px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-primary transition-colors font-medium ${router.pathname === '/nosotros' ? 'text-primary bg-blue-50' : ''}`}
              >
                Nosotros
              </Link>
              <Link 
                href="/contacto" 
                className={`px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-primary transition-colors font-medium ${router.pathname === '/contacto' ? 'text-primary bg-blue-50' : ''}`}
              >
                Contacto
              </Link>
              <a 
                href="https://wa.me/59897675436?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 mt-2 mx-4 bg-primary text-white rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}