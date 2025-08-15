import { client } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/sanity.queries'
import PostCard from '@/components/blog/PostCard'
import type { Post } from '@/types/sanity'

export default async function BlogPage() {
  let posts: Post[] = []
  
  try {
    posts = await client.fetch<Post[]>(postsQuery) || []
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    posts = []
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 
            className="text-4xl font-light tracking-wide mb-4"
            style={{ 
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-serif)' 
            }}
          >
            Blog
          </h1>
          <p 
            className="text-lg font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Cool Life, Better Work - クールで洗練されたライフスタイルと効率的な生き方について
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p 
              className="text-lg font-light"
              style={{ color: 'var(--text-muted)' }}
            >
              記事がまだありません。最初の記事を投稿してみましょう！
            </p>
          </div>
        )}
      </div>
    </div>
  )
}