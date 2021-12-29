import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const validation = yup
	.object()
	.shape({
		image: yup.string().required('Image is a required').url(),
		category: yup.string().required('Category is a required'),
		name: yup.string().required('Name is a required').min(3),
		description: yup.string().required('Description is a required').min(20),
		status: yup.boolean().required('Status is a required').typeError('Amount must be a Boolean (true or false)'),
		price: yup.number().required('Price is a required').typeError('Amount must be a number'),
		id: yup.number().required('ID is a required').typeError('Amount must be a number').integer(),
	})
	.required()

const defaultValues = {
	status: true,
	category: '',
	id: '',
	name: '',
	image: '',
	price: '',
	description: '',
}
const schema = yupResolver(validation)

export { schema, defaultValues }
