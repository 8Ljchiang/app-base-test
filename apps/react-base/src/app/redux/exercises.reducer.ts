import { ServiceNames } from './../core/interfaces/ServiceNames';
import { IServiceCollection, reduxReducerWithServiceCollection } from './../core/services/service-collection';
import { ExercisesActionType, ExerciseActions, ICreateExerciseFormInput } from './exercises.actions';
import { ExercisesStore, defaultExercisesStore } from './exercises.store';
import { ICreateActivityFormInput } from '../components/forms/create-activity-form.validation';
import { resolverWithLogging, createLogContext } from '../core/util/reduxResolver.utils';
import Log from '../core/services/log.service';
import { catchErrorInReduxReducer } from '../core/util/error-catchers';

const reducerName = 'ExercisesReducer';
const actionCategory = 'ExercisesAction';

const createExerciseResolver = resolverWithLogging(
  (initialState: ExercisesStore, payload: ICreateExerciseFormInput, exerciseService: any): ExercisesStore => {
    const networkResponse = exerciseService.createExercise(payload);

    const { errors, data } = networkResponse;
    if (errors && errors.length > 0) {
      Log.error(new Error(errors[0]), `${ServiceNames.EXERCISES}.createExercise`);
    }

    if (data.success === true) {
      const newItemId = initialState.exercises.length.toString();
      const newItem = {
        ...payload,
        id: newItemId,
        createdAt: Date.now(),
        author: 'new-author',
      };

      const newItems = [...initialState.exercises, newItem];

      const newState = Object.assign({}, { exercises: newItems });
      return newState;
    }
    return initialState;
  },
  reducerName,
  actionCategory,
  ExercisesActionType.CREATE_EXERCISE
);

const completeExercise = resolverWithLogging(
  (initialState: ExercisesStore, payload: string, exerciseService: any): ExercisesStore => {
    const networkResponse = exerciseService.completeExercise(payload);

    const { errors, data } = networkResponse;

    if (errors && errors.length > 0) {
      Log.error(new Error(errors[0]), `${ServiceNames.EXERCISES}.createExercise`);
    }

    if (data.success === true) {

    }
    return initialState;
  },
  reducerName,
  actionCategory,
  ExercisesActionType.COMPLETE_EXERCISE
)

function exercisesReducer(
  state: ExercisesStore = defaultExercisesStore,
  action: ExerciseActions,
  services: IServiceCollection
) {
  switch(action.type) {
    case ExercisesActionType.CREATE_EXERCISE:
      return catchErrorInReduxReducer(
        createExerciseResolver,
        state,
        createLogContext(reducerName, action.type)
      )(state, action.payload, services.get(ServiceNames.EXERCISES));
    case ExercisesActionType.COMPLETE_EXERCISE:
      return catchErrorInReduxReducer(
        completeExercise,
        state,
        createLogContext(reducerName, action.type)
      )(state, action.payload, services.get(ServiceNames.EXERCISES))
    default:
      return state;
  }
}

export const exercisesReducerWithServiceCollection = reduxReducerWithServiceCollection(exercisesReducer);
