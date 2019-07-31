import { SignupInput } from './signup.actions';
export interface AccountStore {
	authToken: string;
  displayIdentifier: string;
  inviteToken: string;
  role: string;
  signups: SignupInput[];
  inviteTokens: string[];
}

export const defaultAccountStore: AccountStore = {
	authToken: '',
  displayIdentifier: '',
  inviteToken: '',
  role: '',
  inviteTokens: [],
  signups: [
    {
      accessIdentifier: 'authToken1',
      email: 'user1@email.com',
      displayIdentifier: 'user1',
      inviteToken: 'inviteToken',
    }
  ]
}
