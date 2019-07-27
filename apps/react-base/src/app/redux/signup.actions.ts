export enum SignupActionType {
	NEW = 'SIGNUP_NEW',
}

interface SignupNewAction {
	type: SignupActionType.NEW,
	payload: {
		username: string,
		email: string,
		inviteToken: string,
		password: string
	}
}

export type SignupActions =
  SignupNewAction;

export interface SignupInput {
  accessIdentifier: string;
  displayIdentifier: string;
  email: string;
  inviteToken: string;
}

export function signup(
	signupInfo: SignupInput
) {
	return {
		type: SignupActionType.NEW,
		payload: signupInfo
	}
}
