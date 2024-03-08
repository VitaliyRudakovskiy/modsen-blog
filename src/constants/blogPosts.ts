import categoryIcon1 from '@icons/categories/business.svg';
import categoryIcon2 from '@icons/categories/economy.svg';
import categoryIcon3 from '@icons/categories/startup.svg';
import categoryIcon4 from '@icons/categories/technology.svg';

import postImage1 from '@/assets/images/blogPosts/blog-post-1.webp';
import postImage2 from '@/assets/images/blogPosts/blog-post-2.webp';
import postImage3 from '@/assets/images/blogPosts/blog-post-3.webp';
import postImage4 from '@/assets/images/blogPosts/blog-post-4.webp';
import { BlogPost } from '@/types/blogPost';

import TAGS from './tags';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: postImage1,
    category: 'Startup',
    icon: categoryIcon3,
    title: 'Design tips for designers that cover everything you need',
    createdAt: '21th April, 2022',
    author: 'Robert Fox',
    tags: [TAGS.DESIGN, TAGS.FIGMA],
  },
  {
    id: 2,
    image: postImage2,
    category: 'Business',
    icon: categoryIcon1,
    title: 'How to build rapport with your web design clients',
    createdAt: '4th December, 2023',
    author: 'Leslie Alexander',
    tags: [TAGS.CLIENTS, TAGS.UI, TAGS.BANKS],
  },
  {
    id: 3,
    image: postImage3,
    category: 'Startup',
    icon: categoryIcon3,
    title: 'Logo design trends to avoid in 2022',
    createdAt: '28th February, 2024',
    author: 'Dianne Russell',
    tags: [TAGS.DESIGN, TAGS.AI],
  },
  {
    id: 4,
    image: postImage4,
    category: 'Technology',
    icon: categoryIcon4,
    title: '8 Figma design systems you can download for free today',
    createdAt: '3rd October, 2019',
    author: 'Floyd Miles',
    tags: [TAGS.FIGMA, TAGS.DESIGN],
  },
  {
    id: 5,
    image: postImage1,
    category: 'Economy',
    icon: categoryIcon2,
    title: 'Font sizes in UI design: The complete guide to follow',
    createdAt: '1st September, 2023',
    author: 'Eleanor Pena',
    tags: [TAGS.FIGMA, TAGS.UI, TAGS.DESIGN],
  },
  {
    id: 6,
    image: postImage2,
    category: 'Technology',
    icon: categoryIcon4,
    title: 'React is becoming more efficient. New trend of React 19',
    createdAt: '13rd December, 2023',
    author: 'Jacob Jones',
    tags: [TAGS.REACT, TAGS.CONTRACT, TAGS.CLIENTS],
  },
  {
    id: 7,
    image: postImage3,
    category: 'Startup',
    icon: categoryIcon3,
    title: 'Some guy from Florida inserted AI into a snake: How was it',
    createdAt: '12th March, 2023',
    author: 'Guy Hawkins',
    tags: [TAGS.AI, TAGS.UI, TAGS.BANKS],
  },
  {
    id: 8,
    image: postImage4,
    category: 'Business',
    icon: categoryIcon1,
    title: 'What is a social contract. Pros and cons',
    createdAt: '25th June, 2023',
    author: 'Jenny Wilson',
    tags: [TAGS.CONTRACT, TAGS.AI],
  },
  {
    id: 9,
    image: postImage1,
    category: 'Technology',
    icon: categoryIcon4,
    title:
      'Figure has signed an agreement with Open AI to integrate the technology into its humanoid robots',
    createdAt: '11th January, 2024',
    author: 'Floyd Miles',
    tags: [TAGS.AI, TAGS.UI, TAGS.BANKS],
  },
  {
    id: 10,
    image: postImage3,
    category: 'Economy',
    icon: categoryIcon2,
    title:
      'The head of the Federal Reserve Bank of Cleveland is still waiting for three rate cuts in 2024',
    createdAt: '14th March, 2024',
    author: 'Dianne Russell',
    tags: [TAGS.BANKS, TAGS.FIGMA],
  },
];

export const postsPerPage = 5;
