import { Snackbar, Alert, AlertTitle } from '@mui/material'

const Toast = ({ type, message, title, ...other }) => {
	return (
		<Snackbar
			{...other}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
		>
			<Alert variant='filled' severity={type} sx={{ width: '100%' }}>
				{title && <AlertTitle>{title}</AlertTitle>}
				{message}
			</Alert>
		</Snackbar>
	)
}

export default Toast
