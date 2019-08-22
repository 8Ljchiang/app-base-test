import { AppFeature } from './../core/configs/feature.config';
import { SignupInput } from './signup.actions';

export interface ProfileStore {
  username: string;
  status: string;
  about: string;
  skills: string[];
  interests: string[];
}

export interface AccountStore {
	authToken: string;
  displayIdentifier: string;
  inviteToken: string;
  role: string;
  signups: SignupInput[];
  inviteTokens: string[];
  profile: ProfileStore;
  featureKeys: AppFeature[];
}

export const defaultAccountStore: AccountStore = {
	authToken: '',
  displayIdentifier: '',
  inviteToken: '',
  role: '',
  inviteTokens: [],
  featureKeys: [
    AppFeature.FEATURE_UNLOCK,
    AppFeature.ACCOUNT,
    // AppFeature.GATEWAY,
    // AppFeature.LOOM,
  ],
  profile: {
    about: 'about',
    username: 'user1',
    status: 'available',
    skills: ['javascript', 'typescript'],
    interests: ['graphql', 'react'],
  },
  signups: [
    {
      accessIdentifier: 'authToken1',
      email: 'user1@email.com',
      displayIdentifier: 'user1',
      inviteToken: 'inviteToken',
    }
  ]
}
