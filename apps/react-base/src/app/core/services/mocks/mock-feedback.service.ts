import { NetworkResponseBuilder } from '../../util/NetworkResponseBuilder';
import { INetworkResponse } from '../../interfaces/INetworkResponse';
import { SignupInput } from '../../../redux/signup.actions';
import { IServiceCollection } from '../service-collection';

export interface IFeedbackService {
	upvoteFeedback(id: string): INetworkResponse<UpvoteFeedbackResponse>;
}

interface UpvoteFeedbackResponse {
	success: boolean;
}

// class MockFeedbackService implements IFeedbackService {
//   private static _instance: MockFeedbackService;
// 	private constructor() {}
//   static getInstance() {
//     if (!MockFeedbackService._instance) {
//       MockFeedbackService._instance = new MockFeedbackService();
//     }
//     return MockFeedbackService._instance;
//   }

// 	upvoteFeedback(id: string): INetworkResponse<UpvoteFeedbackResponse> {
// 		return NetworkResponseBuilder.build({ success: true }, []);
// 	}
// }

export class MockFeedbackService implements IFeedbackService {
  // TODO: Should I have a mock api client inside the mock services.
  constructor(private _serviceCollection: IServiceCollection) {}

	upvoteFeedback(id: string): INetworkResponse<UpvoteFeedbackResponse> {
		return NetworkResponseBuilder.build({ success: true }, []);
	}
}
