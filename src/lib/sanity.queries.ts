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
    mainImage,
    content,
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