import { NetworkResponseBuilder } from './../../util/NetworkResponseBuilder';
import { INetworkResponse } from './../../interfaces/INetworkResponse';
import { PostType, PostContext } from '../../../redux/posts.store';

export interface ICreatePostFormInput {
  title: string;
  message: string;
  context: string | PostContext;
  type: string | PostType;
}

export interface IPostsService {
  createPost(input: any): INetworkResponse<CreatePostResponse>;
}

interface CreatePostResponse {
  success: boolean;
}

export class MockPostsService implements IPostsService {
  private _apiClient;
  constructor() {}

  createPost(input: ICreatePostFormInput): INetworkResponse<CreatePostResponse> {
    return NetworkResponseBuilder.build({ success: true }, []);
  }
}
