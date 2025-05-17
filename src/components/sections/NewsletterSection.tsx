import NewsletterForm from '../ui/NewsletterForm';

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">Suscríbete a nuestro newsletter</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Recibe las últimas noticias, artículos y recursos directamente en tu bandeja de entrada
        </p>
        <div className="max-w-md mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}