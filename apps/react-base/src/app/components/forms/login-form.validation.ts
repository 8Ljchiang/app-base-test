import { MIN_STRING_LENGTH_4, createMinStringLengthMessage, createMaxStringLengthMessage, STRING_REQUIRED } from './../../core/configs/validation-messages.config';
import * as Yup from 'yup';

export const INITIAL_VALUES_LOGIN_FORM = { firstField: '', secondField: '' };

export const FORM_SCHEMA_LOGIN_FORM = Yup.object().shape({
  firstField: Yup.string()
    .min(4, createMinStringLengthMessage(4))
    .min(16, createMaxStringLengthMessage(16))
    .required(STRING_REQUIRED),
	secondField: Yup.string()
    .min(4, createMinStringLengthMessage(4))
    .min(16, createMaxStringLengthMessage(16))
    .required(STRING_REQUIRED),
});
