import { StaticImageData } from 'next/image';

export type Author = {
  id: number;
  logo: StaticImageData;
  name: string;
};
