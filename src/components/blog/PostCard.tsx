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
        <div className="relative aspect-[16/9] w-full radius-lg overflow-hidden hover-subtle transition-opacity image-clip-rounded"
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
      </Link>
    </article>
  );
};

export default PostCard;