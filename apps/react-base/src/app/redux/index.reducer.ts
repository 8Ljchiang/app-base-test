import { combineReducers } from 'redux';
import { accountReducer } from './account.reducers';
import { signupReducer } from './signup.reducers';

export const rootReducer = combineReducers({
  account: accountReducer,
  // signup: signupReducer
});
