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
    const newState = Object.assign({}, initialState, networkResponse.data);
    // Log.info('Changing Account Redux state', 'LoginReducer');
    // console.log(newState);
    return newState;
	}
	return initialState;
}

const logout = () => {
	return Object.assign({}, defaultAccountStore);
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
      const stuff = logout();
      console.log('logout', stuff);
      return stuff;
    case AccountActionType.LOGIN:
      const response = catchErrorInReduxReducer(login, state, `AccountReducer: ${AccountActionType.LOGIN}`)(state, action.payload);
      // console.log('accountReducer: new state');
      // console.log(response);

      return response;
      // return Object.assign({}, response, {
      //   authToken: 'authToken',
      //   displayIdentifier: 'helloWorld',
      //   inviteToken: 'inviteToken',
      //   role: 'role',
      // });
		case AccountActionType.SIGNUP:
			return catchErrorInReduxReducer(signup, state, `AccountReducer: ${AccountActionType.SIGNUP}`)(state, action.payload);;
		default:
			return state;
	}
}
