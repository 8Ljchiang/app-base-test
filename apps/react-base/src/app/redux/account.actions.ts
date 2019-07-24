export enum AccountActionType {
	LOGIN = 'ACCOUNT_LOGIN',
	LOGOUT = 'ACCOUNT_LOGOUT',
	SIGNUP = 'ACCOUNT_SIGNUP',
}

interface AccountLoginAction {
	type: AccountActionType.LOGIN,
	payload: { firstField: string, secondField: string }
}

interface AccountSignoutAction {
	type: AccountActionType.LOGOUT,
	payload: null
}

interface AccountSignupAction {
	type: AccountActionType.SIGNUP,
	payload: {
		username: string,
		email: string,
		inviteToken: string,
		password: string
	}
}

export type AccountActions =
	AccountLoginAction
	| AccountSignoutAction
	| AccountSignupAction;


export interface LoginInput {
	accessIdentifier: string;
	displayIdentifier: string;
}

export interface SignupInput {
	accessIdentifier: string;
	displayIdentifier: string;
	email: string;
	inviteToken: string;
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

export function signup(
	signupInfo: SignupInput
) {
	return {
		type: AccountActionType.SIGNUP,
		payload: signupInfo
	}
}
