import { IAppStore } from './../core/interfaces/IAppStore';
import { combineReducers } from 'redux';
import { accountReducer } from './account.reducers';
import { signupReducer } from './signup.reducers';
import { applicationReducer } from './application.reducers';
import { feedbackReducerWithServiceCollection } from './feedback.reducer';
import { postsReducerWithServiceCollection } from './posts.reducer';

// TODO Add redux logging middleware,
// TODO: add redux error handling middleware
// TODO Add error boundary react components
// TODO: Add react saga login ability to redirect with reach router
// TODO: Add react saga intercepts that allow checks for authentication before redux resolver action

const reducerSet: { [key in keyof IAppStore]: any} = {
  account: accountReducer,
  app: applicationReducer,
  feedback: feedbackReducerWithServiceCollection,
  posts: postsReducerWithServiceCollection,
  exercises: {}
  // signup: signupReducer
};

export const rootReducer = combineReducers(reducerSet);
