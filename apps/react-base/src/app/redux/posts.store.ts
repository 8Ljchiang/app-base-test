export type PostType = 'message' | 'tip' | 'resource' | 'story';
export type PostContext = 'pair' | 'exercise' | 'forge';

export interface PostItem {
  id: string;
  createdAt: number;
  author: string;
  title: string;
  message: string;
  context: PostContext;
  type: PostType;
}

export interface PostsStore {
  posts: PostItem[];
}

const seedItems: PostItem[] = [
  {
    id: '1',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 4, 1),
    title: 'title-1',
    message: 'desc-1',
    context: 'pair',
    type: 'message'
  },
  {
    id: '2',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 4, 2),
    title: 'title-1',
    message: 'desc-1',
    context: 'pair',
    type: 'message'
  },
  {
    id: '3',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 4, 3),
    title: 'title-1',
    message: 'desc-1',
    context: 'pair',
    type: 'tip'
  },
  {
    id: '4',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 4, 4),
    title: 'title-1',
    message: 'desc-1',
    context: 'pair',
    type: 'resource'
  },
  {
    id: '5',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 4, 5),
    title: 'title-1',
    message: 'desc-1',
    context: 'pair',
    type: 'story'
  },
  {
    id: '6',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 4, 6),
    title: 'title-1',
    message: 'desc-1',
    context: 'pair',
    type: 'message'
  }
];

export const defaultPostsStore: PostsStore = {
  posts: seedItems
};
