import { useState } from 'react';

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '150px',
          right: '20px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        }}
        aria-label="Abrir chatbot"
      >
        🤖
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '220px',
            right: '20px',
            width: '300px',
            height: '400px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            padding: '10px',
            zIndex: 1000,
          }}
        >
          <h4>Hola, soy el chatbot</h4>
          <p>¿En qué puedo ayudarte?</p>
          {/* Aquí puedes agregar integración con un bot real */}
        </div>
      )}
    </>
  );
}
