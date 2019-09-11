import { AppFeature } from './../core/configs/feature.config';
import { SignupInput } from './signup.actions';

export interface FeedbackItem {
  id: number;
  author: string;
  createdAt: number;
  title: string;
  subject: string;
  desc: string;
  context: string;
  upvotes: number;
}

export interface FeedbackStore {
  feedbackItems: FeedbackItem[];
}

const seedItems: FeedbackItem[] = [

];

export const defaultFeedbackStore: FeedbackStore = {
  feedbackItems: []
};
