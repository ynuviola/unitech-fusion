import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title = 'Unitech Fusion | Sinergia Tecnológica para tu Crecimiento', 
  description = 'Servicios integrales de TI con IA aplicada, soporte proactivo, desarrollo de aplicaciones y gestión ágil de proyectos en Uruguay.'
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Updated favicon links */}
        <link rel="icon" href="/images/utf-logo.jpg" />
        <link rel="apple-touch-icon" href="/images/utf-logo.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/images/utf-logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}