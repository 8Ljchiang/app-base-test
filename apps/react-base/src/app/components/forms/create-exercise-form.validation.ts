import { MIN_STRING_LENGTH_4, createMinStringLengthMessage, createMaxStringLengthMessage } from './../../core/configs/validation-messages.config';
import * as Yup from 'yup';

export interface ICreateExerciseFormInput {
  ref: string;
  title: string;
  desc: string;
}

export const INITIAL_VALUES_CREATE_EXERCISE: ICreateExerciseFormInput = {
  ref: '',
  title: '',
  desc: '',
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
    .required()
});
