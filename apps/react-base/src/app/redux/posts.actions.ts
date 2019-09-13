import { PostItem } from './posts.store';
export enum PostsActionType {
  CREATE_POST = 'CREATE_POST',
}

interface CreatePostAction {
  type: PostsActionType.CREATE_POST,
  payload: PostItem; // TODO: Link to create post form input type.
}

export type PostsActions =
  CreatePostAction;

// export interface ICreatePostInput {}

export function createPost(input: PostItem): CreatePostAction {
  return {
    type: PostsActionType.CREATE_POST,
    payload: input
  }
}
