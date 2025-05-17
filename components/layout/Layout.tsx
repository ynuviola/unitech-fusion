import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header
        style={{
          padding: '20px',
          backgroundColor: '#222',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1>UniTech Fusion</h1>
      </header>

      <main style={{ padding: '20px' }}>{children}</main>

      <footer
        style={{
          padding: '20px',
          backgroundColor: '#222',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <p>&copy; {new Date().getFullYear()} UniTech Fusion. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
