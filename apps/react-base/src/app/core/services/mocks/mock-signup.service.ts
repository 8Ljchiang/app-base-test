import { NetworkResponseBuilder } from '../../util/NetworkResponseBuilder';
import { INetworkResponse } from '../../interfaces/INetworkResponse';
import { SignupInput } from '../../../redux/signup.actions';

export interface ISignupService {
	signup(info: SignupInput): INetworkResponse<SignupResponse>;
}

interface SignupResponse {
	success: boolean;
}

class MockSignupService implements ISignupService {
  private static _instance: MockSignupService;
	private constructor() {}
  static getInstance() {
    if (!MockSignupService._instance) {
      MockSignupService._instance = new MockSignupService();
    }
    return MockSignupService._instance;
  }

	signup(input: SignupInput): INetworkResponse<SignupResponse> {
		return NetworkResponseBuilder.build({ success: true }, []);
	}
}

const mockSignupServiceSingleton = MockSignupService.getInstance();
Object.freeze(mockSignupServiceSingleton);

export default mockSignupServiceSingleton;
