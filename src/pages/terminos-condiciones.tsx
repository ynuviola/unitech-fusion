import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function TerminosCondiciones() {
  return (
    <Layout
      title="Términos y Condiciones | Unitech Fusion"
      description="Términos y condiciones de uso de los servicios de Unitech Fusion. Conozca nuestras políticas y acuerdos legales."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Términos y Condiciones</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Información legal sobre el uso de nuestros servicios y sitio web
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
                Estos Términos y Condiciones regulan el uso del sitio web de Unitech Fusion (en adelante, "nosotros", "nuestro" o "la Empresa") 
                y los servicios ofrecidos a través del mismo. Al acceder a nuestro sitio web y utilizar nuestros servicios, usted acepta estos 
                términos en su totalidad. Si no está de acuerdo con estos términos, por favor, no utilice nuestro sitio web ni nuestros servicios.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">2. Uso del Sitio Web</h2>
              <p>
                2.1. Usted se compromete a utilizar nuestro sitio web únicamente para fines lícitos y de una manera que no infrinja los derechos de 
                terceros ni restrinja o inhiba el uso y disfrute del sitio web por parte de terceros.
              </p>
              <p>
                2.2. Queda prohibido el uso del sitio web para transmitir material difamatorio, ofensivo, o que promueva la discriminación basada 
                en raza, sexo, religión, nacionalidad, discapacidad, orientación sexual o edad.
              </p>
              <p>
                2.3. Nos reservamos el derecho de restringir el acceso a algunas áreas de nuestro sitio web, o a todo el sitio, a usuarios 
                registrados o identificados.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">3. Propiedad Intelectual</h2>
              <p>
                3.1. Todo el contenido publicado en este sitio web, incluyendo, pero no limitado a, textos, gráficos, logotipos, iconos, imágenes, 
                clips de audio, descargas digitales y compilaciones de datos, es propiedad de Unitech Fusion o de sus proveedores de contenido y 
                está protegido por las leyes de propiedad intelectual uruguayas e internacionales.
              </p>
              <p>
                3.2. Queda estrictamente prohibida la reproducción, distribución, modificación, comunicación pública o cualquier otro acto que no 
                haya sido expresamente autorizado por el titular de los derechos de explotación.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">4. Servicios y Contratación</h2>
              <p>
                4.1. Los servicios ofrecidos por Unitech Fusion están descritos en nuestro sitio web. Nos reservamos el derecho de modificar, 
                actualizar o descontinuar cualquier servicio sin previo aviso.
              </p>
              <p>
                4.2. La contratación de nuestros servicios estará sujeta a la firma de un contrato específico que detallará las condiciones 
                particulares del servicio, incluyendo precio, duración y alcance.
              </p>
              <p>
                4.3. Los precios de nuestros servicios no incluyen impuestos aplicables, salvo que se indique expresamente lo contrario.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">5. Responsabilidad y Garantías</h2>
              <p>
                5.1. Unitech Fusion se esfuerza por mantener la información de este sitio web actualizada y precisa. Sin embargo, no garantizamos 
                la exactitud, integridad o actualidad de la información proporcionada.
              </p>
              <p>
                5.2. En la medida permitida por la ley, excluimos todas las garantías implícitas relacionadas con la información, los servicios y 
                los materiales contenidos en este sitio web.
              </p>
              <p>
                5.3. No seremos responsables por daños indirectos, especiales o consecuentes que resulten del uso o la imposibilidad de usar 
                nuestros servicios o este sitio web.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">6. Privacidad</h2>
              <p>
                6.1. Nuestra <Link href="/politica-privacidad" className="text-primary hover:underline">Política de Privacidad</Link> describe cómo recopilamos, 
                utilizamos y protegemos su información personal. Al utilizar nuestro sitio web y servicios, usted acepta nuestras prácticas de privacidad.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">7. Enlaces a Terceros</h2>
              <p>
                7.1. Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia.
              </p>
              <p>
                7.2. No tenemos control sobre el contenido de los sitios web de terceros y no asumimos responsabilidad por el contenido o las 
                prácticas de privacidad de dichos sitios.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">8. Modificaciones</h2>
              <p>
                8.1. Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor 
                inmediatamente después de su publicación en el sitio web.
              </p>
              <p>
                8.2. Es su responsabilidad revisar periódicamente estos Términos y Condiciones para estar al tanto de las actualizaciones.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">9. Ley Aplicable y Jurisdicción</h2>
              <p>
                9.1. Estos Términos y Condiciones se rigen por las leyes de la República Oriental del Uruguay.
              </p>
              <p>
                9.2. Cualquier disputa relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales de Montevideo, Uruguay.
              </p>

              <h2 className="text-2xl font-montserrat font-bold text-dark mt-8 mb-4">10. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Correo electrónico: info@unitechfusion.com</li>
                <li>Teléfono: +598 2XXX XXXX</li>
                <li>Dirección: Arenal Grande, La Comercial, Montevideo, Uruguay</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}