import { NetworkResponseBuilder } from '../../util/NetworkResponseBuilder';
import { INetworkResponse } from '../../interfaces/INetworkResponse';
import { LoginInput } from '../../../redux/account.actions';
import uuidv4 from 'uuid/v4';

export interface IAccountService {
  login(info: LoginInput): INetworkResponse<LoginResponse>;
  logout(): void;
}

interface CreateInviteTokenResponse {
  inviteToken: string;
}

interface LoginResponse {
  authToken: string;
  displayIdentifier: string;
	role: string;
}

interface SignupResponse {
	success: boolean;
}

class MockAccountService implements IAccountService {
  private static _instance: MockAccountService;
	private constructor() {}
  static getInstance() {
    if (!MockAccountService._instance) {
      MockAccountService._instance = new MockAccountService();
    }
    return MockAccountService._instance;
  }

  login(input: LoginInput): INetworkResponse<LoginResponse> {
		const authToken = 'abc123';
    const role = 'basic';
    const inviteToken = 'inviteToken';
		const data = {
			authToken,
      displayIdentifier: input.displayIdentifier,
      inviteToken,
			role,
		}
		return NetworkResponseBuilder.build(data, []);
  }

  logout() {}

  createInviteToken(): INetworkResponse<CreateInviteTokenResponse> {
    const url = 'app/nx-react-base';
    const data = {
      inviteToken: uuidv4()
    }
    return NetworkResponseBuilder.build(data, []);
  }
}

const mockAccountServiceSingleton = MockAccountService.getInstance();
Object.freeze(mockAccountServiceSingleton);

export default mockAccountServiceSingleton;
