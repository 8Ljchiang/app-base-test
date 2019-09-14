import * as Yup from 'yup';

import { createMinStringLengthMessage, createMaxStringLengthMessage, STRING_REQUIRED } from './../../core/configs/validation-messages.config';
import { ICreatePostFormInput } from './../../core/services/mocks/mock-posts.service';

export const INITIAL_VALUES_CREATE_POST: ICreatePostFormInput = {
  title: '',
  message: '',
  context: 'pair',
  type: 'message',
};

export const FORM_SCHEMA_CREATE_POST = Yup.object().shape({
	title: Yup.string()
		.min(4, createMinStringLengthMessage(4))
		.max(32, createMaxStringLengthMessage(32))
    .required(STRING_REQUIRED),
  message: Yup.string()
    .min(4, createMinStringLengthMessage(4))
    .max(256, createMaxStringLengthMessage(256))
    .required(STRING_REQUIRED),
  context: Yup.string()
    .required(STRING_REQUIRED),
  type: Yup.string()
    .required(STRING_REQUIRED)
});
