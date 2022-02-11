import { useState } from 'react'
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { useAuth } from '../../../context'

const Registered = () => {
	const [anchorElUser, setAnchorElUser] = useState(null)
	const { logOut, user } = useAuth()
	const userData = user.providerData[0]

	//* handel Event Menu
	const handleOpenMenu = (e) => {
		setAnchorElUser(e.currentTarget)
	}
	const handleCloseMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenMenu}>
					<Avatar alt='profile' src={userData.photoURL ? userData.photoURL : ''} />
				</IconButton>
			</Tooltip>
			<Menu anchorEl={anchorElUser} open={!!anchorElUser} onClose={handleCloseMenu}>
				<MenuItem dense onClick={logOut}>
					<Typography variant='subtitle2' textAlign='center'>
						Logout
					</Typography>
				</MenuItem>
			</Menu>
		</>
	)
}

export default Registered
