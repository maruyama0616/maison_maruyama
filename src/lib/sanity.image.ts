import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';
import { SanityImage } from '@/types/sanity';

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImage | string) => builder.image(source);