import { StaticImageData } from 'next/image';

export type AuthorCardProps = {
  id: number;
  logo: StaticImageData;
  name: string;
  role: string;
};
