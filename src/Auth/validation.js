import * as yup from 'yup'

const schema = yup
	.object()
	.shape({
		name: yup.string().required().min(3),
		lastName: yup.string().required(),
		'phone Number': yup.string().required().trim().matches(
				/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
				'is not valid phone number'),
		email: yup.string().required().email(),
		password: yup.string().required().min(8).max(32),
		'confirm Password': yup.string().required().oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
	})
	.required()

export { schema }