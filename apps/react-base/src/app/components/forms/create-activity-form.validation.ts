import { MIN_STRING_LENGTH_4, MAX_STRING_LENGTH_128, MAX_STRING_LENGTH_512, STRING_REQUIRED, MIN_STRING_LENGTH_8, MAX_STRING_LENGTH_256 } from './../../core/configs/validation-messages.config';
import * as Yup from 'yup';

export interface ICreateActivityFormInput {
  context: string;
  ref: string;
  title: string;
  description: string;
  visibility: string;
  access: string;
  repo: string;
  category: string;
  tags: string[];
  type: string;
}

export const INITIAL_VALUES_CREATE_ACTIVITY: ICreateActivityFormInput = {
  context: 'global',
  ref: '',
  title: '',
  description: '',
  visibility: '',
  access: '',
  repo: '',
  type: '',
  category: '',
  tags: [],
  // languages: [],
  // domains: [],
  // agendaItems: [],
  // groups: 'global',
};

export const FORM_SCHEMA_CREATE_ACTIVITY = Yup.object().shape({
  socialContext: Yup.string()
    .required(),
	title: Yup.string()
		.min(4, MIN_STRING_LENGTH_4)
		.max(128, MAX_STRING_LENGTH_128)
    .required(STRING_REQUIRED),
  description: Yup.string()
    .min(4, MIN_STRING_LENGTH_4)
    .max(512, MAX_STRING_LENGTH_512)
    .required(STRING_REQUIRED),
  repo: Yup.string()
    .min(8, MIN_STRING_LENGTH_8)
    .max(256, MAX_STRING_LENGTH_256),
  visibility: Yup.string(),
  access: Yup.string(),
  type: Yup.string(),
  category: Yup.string(),
  tags: Yup.array(),
});
