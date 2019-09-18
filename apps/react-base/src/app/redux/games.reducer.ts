import { ICreateGameFormInput, GamesActionType, GamesActions } from './games.actions';
import { GamesStore } from './games.store';
import Log from '../core/services/log.service';
import { resolverWithLogging, createLogContext } from "../core/util/reduxResolver.utils";
import { ServiceNames } from '../core/interfaces/ServiceNames';
import { IServiceCollection, reduxReducerWithServiceCollection } from '../core/services/service-collection';
import { catchErrorInReduxReducer } from '../core/util/error-catchers';

const reducerName = 'GamesReducer';
const actionCategory = 'GamesAction';

const createGameResolver = resolverWithLogging(
  (initialState: GamesStore, payload: ICreateGameFormInput, gamesService: any) => {
    const networkResponse = gamesService.createGame(payload);

    const { errors, data } = networkResponse;
    if (errors && errors.length > 0) {
      Log.error(new Error(errors[0]), `${ServiceNames.GAMES}.createGame`);
    }

    if (data.success === true) {

    }
    return initialState;
  },
  reducerName,
  actionCategory,
  GamesActionType.CREATE_GAME
);

const upvoteGameResolver = resolverWithLogging(
  (initialState: GamesStore, payload: string, gamesService: any) => {
    const networkResponse = gamesService.upvoteGame(payload);

    const { errors, data } = networkResponse;

    if(errors && errors.length > 0) {
      Log.error(new Error(errors[0]), `${ServiceNames.GAMES}.upvoteGame`);
    }

    if (data.success === true) {
      const newItems = initialState.games.map((game) => {
        if (game.id === payload) {
          return {
            ...game,
            upvotes: game.upvotes + 1
          }
        }
        return game
      })
      const newState = Object.assign({}, initialState, { games: newItems });
      return newState;
    }
    return initialState;
  },
  reducerName,
  actionCategory,
  GamesActionType.UPVOTE_GAME
)

export function gamesReducer(
  state: GamesStore,
  action: GamesActions,
  services: IServiceCollection
) {
  switch(action.type) {
    case GamesActionType.CREATE_GAME:
      return catchErrorInReduxReducer(
        createGameResolver,
        state,
        createLogContext(reducerName, action.type)
      )(state, action.payload, services.get(ServiceNames.GAMES).getValue());
    case GamesActionType.UPVOTE_GAME:
      return catchErrorInReduxReducer(
        upvoteGameResolver,
        state,
        createLogContext(reducerName, action.type)
      )(state, action.payload, services.get(ServiceNames.GAMES));
    default:
      return state;
  }
}
