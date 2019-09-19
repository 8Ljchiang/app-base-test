import { uuidv4 } from 'uuid/v4';
import { NetworkResponseBuilder } from './../../util/NetworkResponseBuilder';
import { INetworkResponse } from './../../interfaces/INetworkResponse';
import { IServiceCollection } from '../service-collection';

export interface IAccountServiceTwo {
  login(info: any): INetworkResponse<any>; // TODO: Returns all account info
  logout(): INetworkResponse<any>; // Persists some data and clears out the rest of the data.
  getAppConfiguration(info: { version: any }): INetworkResponse<any>; // TODO: What is needed for app config
  createInviteToken(): INetworkResponse<any>;
  getInviteTokens(): INetworkResponse<any>;
}

export class MockAccountServiceTwo implements IAccountServiceTwo {
  constructor(private _serviceCollection: IServiceCollection) {}

  login(info: any): INetworkResponse<any> {
    const authToken = 'abc123';
    const role = 'basic';
    const inviteToken = 'inviteToken';
    const data = {
      authToken,
      displayIdentifier: info.displayIdentifier,
      inviteToken,
      role
    }
    return NetworkResponseBuilder.build(data, []);
  }

  logout() {
    return NetworkResponseBuilder.build({ success: true }, []);
  }

  getAppConfiguration(info: { version: any }): INetworkResponse<any> {
    return NetworkResponseBuilder.build({}, []);
  }

  createInviteToken(): INetworkResponse<any> {
    const data = {
      inviteToken: uuidv4()
    };
    return NetworkResponseBuilder.build(data, []);
  }

  getInviteTokens(): INetworkResponse<any> {
    return NetworkResponseBuilder.build({ tokens: [] }, []);
  }
}
