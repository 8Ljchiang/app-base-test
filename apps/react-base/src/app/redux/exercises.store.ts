export interface ExerciseItem {
  id: string;
  createdAt: number;
  author: string;
  title: string;
  desc: string;
  topic: string;
  category: string;
  domain: string;
  type: string;
}

export interface ExercisesStore {
  exercises: ExerciseItem[]
}

const seedItems: ExerciseItem[] = [
  {
    id: '1',
    createdAt: Date.now(),
    author: 'author-name',
    title: 'title-1',
    desc: 'desc-1',
    topic: 'typescript',
    category: 'practice',
    domain: 'backend',
    type: 'default'
  },
  {
    id: '2',
    createdAt: Date.now(),
    author: 'author-name',
    title: 'title-2',
    desc: 'desc-2',
    topic: 'typescript',
    category: 'practice',
    domain: 'backend',
    type: 'default'
  },
  {
    id: '3',
    createdAt: Date.now(),
    author: 'author-name',
    title: 'title-3',
    desc: 'desc-3',
    topic: 'typescript',
    category: 'practice',
    domain: 'backend',
    type: 'default'
  },
];

export const defaultExercisesStore: ExercisesStore = {
  exercises: seedItems
};
