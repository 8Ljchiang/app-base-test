import { NetworkResponseBuilder } from './../../util/NetworkResponseBuilder';
import { INetworkResponse } from './../../interfaces/INetworkResponse';
import { PostType, PostContext } from '../../../redux/posts.store';
import { IServiceCollection } from '../service-collection';

export interface ICreatePostFormInput {
  title: string;
  message: string;
  context: string;
  type: string;
}

export interface IPostsService {
  createPost(input: any): INetworkResponse<CreatePostResponse>;
}

interface CreatePostResponse {
  success: boolean;
}

export class MockPostsService implements IPostsService {
  constructor(private _serviceCollection: IServiceCollection) {}

  createPost(input: ICreatePostFormInput): INetworkResponse<CreatePostResponse> {
    return NetworkResponseBuilder.build({ success: true }, []);
  }
}
