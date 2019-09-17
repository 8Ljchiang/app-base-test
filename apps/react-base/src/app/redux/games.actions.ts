export enum GamesActionType {
  CREATE_GAME = 'CREATE_GAME',
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

export type GamesActions =
CreateGameAction;

export function createGame(input: ICreateGameFormInput): CreateGameAction {
  return {
    type: GamesActionType.CREATE_GAME,
    payload: input
  }
}
