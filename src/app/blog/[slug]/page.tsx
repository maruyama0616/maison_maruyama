/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { sanityFetch } from '@/lib/sanity.client';
import { postQuery, relatedPostsQuery } from '@/lib/sanity.queries';
import { Post } from '@/types/sanity';
import { urlFor } from '@/lib/sanity.image';
import { PortableText } from '@portabletext/react';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable all caching for debugging

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    console.log('Debugging: Fetching post with slug:', slug);
    const post = await sanityFetch<Post>({
      query: postQuery,
      params: { slug }
    });
    console.log('Debugging: Post result:', post ? 'Found' : 'Not found');
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

// 既存デザインパターンを踏襲したPortable Textコンポーネント
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="font-sans text-sm font-light leading-relaxed mb-6"
         style={{ color: 'var(--text-primary)' }}>
        {children}
      </p>
    ),
    h1: ({ children }: any) => (
      <h1 className="font-serif text-xl md:text-2xl font-light mb-8 md:mb-12 tracking-wider mt-8 md:mt-12"
          style={{ color: 'var(--text-primary)' }}>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-serif text-lg md:text-xl font-light mb-6 md:mb-8 tracking-wider mt-8 md:mt-10"
          style={{ color: 'var(--text-primary)' }}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-sans text-base font-medium mb-4 md:mb-6 tracking-wide mt-6 md:mt-8"
          style={{ color: 'var(--text-primary)' }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="card-spacing radius-lg my-6 md:my-8 italic"
                  style={{ backgroundColor: 'var(--island-accent)', color: 'var(--text-secondary)' }}>
        {children}
      </blockquote>
    )
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="font-sans text-sm font-light leading-relaxed mb-6 ml-6 space-y-2"
          style={{ color: 'var(--text-primary)' }}>
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="font-sans text-sm font-light leading-relaxed mb-6 ml-6 space-y-2"
          style={{ color: 'var(--text-primary)', listStyleType: 'decimal' }}>
        {children}
      </ol>
    )
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="relative pl-2" style={{ listStyleType: 'disc' }}>
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="relative pl-2">
        {children}
      </li>
    )
  },
  types: {
    image: ({ value }: any) => {
      if (!value) return null;
      return (
        <div className="my-6 md:my-8 radius-lg overflow-hidden image-clip-rounded"
             style={{ backgroundColor: 'var(--island-background)' }}>
          <Image
            src={urlFor(value).width(800).height(450).url()}
            alt={value.alt || ''}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      );
    }
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-sans font-light" style={{ color: 'var(--text-primary)' }}>
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="font-sans font-ultra-light" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </em>
    ),
    link: ({ value, children }: any) => (
      <Link href={value?.href || '#'} 
            className="font-sans font-light hover-subtle transition-opacity"
            style={{ color: 'var(--text-primary)' }}>
        {children}
      </Link>
    )
  }
};

export async function generateStaticParams() {
  const posts = await sanityFetch<{ slug: { current: string } }[]>({
    query: '*[_type == "post"] { slug }',
  });
  
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
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
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  console.log('Debugging: BlogPage called with slug:', slug);
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
      {/* Breadcrumb - 既存パターン踏襲 */}
      <section className="w-full pt-8 pb-4">
        <div style={{ 
          width: '100%', 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '0 24px' 
        }}>
          <nav className="flex items-center gap-2 font-sans text-xs font-ultra-light tracking-wide"
               style={{ color: 'var(--text-secondary)' }}>
            <Link href="/" className="hover-subtle transition-opacity uppercase">
              HOME
            </Link>
            <span>•</span>
            <Link href="/blog" className="hover-subtle transition-opacity uppercase">
              BLOG
            </Link>
            <span>•</span>
            <span className="uppercase" style={{ color: 'var(--text-primary)' }}>
              ARTICLE
            </span>
          </nav>
        </div>
      </section>

      {/* Article Header - 既存のトップページセクションスタイル踏襲 */}
      <section className="w-full section-spacing">
        <div style={{ 
          width: '100%', 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '0 24px',
          textAlign: 'center'
        }}>
            {/* Category Tags - 既存パターン */}
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

            {/* Title - 既存のセクションタイトルパターン踏襲 */}
            <h1 className="font-serif text-xl md:text-2xl small-caps font-light mb-8 md:mb-12 tracking-wider leading-tight"
                style={{ color: 'var(--text-primary)' }}>
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 font-sans text-xs font-ultra-light tracking-wide mb-8 md:mb-12"
                 style={{ color: 'var(--text-secondary)' }}>
              <span>{formatDate(post.publishedAt || post._createdAt)}</span>
              {post.readTime && <span>{post.readTime}分で読める</span>}
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="font-sans text-sm font-light leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12"
                 style={{ color: 'var(--text-secondary)' }}>
                {post.excerpt}
              </p>
            )}

            {/* Main Image - 既存のimage-clip-roundedパターン */}
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
      </section>

      {/* Article Content - 既存のセクションスペーシング踏襲 */}
      <section className="w-full section-spacing">
        <div style={{ 
          width: '100%', 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '0 24px' 
        }}>
          <article style={{ textAlign: 'left' }}>
            <PortableText value={post.content as any} components={portableTextComponents} />
          </article>
        </div>
      </section>

      {/* Tags Section - 既存パターン踏襲 */}
      {post.tags && post.tags.length > 0 && (
        <section className="w-full section-spacing">
          <div style={{ 
            width: '100%', 
            maxWidth: '800px', 
            margin: '0 auto', 
            padding: '0 24px',
            textAlign: 'center'
          }}>
              <h2 className="font-serif text-sm small-caps font-light mb-6 tracking-wider"
                  style={{ color: 'var(--text-primary)' }}>
                TAGS
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
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
        </section>
      )}

      {/* Related Posts - 既存のグリッドパターン完全踏襲 */}
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
                    {relatedPost.excerpt && (
                      <p className="font-sans text-xs font-ultra-light leading-relaxed"
                         style={{ color: 'var(--text-secondary)' }}>
                        {relatedPost.excerpt}
                      </p>
                    )}
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