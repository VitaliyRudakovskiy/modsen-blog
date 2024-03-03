import { StaticImageData } from 'next/image';

export type SliderPageProps = {
  image: StaticImageData;
  author: string;
  place: string;
  isActive: boolean;
};
