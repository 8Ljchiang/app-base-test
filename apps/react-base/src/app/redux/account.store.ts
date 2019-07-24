export interface AccountStore {
	authToken: string;
  displayIdentifier: string;
  inviteToken: string;
	role: string;
}

export const defaultAccountStore: AccountStore = {
	authToken: '',
  displayIdentifier: '',
  inviteToken: '',
  role: '',
}
