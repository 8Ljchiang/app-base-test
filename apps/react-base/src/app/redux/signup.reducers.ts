import SignupService from '../core/services/mocks/mock-signup.service';
import { SignupStore, defaultSignupStore } from "./signup.store";

import Log from '../core/services/log.service';
import { SignupInput, SignupActions, SignupActionType } from './signup.actions';
import { catchErrorInReduxReducer } from '../core/util/error-catchers';

const signup = (initialState: SignupStore, signupInput: SignupInput) => {
  Log.info('SignupAction', SignupActionType.NEW, 'SignupReducer')
	const networkResult = SignupService.signup(signupInput);
	if (networkResult.errors && networkResult.errors.length > 0) {
		Log.error(new Error(networkResult.errors[0]), `AccountService.signup`);
	}
	if (networkResult.data && networkResult.data.success) {
		return Object.assign({}, initialState, { signups: [...initialState.signups, signupInput] });
	}
	return initialState;
}

export function signupReducer(
	state: SignupStore = defaultSignupStore,
	action: SignupActions
) {
	switch(action.type) {
    case SignupActionType.NEW:
      const response = catchErrorInReduxReducer(signup, state, `SignupReducer: ${SignupActionType.NEW}`)(state, action.payload);
      return response;
		default:
			return state;
	}
}
