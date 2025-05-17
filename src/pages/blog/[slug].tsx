import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterSection from '../../components/sections/NewsletterSection';
import { blogPosts, getRelatedPosts } from '../../data/blogPosts';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Encuentra el post que coincide con el slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // Si no se encuentra el post o la página está cargando
  if (!post && typeof slug === 'string') {
    return (
      <Layout title="Artículo no encontrado | Unitech Fusion">
        <div className="pt-32 pb-16 min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-montserrat font-bold mb-4">Artículo no encontrado</h1>
            <p className="mb-8">Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
            <Link href="/blog" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Volver al blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Si la página está cargando (slug es undefined)
  if (!post) {
    return (
      <Layout title="Cargando... | Unitech Fusion">
        <div className="pt-32 pb-16 min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-montserrat font-bold mb-4">Cargando...</h1>
          </div>
        </div>
      </Layout>
    );
  }

  // Función para obtener la imagen del autor según su nombre
  const getAuthorImage = (authorName: string) => {
    if (authorName === "Yasel Nuviola") {
      return "/images/team/team-1.jpg";
    } else if (authorName === "Lisandra Leyé") {
      return "/images/team/team-2.jpg";
    } else {
      return "/images/team/default-avatar.jpg";
    }
  };

  return (
    <Layout
      title={`${post.title} | Unitech Fusion Blog`}
      description={post.excerpt}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-sm font-medium bg-white/20 text-white px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-white/80 ml-3">
                {post.date} • {post.readTime} de lectura
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <Image
                  src={getAuthorImage(post.author)}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-white/80">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            {/* Share Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="font-montserrat font-bold mb-4">Comparte este artículo:</p>
              <div className="flex space-x-4">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://unitechfusion.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" className="bg-[#4267B2] text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://unitechfusion.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-montserrat font-bold mb-8">Artículos relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getRelatedPosts(post.slug).map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                    <Link href={`/blog/${relatedPost.slug}`} className="block">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                            {relatedPost.category}
                          </span>
                          <span className="text-xs text-gray-500 ml-2">
                            {relatedPost.date}
                          </span>
                        </div>
                        <h4 className="text-lg font-montserrat font-bold mb-2 hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </Layout>
  );
}