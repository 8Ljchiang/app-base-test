import { SignupInput, SignupActionType } from './signup.actions';
export interface SignupStore {
  signups: SignupInput[];
}

export const defaultSignupStore: SignupStore = {
	signups: []
}
