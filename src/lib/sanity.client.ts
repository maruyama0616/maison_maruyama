import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hc6o75o9',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true in production for faster, cached responses
});

export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hc6o75o9',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (preview?: boolean) => (preview ? previewClient : client);

interface SanityFetchOptions {
  query: string;
  params?: Record<string, unknown>;
  preview?: boolean;
  revalidate?: number;
}

export async function sanityFetch<T>({
  query,
  params = {},
  preview = false,
  revalidate = 60
}: SanityFetchOptions): Promise<T> {
  const client = getClient(preview);
  
  return client.fetch(query, params, {
    next: { revalidate }
  });
}