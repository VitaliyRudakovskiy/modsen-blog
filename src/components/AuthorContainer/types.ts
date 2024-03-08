import { ContainerProps } from '@/types';
import { Author } from '@/types/authors';

export type AuthorProps = {
  currentAuthor: Author;
};

export type AuthorContainerProps = ContainerProps & AuthorProps;
