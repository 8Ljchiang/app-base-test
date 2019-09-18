import { ICreateGameFormInput } from './../../../redux/games.actions';
import { NetworkResponseBuilder } from './../../util/NetworkResponseBuilder';
import { INetworkResponse } from './../../interfaces/INetworkResponse';
import { IServiceCollection } from '../service-collection';

export interface IGamesService {
  createGame(input: ICreateGameFormInput): INetworkResponse<CreateGameResponse>;
  upvoteGame(id: string): INetworkResponse<UpvoteGameResponse>;
}

interface CreateGameResponse {
  success: boolean;
}

interface UpvoteGameResponse {
  success: boolean;
}

export class MockGamesService implements IGamesService {
  constructor(private _serviceCollection: IServiceCollection) {}

  createGame(input: ICreateGameFormInput): INetworkResponse<CreateGameResponse> {
    return NetworkResponseBuilder.build({ success: true }, []);
  }

  upvoteGame(input: string): INetworkResponse<UpvoteGameResponse> {
    return NetworkResponseBuilder.build({ success: true }, []);
  }
}
