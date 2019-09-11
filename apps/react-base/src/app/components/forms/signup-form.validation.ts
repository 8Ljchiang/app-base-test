import { createMinStringLengthMessage, createMaxStringLengthMessage, STRING_REQUIRED } from './../../core/configs/validation-messages.config';
import * as Yup from 'yup';

export const INITIAL_VALUES_SIGNUP_FORM = { username: '', email: '', password: '', inviteToken: '' };

export const FORM_SCHEMA_SIGNUP_FORM = Yup.object().shape({
  username: Yup.string()
    .min(4, createMinStringLengthMessage(4))
    .min(16, createMaxStringLengthMessage(16))
    .required(STRING_REQUIRED),
  email: Yup.string()
    .required(STRING_REQUIRED),
	password: Yup.string()
    .min(4, createMinStringLengthMessage(4))
    .min(16, createMaxStringLengthMessage(16))
    .required(STRING_REQUIRED),
	inviteToken: Yup.string()
    .required(STRING_REQUIRED),
});
