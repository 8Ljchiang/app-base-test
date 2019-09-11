import { createMinStringLengthMessage, createMaxStringLengthMessage, STRING_REQUIRED } from './../../core/configs/validation-messages.config';
import * as Yup from 'yup';

export const INITIAL_VALUES_SITE_FEEDBACK_FORM = {
  context: 'route',
  category: 'site',
  contact: '',
  subject: '',
  issueType: '',
  desc: '',
};

export const FORM_SCHEMA_SITE_FEEDBACK_FORM = Yup.object().shape({
  context: Yup.string()
    .required(STRING_REQUIRED),
  category: Yup.string()
    .required(STRING_REQUIRED),
  contact: Yup.string(),
  issueType: Yup.string()
    .required(STRING_REQUIRED),
  subject: Yup.string()
    .max(128, createMaxStringLengthMessage(128))
    .required(STRING_REQUIRED),
	desc: Yup.string()
    .min(4, createMinStringLengthMessage(4))
    .min(256, createMaxStringLengthMessage(256))
    .required(STRING_REQUIRED),
});
