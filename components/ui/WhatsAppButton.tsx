import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '+1234567890'; // Cambia este número por el tuyo

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        fontSize: '24px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      }}
      aria-label="Chat on WhatsApp"
    >
      💬
    </button>
  );
}
