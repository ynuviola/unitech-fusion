import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    // Mostrar el popup después de 30 segundos
    const timer = setTimeout(() => {
      // Verificar si el usuario ya cerró el popup anteriormente
      const popupClosed = localStorage.getItem('popupClosed');
      if (!popupClosed) {
        setIsOpen(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Guardar en localStorage para no mostrar de nuevo en esta sesión
    localStorage.setItem('popupClosed', 'true');
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    if (errorMessage && errorMessage.includes('captcha')) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verificar que el captcha se haya completado
    if (!captchaValue) {
      setErrorMessage('Por favor, complete el captcha para verificar que no es un robot.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Enviar el email al endpoint de API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          nombre: 'Suscriptor al E-book',
          mensaje: 'Solicitud de descarga del E-book "IA para PyMEs"',
          destinationEmail: 'unitechfusion41@gmail.com',
          subject: 'Nueva suscripción al E-book',
          captchaValue: captchaValue,
          isEbookRequest: true // Añadir este flag para identificar solicitudes de e-book
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al enviar el formulario');
      }
      
      setIsSuccess(true);
      setErrorMessage(null);
      // Cerrar el popup después de 3 segundos
      setTimeout(() => {
        setIsOpen(false);
        // Guardar en localStorage para no mostrar de nuevo
        localStorage.setItem('popupClosed', 'true');
      }, 3000);
      
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      setErrorMessage(error.message || 'Error al enviar el formulario. Inténtelo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full relative overflow-hidden">
        {/* Botón de cerrar */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Contenido del popup */}
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-dark mb-2">
              Descarga Gratis Nuestro E-book
            </h3>
            <p className="text-gray-600">
              "IA para PyMEs: Guía Práctica para Implementar Inteligencia Artificial en tu Negocio"
            </p>
          </div>
          
          {isSuccess ? (
            <div className="text-center py-4">
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>¡Gracias! Hemos enviado el e-book a tu correo electrónico.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="tu@email.com"
                />
              </div>
              
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}
              
              <div className="mb-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Clave de prueba
                  onChange={handleCaptchaChange}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !captchaValue}
                className="w-full bg-primary hover:bg-primary/90 text-white font-montserrat font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Enviando...' : 'Descargar E-book'}
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Al suscribirte, aceptas nuestra política de privacidad y recibirás contenido relevante sobre tecnología e IA.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}