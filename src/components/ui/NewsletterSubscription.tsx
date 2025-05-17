import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    if (errorMessage && errorMessage.includes('captcha')) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Por favor, introduce un correo electrónico válido.');
      return;
    }
    
    // Verificar que el captcha se haya completado
    if (!captchaValue) {
      setErrorMessage('Por favor, complete el captcha para verificar que no es un robot.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Enviar el email al endpoint de API
      const response = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          captchaValue,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al suscribirse al newsletter');
      }
      
      setIsSuccess(true);
      setEmail('');
      setErrorMessage(null);
      
      // Resetear el captcha
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      
      // Mostrar mensaje de éxito por 3 segundos
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error al suscribirse', error);
      setErrorMessage(error.message || 'Error al suscribirse. Inténtelo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {isSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">¡Gracias por suscribirte! Recibirás nuestras actualizaciones.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isSubmitting}
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Suscribirse'}
          </button>
        </form>
      )}
      
      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}
      
      <div className="mt-4">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'} // Clave de prueba
          onChange={handleCaptchaChange}
        />
      </div>
    </div>
  );
}