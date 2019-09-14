import { ICreatePostFormInput } from '../core/services/mocks/mock-posts.service';
export enum PostsActionType {
  CREATE_POST = 'CREATE_POST',
}

interface CreatePostAction {
  type: PostsActionType.CREATE_POST,
  payload: ICreatePostFormInput; // TODO: Link to create post form input type.
}

export type PostsActions =
  CreatePostAction;

// export interface ICreatePostInput {}

export function createPost(input: ICreatePostFormInput): CreatePostAction {
  return {
    type: PostsActionType.CREATE_POST,
    payload: input
  }
}
