import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const Input = ({ error, control, ...other }) => {
	const name = other?.label || other.name

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => <TextField helperText={error?.message} error={!!error} {...field} {...other} fullWidth />}
		/>
	)
}

export default Input
