import * as Yup from 'yup';
import { createMinStringLengthMessage, createMaxStringLengthMessage } from './../../core/configs/validation-messages.config';
import { ICreateExerciseFormInput } from '../../redux/exercises.actions';

export const INITIAL_VALUES_CREATE_EXERCISE: ICreateExerciseFormInput = {
  repo: '',
  title: '',
  desc: '',
  category: '',
  topic: '',
  type: '',
  domain: '',
}

export const FORM_SCHEMA_CREATE_EXERCISE = Yup.object({
  ref: Yup.string(),
  title: Yup.string()
    .min(4, createMinStringLengthMessage(4))
    .max(128, createMaxStringLengthMessage(128))
    .required(),
  desc: Yup.string()
    .min(4, createMinStringLengthMessage(4))
    .max(128, createMaxStringLengthMessage(128))
    .required(),
  category: Yup.string(),
  topic: Yup.string(),
  domain: Yup.string(),
  type: Yup.string()
});
