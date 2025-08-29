import { NextResponse } from 'next/server';
import { sanityFetch, client } from '@/lib/sanity.client';
import { postQuery } from '@/lib/sanity.queries';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') || 'Books';

  try {
    // Test environment variables
    const envCheck = {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      hasToken: !!process.env.SANITY_API_TOKEN,
      nodeEnv: process.env.NODE_ENV,
    };

    // Test direct client connectivity
    const directQuery = await client.fetch('*[_type == "post"] { _id, title, slug }');

    // Test basic connectivity with sanityFetch
    const allPosts = await sanityFetch({
      query: '*[_type == "post"] { _id, title, slug }',
    }) as { _id: string; title: string; slug: { current: string } }[];

    // Test specific slug query
    const specificPost = await sanityFetch({
      query: postQuery,
      params: { slug },
    });

    // Test with different slug variations
    const slugVariations = await Promise.all([
      sanityFetch({
        query: '*[_type == "post" && slug.current == $slug][0]',
        params: { slug: 'Books' }
      }),
      sanityFetch({
        query: '*[_type == "post" && slug.current == $slug][0]',
        params: { slug: 'books' }
      }),
      sanityFetch({
        query: '*[_type == "post" && slug.current match $slug][0]',
        params: { slug: 'Books*' }
      }),
    ]);

    return NextResponse.json({
      success: true,
      environment: envCheck,
      slug: slug,
      totalPosts: allPosts.length,
      allPosts: allPosts,
      directQuery: directQuery,
      specificPost: specificPost,
      slugVariations: {
        Books: slugVariations[0],
        books: slugVariations[1],
        BooksMatch: slugVariations[2],
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      slug: slug,
      timestamp: new Date().toISOString(),
    });
  }
}