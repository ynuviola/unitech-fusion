import { useState, useEffect } from 'react';

export default function LeadCapturePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
    >
      <h4>¿Quieres que te contactemos?</h4>
      <form>
        <input
          type="email"
          placeholder="Tu correo"
          style={{ padding: '8px', width: '200px', marginTop: '10px' }}
        />
        <br />
        <button
          type="submit"
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
