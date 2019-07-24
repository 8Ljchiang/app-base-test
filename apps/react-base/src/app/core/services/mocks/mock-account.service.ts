import { NetworkResponseBuilder } from '../../util/NetworkResponseBuilder';
import { INetworkResponse } from '../../interfaces/INetworkResponse';
import { LoginInput, SignupInput } from '../../../redux/account.actions';

export interface IAccountService {
  login(info: LoginInput): INetworkResponse<LoginResponse>;
	signup(info: SignupInput): INetworkResponse<SignupResponse>;
}

interface LoginResponse {
  authToken: string;
  displayIdentifier: string;
	role: string;
}

interface SignupResponse {
	success: boolean;
}

class MockAccountService {
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

	signup(input: SignupInput): INetworkResponse<SignupResponse> {
		return NetworkResponseBuilder.build({ success: true }, []);
	}
}

const mockAccountServiceSingleton = MockAccountService.getInstance();
Object.freeze(mockAccountServiceSingleton);

export default mockAccountServiceSingleton;
