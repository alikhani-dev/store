import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const validation = yup
	.object()
	.shape({
		email: yup.string().required('email is a required').email(),
		password: yup.string().required('password is a required').min(8).max(32),
	})
	.required()

const defaultValues = {
	password: '',
	email: '',
}
const schema = yupResolver(validation)

export { schema, defaultValues }
