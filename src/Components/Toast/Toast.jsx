import { Snackbar, Alert } from '@mui/material'

const Toast = ({ message, ...other }) => {
	return (
		<Snackbar
			{...other}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
		>
			<Alert variant='filled' severity='success' sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default Toast
