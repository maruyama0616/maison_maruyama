import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { sanityFetch } from '@/lib/sanity.client';
import { postQuery, relatedPostsQuery } from '@/lib/sanity.queries';
import { Post } from '@/types/sanity';
import { urlFor } from '@/lib/sanity.image';
import { PortableText } from '@portabletext/react';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await sanityFetch<Post>({
      query: postQuery,
      params: { slug }
    });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

async function getRelatedPosts(categoryId: string, currentId: string): Promise<Post[]> {
  try {
    const relatedPosts = await sanityFetch<Post[]>({
      query: relatedPostsQuery,
      params: { categoryId, currentId }
    });
    return relatedPosts || [];
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

// Portable Text component types
interface PortableTextComponentProps {
  children?: React.ReactNode;
  value?: {
    _key?: string;
    alt?: string;
    code?: string;
    language?: string;
    href?: string;
  };
}

// Portable Text components using existing design patterns
const ptComponents = {
  block: {
    normal: ({ children }: PortableTextComponentProps) => (
      <p className="font-sans text-sm font-light leading-relaxed text-spacing" 
         style={{ color: 'var(--text-primary)' }}>
        {children}
      </p>
    ),
    h1: ({ children, value }: PortableTextComponentProps) => (
      <h1 id={value?._key} 
          className="font-serif text-lg small-caps font-light mb-8 md:mb-12 tracking-wider scroll-mt-24"
          style={{ color: 'var(--text-primary)' }}>
        {children}
      </h1>
    ),
    h2: ({ children, value }: PortableTextComponentProps) => (
      <h2 id={value?._key} 
          className="font-serif text-base small-caps font-light mb-6 md:mb-8 tracking-wider scroll-mt-24"
          style={{ color: 'var(--text-primary)' }}>
        {children}
      </h2>
    ),
    h3: ({ children, value }: PortableTextComponentProps) => (
      <h3 id={value?._key} 
          className="font-sans text-sm font-light mb-4 md:mb-6 tracking-wide uppercase scroll-mt-24"
          style={{ color: 'var(--text-primary)' }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }: PortableTextComponentProps) => (
      <blockquote className="card-spacing radius-lg my-6 md:my-8 italic"
                  style={{ backgroundColor: 'var(--island-accent)', color: 'var(--text-secondary)' }}>
        {children}
      </blockquote>
    )
  },
  types: {
    image: ({ value }: PortableTextComponentProps) => (
      <div className="my-6 md:my-8 radius-lg overflow-hidden image-clip-rounded"
           style={{ backgroundColor: 'var(--island-background)' }}>
        <Image
          src={urlFor(value).width(800).height(450).url()}
          alt={value.alt || ''}
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />
        {value.alt && (
          <p className="font-sans text-xs font-ultra-light text-center p-4"
             style={{ color: 'var(--text-secondary)' }}>
            {value.alt}
          </p>
        )}
      </div>
    ),
    code: ({ value }: PortableTextComponentProps) => (
      <div className="my-6 md:my-8">
        <pre className="radius-lg card-spacing overflow-x-auto"
             style={{ backgroundColor: 'var(--island-background)' }}>
          <code className="font-sans text-xs font-light"
                style={{ color: 'var(--text-primary)' }}>
            {value.code}
          </code>
        </pre>
      </div>
    )
  },
  marks: {
    strong: ({ children }: PortableTextComponentProps) => (
      <strong className="font-sans font-light" style={{ color: 'var(--text-primary)' }}>
        {children}
      </strong>
    ),
    em: ({ children }: PortableTextComponentProps) => (
      <em className="font-sans font-ultra-light" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </em>
    ),
    link: ({ value, children }: PortableTextComponentProps) => (
      <Link href={value?.href || '#'} 
            className="font-sans font-light hover-subtle transition-opacity"
            style={{ color: 'var(--text-primary)' }}>
        {children}
      </Link>
    )
  }
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: '記事が見つかりません | MARUYAMA JOURNAL',
      description: 'お探しの記事が見つかりませんでした。'
    };
  }

  return {
    title: `${post.title} | MARUYAMA JOURNAL`,
    description: post.excerpt || `${post.title}の記事です。`,
    openGraph: {
      title: `${post.title} | MARUYAMA JOURNAL`,
      description: post.excerpt || `${post.title}の記事です。`,
      type: 'article',
      publishedTime: post.publishedAt || post._createdAt,
      modifiedTime: post._updatedAt,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.categories && post.categories.length > 0
    ? await getRelatedPosts(post.categories[0]._id, post._id)
    : [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Breadcrumb Navigation - Following existing pattern */}
      <section className="w-full pt-8 pb-4">
        <div className="page">
          <nav className="flex items-center gap-2 font-sans text-xs font-ultra-light tracking-wide"
               style={{ color: 'var(--text-secondary)' }}>
            <Link href="/" className="hover-subtle transition-opacity uppercase">
              HOME
            </Link>
            <span>•</span>
            <Link href="/blog" className="hover-subtle transition-opacity uppercase">
              BLOG
            </Link>
            {post.categories && post.categories.length > 0 && (
              <>
                <span>•</span>
                <span className="uppercase">{post.categories[0].title}</span>
              </>
            )}
          </nav>
        </div>
      </section>

      {/* Article Header - Using existing typography patterns */}
      <section className="w-full section-spacing">
        <div className="page">
          <div className="max-w-4xl mx-auto text-center">
            {/* Category Tags */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-6 md:mb-8">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="inline-block font-sans text-xs font-ultra-light tracking-widest uppercase px-4 py-2 radius-lg mr-2"
                    style={{ backgroundColor: 'var(--island-accent)', color: 'var(--text-secondary)' }}
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Article Title */}
            <h1 className="font-serif text-xl md:text-2xl small-caps font-light mb-8 md:mb-12 tracking-wider leading-tight"
                style={{ color: 'var(--text-primary)' }}>
              {post.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 font-sans text-xs font-ultra-light tracking-wide mb-8 md:mb-12"
                 style={{ color: 'var(--text-secondary)' }}>
              <span>
                {formatDate(post.publishedAt || post._createdAt)}
              </span>
              {post._updatedAt && (
                <span>
                  更新: {formatDate(post._updatedAt)}
                </span>
              )}
              {post.readTime && (
                <span>
                  {post.readTime}分で読める
                </span>
              )}
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="font-sans text-sm font-light leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12"
                 style={{ color: 'var(--text-secondary)' }}>
                {post.excerpt}
              </p>
            )}

            {/* Main Image */}
            {post.mainImage && (
              <div className="aspect-[16/9] w-full radius-lg overflow-hidden image-clip-rounded hover-subtle transition-opacity"
                   style={{ backgroundColor: 'var(--island-background)' }}>
                <Image
                  src={urlFor(post.mainImage).width(1200).height(675).url()}
                  alt={post.mainImage.alt || post.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full section-spacing">
        <div className="page">
          <article className="max-w-3xl mx-auto">
            <PortableText value={post.content} components={ptComponents} />
          </article>

          {/* Tags Section */}
          {post.tags && post.tags.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12 md:mt-16 pt-8 border-t"
                 style={{ borderColor: 'var(--island-accent)' }}>
              <h3 className="font-serif text-sm small-caps font-light mb-6 tracking-wider"
                  style={{ color: 'var(--text-primary)' }}>
                TAGS
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag._id}
                    className="inline-block font-sans text-xs font-ultra-light tracking-widest uppercase px-3 py-1 radius-sm hover-subtle transition-opacity cursor-pointer"
                    style={{ backgroundColor: 'var(--island-background)', color: 'var(--text-secondary)' }}
                  >
                    #{tag.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts - Following existing grid pattern */}
      {relatedPosts.length > 0 && (
        <section className="w-full section-spacing">
          <div className="page">
            <h2 className="font-serif text-sm small-caps font-light mb-12 md:mb-16 text-center tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              RELATED POSTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
              {relatedPosts.slice(0, 3).map((relatedPost) => (
                <article key={relatedPost._id} className="group">
                  <Link href={`/blog/${relatedPost.slug.current}`}>
                    <div className="relative aspect-[16/9] w-full radius-lg overflow-hidden hover-subtle transition-opacity image-clip-rounded mb-4 md:mb-6"
                         style={{ backgroundColor: 'var(--island-background)' }}>
                      {relatedPost.mainImage ? (
                        <Image
                          src={urlFor(relatedPost.mainImage).width(400).height(225).url()}
                          alt={relatedPost.mainImage.alt || relatedPost.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center"
                             style={{ backgroundColor: 'var(--island-accent)' }}>
                          <span className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                                style={{ color: 'var(--text-secondary)' }}>
                            NO IMAGE
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-sans text-sm font-light tracking-wide mb-2 group-hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--text-primary)' }}>
                      {relatedPost.title}
                    </h3>
                    <p className="font-sans text-xs font-ultra-light leading-relaxed"
                       style={{ color: 'var(--text-secondary)' }}>
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}