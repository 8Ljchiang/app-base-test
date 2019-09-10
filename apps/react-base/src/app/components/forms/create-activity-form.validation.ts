import * as Yup from 'yup';

export const INITIAL_VALUES_CREATE_ACTIVITY= {
  socialContext: 'global',
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

const STRING_LENGTH_4 = 'Must be at least 4 characters.';
const STRING_LENGTH_8 = 'Must be at least 8 characters.';
const STRING_LENGTH_128 = 'Max length is 128 characters.';
const STRING_LENGTH_256 = 'Max length is 256 characters.';
const STRING_LENGTH_512 = 'Max length is 512 characters.';
const STRING_REQUIRED = 'Input is required.';

export const FORM_SCHEMA_CREATE_ACTIVITY = Yup.object().shape({
  socialContext: Yup.string()
    .required(),
	title: Yup.string()
		.min(4, STRING_LENGTH_4)
		.max(128, STRING_LENGTH_128)
    .required(STRING_REQUIRED),
  description: Yup.string()
    .min(4, STRING_LENGTH_4)
    .max(512, STRING_LENGTH_512)
    .required(STRING_REQUIRED),
  repo: Yup.string()
    .min(8, STRING_LENGTH_8)
    .max(256, STRING_LENGTH_256),
  visibility: Yup.string(),
  access: Yup.string(),
  type: Yup.string(),
  category: Yup.string(),
  tags: Yup.array(),
});
