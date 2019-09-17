export interface GameItem {
  id: string;
  createdAt: number;
  author: string;
  title: string;
  desc: string;
  type: string;
  category: string;
  repo: string;
}

export interface GamesStore {
  games: GameItem[];
}

const seedItems: GameItem[] = [
  {
    id: '1',
    createdAt: Date.now(),
    author: 'author-name',
    desc: 'game-desc-1',
    title: 'game-title-1',
    type: 'type',
    category: 'category',
    repo: 'game-repo-1'
  },
  {
    id: '2',
    createdAt: Date.now(),
    author: 'author-name',
    desc: 'game-desc-2',
    title: 'game-title-2',
    type: 'type',
    category: 'category',
    repo: 'game-repo-2'
  },
  {
    id: '3',
    createdAt: Date.now(),
    author: 'author-name',
    desc: 'game-desc-3',
    title: 'game-title-3',
    type: 'type',
    category: 'category',
    repo: 'game-repo-3'
  },
  {
    id: '4',
    createdAt: Date.now(),
    author: 'author-name',
    desc: 'game-desc-4',
    title: 'game-title-4',
    type: 'type',
    category: 'category',
    repo: 'game-repo-4'
  },
];

export const defaultGamesStore: GamesStore = {
  games: seedItems
}
