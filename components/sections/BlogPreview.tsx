import React from 'react';

const BlogPreview = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Últimas publicaciones del blog</h2>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1rem' }}>
        <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
          <h3>¿Por qué digitalizar tu empresa?</h3>
          <p>Descubre cómo la transformación digital puede impulsar tu crecimiento.</p>
        </div>
        <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
          <h3>Automatización con IA</h3>
          <p>Aprende cómo la inteligencia artificial puede optimizar tus procesos.</p>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
