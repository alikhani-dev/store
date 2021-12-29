import { IconButton, Typography } from '@mui/material'
import { useAuth } from '../../../Context'

const Registered = () => {
	const { logOut } = useAuth()
	// TODO : Action Link

	return (
		<div>
			<IconButton aria-label='go to page register' color='inherit' onClick={logOut}>
				<Typography variant='body1'>LogOut</Typography>
			</IconButton>
		</div>
	)
}

export default Registered
