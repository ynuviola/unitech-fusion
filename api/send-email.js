// Edge API para envío de correos
export const config = {
  runtime: 'edge'
};

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, message: 'Method not allowed' }),
      {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const { 
      nombre, 
      email, 
      telefono, 
      empresa, 
      servicio, 
      mensaje, 
      captchaValue 
    } = await request.json();

    // Verificar campos obligatorios
    if (!email || !nombre || !mensaje) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Por favor complete todos los campos obligatorios.' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Verificar el captcha (implementación simplificada)
    if (!captchaValue) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Se requiere verificación de captcha.' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // En Vercel, puedes usar servicios como SendGrid, Mailgun o Resend para enviar correos
    // Aquí simularemos una respuesta exitosa
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: '¡Gracias por contactarnos! Te responderemos a la brevedad.' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error al procesar la solicitud. Por favor, inténtelo de nuevo.' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}