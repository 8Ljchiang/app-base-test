export enum GamesActionType {
  CREATE_GAME = 'CREATE_GAME',
  UPVOTE_GAME = 'UPVOTE_GAME',
}

export interface ICreateGameFormInput {
  title: string;
  desc: string;
  category: string;
  type: string;
  repo: string;
}

interface CreateGameAction {
  type: GamesActionType.CREATE_GAME,
  payload: ICreateGameFormInput
}

interface UpvoteGameAction {
  type: GamesActionType.UPVOTE_GAME,
  payload: { id: string }
}

export type GamesActions =
CreateGameAction
  | UpvoteGameAction;

export function createGame(input: ICreateGameFormInput): CreateGameAction {
  return {
    type: GamesActionType.CREATE_GAME,
    payload: input
  }
}

export function upvoteGame(input: { id: string }): UpvoteGameAction {
  return {
    type: GamesActionType.UPVOTE_GAME,
    payload: input
  }
}
