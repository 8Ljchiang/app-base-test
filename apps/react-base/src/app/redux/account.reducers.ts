import AccountService from '../core/services/mocks/mock-account.service';
import Log from '../core/services/log.service';
import { AccountStore, defaultAccountStore } from './account.store';
import { LoginInput, SignupInput, AccountActions, AccountActionType } from './account.actions';
import { catchErrorInReduxReducer } from '../core/util/error-catchers';

const login = (initialState: AccountStore, loginInput: LoginInput) => {
  const networkResponse = AccountService.login(loginInput);
  if (networkResponse.errors && networkResponse.errors.length > 0) {
		Log.error(new Error(networkResponse.errors[0]), `AccountService.login`);
  }
  if (networkResponse.data) {
		return Object.assign(initialState, networkResponse.data);
	}
	return initialState;
}

const logout = () => {
	return defaultAccountStore;
}

const signup = (initialState: AccountStore, signupInput: SignupInput) => {
	const networkResult = AccountService.signup(signupInput);
	if (networkResult.errors && networkResult.errors.length > 0) {
		Log.error(new Error(networkResult.errors[0]), `AccountService.signup`);
	}
	if (networkResult.data) {
		return Object.assign(initialState, networkResult.data);
	}
	return initialState;
}

export function accountReducer(
	state: AccountStore = defaultAccountStore,
	action: AccountActions
) {
	switch(action.type) {
    case AccountActionType.LOGOUT:
      return logout();
    case AccountActionType.LOGIN:
      return catchErrorInReduxReducer(login, state, `AccountReducer: ${AccountActionType.LOGIN}`)(state, action.payload);
		case AccountActionType.SIGNUP:
			return catchErrorInReduxReducer(signup, state, `AccountReducer: ${AccountActionType.SIGNUP}`)(state, action.payload);;
		default:
			return state;
	}
}
