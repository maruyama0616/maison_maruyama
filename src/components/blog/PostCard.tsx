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
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Image */}
          {post.mainImage && (
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(400).height(200).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {/* Categories */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.slice(0, 2).map((category) => (
                  <span
                    key={category._id}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <time dateTime={post._createdAt}>
                {formattedDate}
              </time>
              
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag._id}
                      className="text-xs text-gray-400 hover:text-gray-600"
                    >
                      #{tag.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;