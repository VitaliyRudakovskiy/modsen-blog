import { StaticImageData } from 'next/image';

export type BlogPost = {
  id: number;
  image: StaticImageData;
  category: 'Economy' | 'Startup' | 'Business' | 'Technology';
  title: string;
  createdAt: string;
  author: string;
};
