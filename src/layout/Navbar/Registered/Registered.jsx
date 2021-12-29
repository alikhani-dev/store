import { IconButton, Typography } from '@mui/material'
import { useAuth } from '../../../Context'

const Registered = () => {
	const { logOut, user } = useAuth()
    const  userData = user?.providerData?.[0]
	// TODO : Action Link
	return (
		<div>
			<IconButton aria-label='go to page register' color='inherit' onClick={logOut}>
				<Typography variant='body1'>LogOut</Typography>
			</IconButton>
			<Typography variant='subtitle2'>{userData ? userData.email : 'loading'}</Typography>
		</div>
	)
}

export default Registered
