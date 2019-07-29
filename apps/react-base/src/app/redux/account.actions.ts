import { SignupInput } from './signup.actions';

export enum AccountActionType {
	LOGIN = 'ACCOUNT_LOGIN',
	LOGOUT = 'ACCOUNT_LOGOUT',
	SIGNUP = 'ACCOUNT_SIGNUP',
}

interface AccountLoginAction {
	type: AccountActionType.LOGIN,
	payload: { firstField: string, secondField: string }
}

interface AccountLogoutAction {
	type: AccountActionType.LOGOUT,
	payload: null
}

interface AccountSignupAction {
  type: AccountActionType.SIGNUP,
  payload: SignupInput
}

export type AccountActions =
	AccountLoginAction
  | AccountLogoutAction
  | AccountSignupAction;

export interface LoginInput {
	accessIdentifier: string;
	displayIdentifier: string;
}

export function login(loginInfo: LoginInput) {
	return {
		type: AccountActionType.LOGIN,
		payload: loginInfo
	}
}

export function logout() {
	return {
		type: AccountActionType.LOGOUT,
		payload: null,
	}
}

export function accountSignup(input: SignupInput) {
  return {
    type: AccountActionType.SIGNUP,
    payload: input
  }
}
