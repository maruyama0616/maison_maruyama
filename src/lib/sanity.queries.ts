import { groq } from 'next-sanity';

export const postsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    categories[]-> {
      _id,
      title,
      slug
    },
    tags[]-> {
      _id,
      title,
      slug
    }
  }
`;

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    content,
    publishedAt,
    categories[]-> {
      _id,
      title,
      slug
    },
    tags[]-> {
      _id,
      title,
      slug
    },
    "readTime": round(length(pt::text(content)) / 5 / 180),
    "headings": content[_type == "block" && style in ["h1", "h2", "h3", "h4", "h5", "h6"]] {
      _key,
      "text": pt::text(@),
      "level": pt::listItem(@.style)
    }
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

export const tagsQuery = groq`
  *[_type == "tag"] | order(title asc) {
    _id,
    title,
    slug
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && $categoryId in categories[]._ref] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    categories[]-> {
      _id,
      title,
      slug
    },
    tags[]-> {
      _id,
      title,
      slug
    }
  }
`;

export const postsByTagQuery = groq`
  *[_type == "post" && $tagId in tags[]._ref] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    categories[]-> {
      _id,
      title,
      slug
    },
    tags[]-> {
      _id,
      title,
      slug
    }
  }
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && $categoryId in categories[]._ref && _id != $currentId][0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        url
      },
      alt
    },
    publishedAt,
    categories[]-> {
      title,
      slug
    }
  }
`;