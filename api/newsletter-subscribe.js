// Edge API para suscripción al newsletter
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
    const { email, nombre, captchaValue } = await request.json();

    // Verificar que se proporcionó un email
    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: 'El correo electrónico es obligatorio.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Verificar el captcha (implementación simplificada)
    if (!captchaValue) {
      return new Response(
        JSON.stringify({ success: false, message: 'Se requiere verificación de captcha.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Aquí conectarías con una base de datos externa como MongoDB Atlas, Supabase, etc.
    // Por ahora, simulamos una respuesta exitosa
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: '¡Gracias por suscribirte a nuestro newsletter!' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error en la suscripción:', error);
    
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