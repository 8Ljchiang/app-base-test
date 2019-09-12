import { ICreateFeedbackFormInput } from './../components/forms/site-feedback-form.validation';
import { IUpvoteFeedbackInput, FeedbackActionType, FeedbackActions } from './feedback.actions';
import { FeedbackStore, defaultFeedbackStore } from './feedback.store';
import Log from '../core/services/log.service';
import { catchErrorInReduxReducer } from '../core/util/error-catchers';
import { reduxReducerWithServiceCollection } from '../core/services/service-collection';

const reducerName = 'FeedbackReducer';

const upvoteFeedbackItem = (initialState: FeedbackStore, payload: IUpvoteFeedbackInput) => {
  Log.info('FeedbackAction', FeedbackActionType.UPVOTE_FEEDBACK_ITEM, 'FeedbackReducer');

  // const FeedbackService: any = {};
  // const networkResponse = FeedbackService.upvoteFeedbackItem(payload.id);
  const feedbackItemId = payload.id;
  const networkResponse = { errors: [], data: true };
  if (networkResponse.errors && networkResponse.errors.length > 0) {
    Log.error(new Error(networkResponse.errors[0]), 'FeedbackService.upvoteFeedbackItem');
  }

  if (networkResponse.data === true) {
    const newFeedbackItems = initialState.feedbackItems.map(feedbackItem => {
      if (feedbackItem.id === feedbackItemId) {
        return { ...feedbackItem, upvotes: feedbackItem.upvotes + 1 }
      }
      return feedbackItem;
    })
    const newState = Object.assign({}, initialState, { feedbackItems: newFeedbackItems });
    return newState;
  }
  return initialState;
}

const createFeedbackItem = (initialState: FeedbackStore, payload: any) => {};

function createLogContext(name: string, reducerActionType: any) {
  return `${name}: ${reducerActionType}`;
}

export function feedbackReducer(
  state: FeedbackStore = defaultFeedbackStore,
  action: FeedbackActions
) {
  switch(action.type) {
    case FeedbackActionType.UPVOTE_FEEDBACK_ITEM:
      // TODO: add is authenticated hoc, making it available across various stores.
      return catchErrorInReduxReducer(upvoteFeedbackItem, state, createLogContext(reducerName, action.type))(state, action.payload);
    default:
      return state;
  }
}

export const feedbackReducerWithServiceCollection = reduxReducerWithServiceCollection(feedbackReducer)
