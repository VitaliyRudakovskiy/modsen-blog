import postImage1 from '@/assets/images/blogPosts/blog-post-1.webp';
import postImage2 from '@/assets/images/blogPosts/blog-post-2.webp';
import postImage3 from '@/assets/images/blogPosts/blog-post-3.webp';
import postImage4 from '@/assets/images/blogPosts/blog-post-4.webp';
import { BlogPost } from '@/types/blogPost';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: postImage1,
    category: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    createdAt: '21th April, 2022',
    author: 'Robert Fox',
  },
  {
    id: 2,
    image: postImage2,
    category: 'Business',
    title: 'How to build rapport with your web design clients',
    createdAt: '4th December, 2023',
    author: 'Leslie Alexander',
  },
  {
    id: 3,
    image: postImage3,
    category: 'Startup',
    title: 'Logo design trends to avoid in 2022',
    createdAt: '28th February, 2024',
    author: 'Dianne Russell',
  },
  {
    id: 4,
    image: postImage4,
    category: 'Technology',
    title: '8 Figma design systems you can download for free today',
    createdAt: '3rd October, 2019',
    author: 'Floyd Miles',
  },
  {
    id: 5,
    image: postImage1,
    category: 'Economy',
    title: 'Font sizes in UI design: The complete guide to follow',
    createdAt: '1st September, 2023',
    author: 'Eleanor Pena',
  },
  {
    id: 6,
    image: postImage2,
    category: 'Technology',
    title: 'React is becoming more efficient. New trendr of React 19',
    createdAt: '13rd December, 2023',
    author: 'Jacob Jones',
  },
  {
    id: 7,
    image: postImage3,
    category: 'Startup',
    title: 'Some guy from Florida inserted AI into a snake: How was it',
    createdAt: '12th March, 2023',
    author: 'Guy Hawkins',
  },
  {
    id: 8,
    image: postImage4,
    category: 'Business',
    title: 'What is a social contract. Pros and cons',
    createdAt: '25th June, 2023',
    author: 'Jenny Wilson',
  },
  {
    id: 9,
    image: postImage1,
    category: 'Technology',
    title:
      'Figure has signed an agreement with Open AI to integrate the technology into its humanoid robots',
    createdAt: '11th January, 2024',
    author: 'Floyd Miles',
  },
  {
    id: 10,
    image: postImage3,
    category: 'Economy',
    title:
      'The head of the Federal Reserve Bank of Cleveland is still waiting for three rate cuts in 2024',
    createdAt: '14th March, 2024',
    author: 'Dianne Russell',
  },
];

export const postsPerPage = 5;
