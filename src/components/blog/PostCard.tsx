import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/sanity';
import { urlFor } from '@/lib/sanity.image';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const formattedDate = new Date(post._createdAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative aspect-[16/9] w-full radius-lg overflow-hidden hover-subtle transition-opacity image-clip-rounded mb-4 md:mb-6"
             style={{ backgroundColor: 'var(--island-background)' }}>
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).width(400).height(225).url()}
              alt={post.mainImage.alt || post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
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
        
        {/* Post Info */}
        <div className="space-y-2">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2">
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="inline-block font-sans text-xs font-ultra-light tracking-wider uppercase px-2 py-1 radius-sm"
                  style={{ backgroundColor: 'var(--island-accent)', color: 'var(--text-secondary)' }}
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
          
          {/* Title */}
          <h3 className="font-sans text-sm font-light tracking-wide group-hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text-primary)' }}>
            {post.title}
          </h3>
          
          {/* Excerpt */}
          {post.excerpt && (
            <p className="font-sans text-xs font-ultra-light leading-relaxed"
               style={{ color: 'var(--text-secondary)' }}>
              {post.excerpt}
            </p>
          )}
          
          {/* Date */}
          <p className="font-sans text-xs font-ultra-light tracking-wide"
             style={{ color: 'var(--text-secondary)' }}>
            {formattedDate}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;