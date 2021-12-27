import { FormControl, Select, InputLabel, MenuItem, FormHelperText } from '@mui/material'
import { Controller } from 'react-hook-form'

const CustomSelect = ({ error, control, name, value, ...other }) => {
	const id = `select-${name}`
	return (
		<FormControl fullWidth>
			<InputLabel htmlFor={id}>{name}</InputLabel>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<>
						<Select error={!!error} id={id} label={`Select ${name}`} {...other} {...field}>
							{value.map(({ value, key }) => (
								<MenuItem key={key} value={String(value)}>
									{String(value)}
								</MenuItem>
							))}
						</Select>
						{error && <FormHelperText error>{error.message}</FormHelperText>}
					</>
				)}
			/>
		</FormControl>
	)
}

export default CustomSelect
