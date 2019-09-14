
export enum ExercisesActionType {
  CREATE_EXERCISE = 'CREATE_EXERCISE',
}

export interface ICreateExerciseFormInput {
  title: string;
  desc: string;
  category: string;
  topic: string;
  type: string;
  domain: string;
}

interface CreateExerciseAction {
  type: ExercisesActionType.CREATE_EXERCISE,
  payload: ICreateExerciseFormInput
}

export type ExerciseActions =
  CreateExerciseAction;

export function createExercise(input: ICreateExerciseFormInput): CreateExerciseAction {
  return {
    type: ExercisesActionType.CREATE_EXERCISE,
    payload: input
  }
}
