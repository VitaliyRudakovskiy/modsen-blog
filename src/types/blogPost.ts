import { StaticImageData } from 'next/image';

export type BlogPost = {
  id: number;
  image: StaticImageData;
  category: 'Economy' | 'Startup' | 'Business' | 'Technology';
  icon?: string;
  title: string;
  createdAt: string;
  author: string;
  tags?: string[];
};
