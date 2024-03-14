import { StaticImageData } from 'next/image';

import allAuthors from '@/constants/allAuthors';

const defineAuthorImage = (authorName: string): StaticImageData => {
  return allAuthors.find((man) => man.name === authorName)!.logo;
};

export default defineAuthorImage;
