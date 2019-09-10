import * as Yup from 'yup';

export const INITIAL_VALUES_CREATE_POST = { postContent: '' };

export const FORM_SCHEMA_CREATE_POST = Yup.object().shape({
	postContent: Yup.string()
		.min(3, 'Must be at least 3 characters.')
		.max(240, 'Max length is 240 characters.')
		.required('Input is required.'),
	// email: Yup.string()
	// 	.email('Invalid email address')
	// 	.required('Email is required.'),
	// phone: Yup.string()
	// 	.matches(phoneRegExp, 'Phone number is not valid.'),
	// title: Yup.string()
	// 	.min(2, 'Must be at least 2 characters.')
	// 	.max(3, 'Max length is 3 characters.')
	// 	.required('Title is required.'),
});
