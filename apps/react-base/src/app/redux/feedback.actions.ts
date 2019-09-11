import { ICreateFeedbackFormInput } from '../components/forms/site-feedback-form.validation';

export enum FeedbackActionType {
  UPVOTE_FEEDBACK_ITEM = 'UPVOTE_FEEDBACK_ITEM',
  CREATE_FEEDBACK_ITEM = 'CREATE_FEEDBACK_ITEM',
}

interface UpvoteFeedbackItemAction {
  type: FeedbackActionType.UPVOTE_FEEDBACK_ITEM,
  payload: { id: string },
}

interface CreateFeedbackItemAction {
  type: FeedbackActionType.CREATE_FEEDBACK_ITEM,
  payload: ICreateFeedbackFormInput
}

export type FeedbackActions =
UpvoteFeedbackItemAction
  | CreateFeedbackItemAction;


export interface IUpvoteFeedbackInput {
  id: string;
}

export function upvoteFeedbackItem(input: { id: string}) {
  return {
    type: FeedbackActionType.UPVOTE_FEEDBACK_ITEM,
    payload: input
  }
}

export function createFeedbackItem(input: ICreateFeedbackFormInput) {
  return {
    type: FeedbackActionType.CREATE_FEEDBACK_ITEM,
    payload: input
  }
}
