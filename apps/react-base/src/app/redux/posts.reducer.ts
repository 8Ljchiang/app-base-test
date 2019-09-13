import { PostsActionType, PostsActions } from './posts.actions';
import { PostsStore, PostItem, defaultPostsStore } from "./posts.store";
import Log from '../core/services/log.service';
import { IServiceCollection, reduxReducerWithServiceCollection } from '../core/services/service-collection';
import { catchErrorInReduxReducer } from '../core/util/error-catchers';

const reducerName = 'PostsReducer';
const actionCategory = 'PostsAction';

type ResolverWithService = (initialState: PostsStore, payload: PostItem, postsService: any) => PostsStore;

const resolverWithLogging = (resolver: ResolverWithService, rName: string, aCategory: string, aType: string): ResolverWithService => {
  return function(initialState: PostsStore, payload: any, services: any) {
    Log.info(aCategory, aType, rName)
    return resolver(initialState, payload, services);
  }
}

const createPostResolver = resolverWithLogging(
  (initialState: PostsStore, payload: PostItem, postsService: any): PostsStore => {
    const networkResponse = postsService.createPost(payload);

    if (networkResponse.errors && networkResponse.errors.length > 0) {
      Log.error(new Error(networkResponse.errors[0]), 'PostsService.createPost');
    }

    if (networkResponse.data.success === true) {
      const newPosts = [...initialState.posts, payload];

      const newState = Object.assign({}, { posts: newPosts });
      return newState;
    }
    return initialState;
  },
  reducerName,
  actionCategory,
  PostsActionType.CREATE_POST
);

function createLogContext(name: string, reducerActionType: any) {
  return `${name}: ${reducerActionType}`;
}

function postsReducer(
  state: PostsStore = defaultPostsStore,
  action: PostsActions,
  services: IServiceCollection
) {
  switch(action.type) {
    case PostsActionType.CREATE_POST:
      const postsService = services.get('PostsService').getValue();
      return catchErrorInReduxReducer(
        createPostResolver,
        state,
        createLogContext(reducerName, action.type)
      )(state, action.payload, postsService);
    default:
      return state;
  }
}

export const postsReducerWithServiceCollection = reduxReducerWithServiceCollection(postsReducer);
