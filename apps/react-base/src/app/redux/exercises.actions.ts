
export enum ExercisesActionType {
  CREATE_EXERCISE = 'CREATE_EXERCISE',
  COMPLETE_EXERCISE = 'COMPLETE_EXERCISE',
}

export interface ICreateExerciseFormInput {
  title: string;
  desc: string;
  category: string;
  topic: string;
  type: string;
  domain: string;
  repo: string;
}

interface CreateExerciseAction {
  type: ExercisesActionType.CREATE_EXERCISE;
  payload: ICreateExerciseFormInput;
}

interface CompleteExerciseAction {
  type: ExercisesActionType.COMPLETE_EXERCISE;
  payload: string;
}

export type ExerciseActions =
  CreateExerciseAction
  | CompleteExerciseAction;

export function createExercise(input: ICreateExerciseFormInput): CreateExerciseAction {
  return {
    type: ExercisesActionType.CREATE_EXERCISE,
    payload: input
  }
}

export function CompleteExerciseAction(input: string): CompleteExerciseAction {
  return {
    type: ExercisesActionType.COMPLETE_EXERCISE,
    payload: input
  }
}
