import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function PoliticaPrivacidad() {
  return (
    <Layout
      title="Política de Privacidad | Unitech Fusion"
      description="Conozca cómo Unitech Fusion recopila, utiliza y protege su información personal en cumplimiento con las leyes de protección de datos."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Política de Privacidad</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Cómo recopilamos, utilizamos y protegemos su información personal
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">1. Introducción</h2>
              <p>
                En Unitech Fusion (en adelante, "nosotros", "nuestro" o "la Empresa") nos comprometemos a proteger su privacidad. Esta Política de 
                Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información personal cuando utiliza nuestro sitio web y 
                nuestros servicios.
              </p>
              <p>
                Al utilizar nuestro sitio web y servicios, usted acepta las prácticas descritas en esta Política de Privacidad. Si no está de acuerdo 
                con esta política, por favor, no utilice nuestro sitio web ni nuestros servicios.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">2. Información que Recopilamos</h2>
              <p>
                Podemos recopilar los siguientes tipos de información:
              </p>
              <h3 className="text-xl font-montserrat font-semibold text-dark mt-6 mb-3">2.1. Información Personal</h3>
              <p>
                Información que puede identificarlo directamente, como su nombre, dirección de correo electrónico, número de teléfono, dirección postal, 
                información de la empresa y cargo, cuando usted:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Completa formularios en nuestro sitio web</li>
                <li>Se suscribe a nuestro boletín informativo</li>
                <li>Solicita información sobre nuestros servicios</li>
                <li>Contrata nuestros servicios</li>
                <li>Se comunica con nosotros</li>
              </ul>

              <h3 className="text-xl font-montserrat font-semibold text-dark mt-6 mb-3">2.2. Información de Uso</h3>
              <p>
                Información sobre cómo utiliza nuestro sitio web, como:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas</li>
                <li>Tiempo de permanencia en el sitio</li>
                <li>Enlaces en los que hace clic</li>
              </ul>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">3. Cómo Utilizamos su Información</h2>
              <p>
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                <li>Procesar y completar transacciones</li>
                <li>Enviar información técnica, actualizaciones, alertas de seguridad y mensajes de soporte</li>
                <li>Responder a sus comentarios, preguntas y solicitudes</li>
                <li>Comunicarnos con usted sobre productos, servicios, ofertas y eventos</li>
                <li>Monitorear y analizar tendencias, uso y actividades relacionadas con nuestros servicios</li>
                <li>Detectar, prevenir y abordar problemas técnicos y de seguridad</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">4. Base Legal para el Procesamiento</h2>
              <p>
                Procesamos su información personal basándonos en las siguientes bases legales:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Consentimiento:</strong> Cuando ha dado su consentimiento explícito para el procesamiento de sus datos personales.</li>
                <li><strong>Ejecución de un contrato:</strong> Cuando el procesamiento es necesario para la ejecución de un contrato con usted.</li>
                <li><strong>Intereses legítimos:</strong> Cuando el procesamiento es necesario para nuestros intereses legítimos o los de un tercero.</li>
                <li><strong>Obligación legal:</strong> Cuando el procesamiento es necesario para cumplir con una obligación legal.</li>
              </ul>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">5. Compartir Información</h2>
              <p>
                Podemos compartir su información personal con:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a proporcionar nuestros servicios (procesamiento de pagos, alojamiento web, análisis de datos).</li>
                <li><strong>Socios comerciales:</strong> Con su consentimiento, podemos compartir su información con socios comerciales para ofrecerle ciertos productos, servicios o promociones.</li>
                <li><strong>Cumplimiento legal:</strong> Cuando sea necesario para cumplir con la ley, procesos legales o solicitudes gubernamentales.</li>
                <li><strong>Protección de derechos:</strong> Para proteger los derechos, la propiedad o la seguridad de Unitech Fusion, nuestros clientes u otros.</li>
              </ul>
              <p>
                No vendemos ni alquilamos su información personal a terceros.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">6. Cookies y Tecnologías Similares</h2>
              <p>
                Utilizamos cookies y tecnologías similares para recopilar información sobre su actividad, navegador y dispositivo. Las cookies son 
                pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.
              </p>
              <p>
                Utilizamos los siguientes tipos de cookies:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio web.</li>
                <li><strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.</li>
                <li><strong>Cookies de funcionalidad:</strong> Permiten recordar las elecciones que hace para mejorar su experiencia.</li>
                <li><strong>Cookies de publicidad:</strong> Se utilizan para mostrar anuncios relevantes y atractivos.</li>
              </ul>
              <p>
                Puede configurar su navegador para rechazar todas o algunas cookies, o para alertarle cuando los sitios web establecen o acceden a las cookies.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">7. Seguridad de la Información</h2>
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger su información personal contra acceso, 
                divulgación, alteración y destrucción no autorizados.
              </p>
              <p>
                Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Por lo tanto, no podemos 
                garantizar su seguridad absoluta.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">8. Retención de Datos</h2>
              <p>
                Conservamos su información personal durante el tiempo necesario para cumplir con los fines descritos en esta Política de Privacidad, 
                a menos que la ley exija o permita un período de retención más largo.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">9. Sus Derechos</h2>
              <p>
                Dependiendo de su ubicación, puede tener los siguientes derechos con respecto a su información personal:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Acceder a su información personal</li>
                <li>Corregir datos inexactos o incompletos</li>
                <li>Eliminar su información personal</li>
                <li>Restringir u oponerse al procesamiento de sus datos</li>
                <li>Portabilidad de datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p>
                Para ejercer estos derechos, póngase en contacto con nosotros utilizando la información proporcionada en la sección "Contacto".
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">10. Transferencias Internacionales de Datos</h2>
              <p>
                Su información personal puede ser transferida y procesada en países distintos a aquel en el que reside. Estos países pueden tener 
                leyes de protección de datos diferentes a las de su país.
              </p>
              <p>
                Cuando transferimos su información personal a otros países, tomamos medidas para garantizar que se proporcionen salvaguardias adecuadas 
                para proteger su información y que se cumplan las leyes aplicables.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">11. Privacidad de los Niños</h2>
              <p>
                Nuestro sitio web y servicios no están dirigidos a personas menores de 18 años. No recopilamos a sabiendas información personal de 
                niños menores de 18 años. Si descubrimos que hemos recopilado información personal de un niño menor de 18 años, tomaremos medidas 
                para eliminar esa información lo antes posible.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">12. Cambios a esta Política de Privacidad</h2>
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas de información o por otros 
                motivos operativos, legales o regulatorios.
              </p>
              <p>
                Le notificaremos cualquier cambio material publicando la nueva Política de Privacidad en esta página y, cuando sea apropiado, 
                le notificaremos por correo electrónico.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">13. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de privacidad, puede contactarnos a través de:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Correo electrónico: privacidad@unitechfusion.com</li>
                <li>Teléfono: +598 2XXX XXXX</li>
                <li>Dirección: Arenal Grande, La Comercial, Montevideo, Uruguay</li>
              </ul>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">14. Autoridad de Protección de Datos</h2>
              <p>
                Si no está satisfecho con nuestra respuesta a su solicitud de privacidad o tiene alguna inquietud sobre cómo manejamos su información 
                personal, puede presentar una queja ante la Unidad Reguladora y de Control de Datos Personales (URCDP) de Uruguay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}