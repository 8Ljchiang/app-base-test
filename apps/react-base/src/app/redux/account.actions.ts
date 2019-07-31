import { SignupInput } from './signup.actions';

export enum AccountActionType {
	LOGIN = 'ACCOUNT_LOGIN',
	LOGOUT = 'ACCOUNT_LOGOUT',
  SIGNUP = 'ACCOUNT_SIGNUP',
  NEW_INVITE_TOKEN = 'ACCOUNT_NEW_INVITE_TOKEN',
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

interface AccountNewInviteTokenAction {
  type: AccountActionType.NEW_INVITE_TOKEN,
  payload: null
}

export type AccountActions =
	AccountLoginAction
  | AccountLogoutAction
  | AccountSignupAction
  | AccountNewInviteTokenAction;

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

export function newInviteToken() {
  return {
    type: AccountActionType.NEW_INVITE_TOKEN,
    payload: null
  }
}
