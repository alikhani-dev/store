import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const CustomTextField = ({ error = false, control, ...other }) => {
	return (
		<Controller
			name={other.label}
			control={control}
			render={({ field }) => <TextField  helperText={error?.message} error={!!error} {...field} {...other} />}
		/>
	)
}

export default CustomTextField
