import Link from 'next/link';
import Image from 'next/image';

// Importamos los datos de los artículos del blog desde el mismo lugar que usa la página de blog
import { blogPosts } from '../../data/blogPosts';

export default function BlogPreview() {
  // Tomamos solo los 3 últimos artículos publicados
  const latestPosts = [...blogPosts].slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-2">
              Últimos artículos
            </h2>
            <p className="text-xl text-gray-600">
              Recursos y consejos para optimizar tu infraestructura tecnológica
            </p>
          </div>
          <Link 
            href="/blog" 
            className="mt-4 md:mt-0 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Ver todos los artículos →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article key={post.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-primary font-medium hover:underline">
                    Leer más →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}