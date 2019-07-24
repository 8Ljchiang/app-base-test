import { AccountStore, defaultAccountStore } from './account.store';
import { LoginInput, SignupInput, AccountActions, AccountActionType } from './account.actions';

const login = (initialState: AccountStore, loginInput: LoginInput) => {
}

const logout = () => {
	return defaultAccountStore;
}

const signup = (initialState: AccountStore, signupInput: SignupInput) => {
}

export function accountReducer(
	state: AccountStore = defaultAccountStore,
	action: AccountActions
) {
	switch(action.type) {
		case AccountActionType.LOGIN:
      return state;
    case AccountActionType.LOGOUT:
      return state;
		case AccountActionType.SIGNUP:
			return state;
		default:
			return state;
	}
}
