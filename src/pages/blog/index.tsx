import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterSection from '../../components/sections/NewsletterSection';
import { blogPosts } from '../../data/blogPosts';
import { getAuthorInfo } from '../../utils/authorUtils';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtrar posts basados en el término de búsqueda
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout 
      title="Blog | Unitech Fusion"
      description="Artículos, guías y recursos sobre tecnología, transformación digital y soluciones IT para empresas."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Blog de Unitech Fusion</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Artículos, guías y recursos sobre tecnología, transformación digital y soluciones IT para empresas
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar artículos..." 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
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
                      <h3 className="text-xl font-montserrat font-bold mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                            <Image
                              src={getAuthorInfo(post.author).image}
                              alt={post.author}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl font-montserrat font-bold mb-2">No se encontraron artículos</h3>
                <p className="text-gray-600">Intenta con otros términos de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </Layout>
  );
}