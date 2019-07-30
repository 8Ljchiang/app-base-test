import { SignupInput } from './signup.actions';
export interface AccountStore {
	authToken: string;
  displayIdentifier: string;
  inviteToken: string;
  role: string;
  signups: SignupInput[];
}

export const defaultAccountStore: AccountStore = {
	authToken: '',
  displayIdentifier: '',
  inviteToken: '',
  role: '',
  signups: [
    {
      accessIdentifier: 'authToken1',
      email: 'user1@email.com',
      displayIdentifier: 'user1',
      inviteToken: 'inviteToken',
    }
  ]
}
