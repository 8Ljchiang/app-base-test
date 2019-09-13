import { AppFeature } from './../core/configs/feature.config';
import { SignupInput } from './signup.actions';

export interface FeedbackItem {
  id: string;
  createdAt: number;
  author: string;
  title: string;
  subject: string;
  desc: string;
  context: string;
  upvotes: number;
  issueType: string;
}

export interface FeedbackStore {
  feedbackItems: FeedbackItem[];
}

const seedItems: FeedbackItem[] = [
  {
    id: '1',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 4, 1),
    title: 'title-1',
    subject: 'subject-1',
    desc: 'desc-1',
    context: 'global',
    upvotes: 1,
    issueType: 'bug',
  },
  {
    id: '2',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 3, 1),
    title: 'title-2',
    subject: 'subject-2',
    desc: 'desc-2',
    context: 'global',
    upvotes: 2,
    issueType: 'feature-request',
  },
  {
    id: '3',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 2, 1),
    title: 'title-3',
    subject: 'subject-3',
    desc: 'desc-3',
    context: 'global',
    upvotes: 3,
    issueType: 'feedback',
  },
  {
    id: '4',
    author: "author-name",
    createdAt: new Date().setFullYear(2020, 1, 1),
    title: 'title-4',
    subject: 'subject-4',
    desc: 'desc-4',
    context: 'global',
    upvotes: 4,
    issueType: 'feedback',
  },
];

export const defaultFeedbackStore: FeedbackStore = {
  feedbackItems: seedItems
};
