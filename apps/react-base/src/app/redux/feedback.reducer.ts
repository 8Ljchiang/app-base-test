import { IFeedbackService } from './../core/services/mocks/mock-feedback.service';
import { ICreateFeedbackFormInput } from './../components/forms/site-feedback-form.validation';
import { IUpvoteFeedbackInput, FeedbackActionType, FeedbackActions } from './feedback.actions';
import { FeedbackStore, defaultFeedbackStore } from './feedback.store';
import Log from '../core/services/log.service';
import { catchErrorInReduxReducer } from '../core/util/error-catchers';
import { reduxReducerWithServiceCollection } from '../core/services/service-collection';
import { IServiceCollection } from '../core/services/service-collection';

const reducerName = 'FeedbackReducer';

// TODO: Update resolver to have more realistic upvoting later.
const upvoteFeedbackResolver = (initialState: FeedbackStore, payload: IUpvoteFeedbackInput, feedbackService: IFeedbackService) => {
  Log.info('FeedbackAction', FeedbackActionType.UPVOTE_FEEDBACK_ITEM, 'FeedbackReducer');
  const networkResponse = feedbackService.upvoteFeedback(payload.id);
  const feedbackItemId = payload.id;
  if (networkResponse.errors && networkResponse.errors.length > 0) {
    Log.error(new Error(networkResponse.errors[0]), 'FeedbackService.upvoteFeedbackItem');
  }

  if (networkResponse.data.success === true) {
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

const createFeedbackItem = (initialState: FeedbackStore, payload: any, services: any) => {};

function createLogContext(name: string, reducerActionType: any) {
  return `${name}: ${reducerActionType}`;
}

function feedbackReducer(
  state: FeedbackStore = defaultFeedbackStore,
  action: FeedbackActions,
  services: IServiceCollection
) {
  switch(action.type) {
    case FeedbackActionType.UPVOTE_FEEDBACK_ITEM:
      const service = services.get('FeedbackService').getValue();
      console.log('feedbackReducer:', service);
      // TODO: add is authenticated hoc, making it available across various stores.
      return catchErrorInReduxReducer(upvoteFeedbackResolver, state, createLogContext(reducerName, action.type))(state, action.payload, service);
    default:
      return state;
  }
}

export const feedbackReducerWithServiceCollection = reduxReducerWithServiceCollection(feedbackReducer)
