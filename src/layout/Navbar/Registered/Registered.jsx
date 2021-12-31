import { useState } from 'react'
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { useAuth } from '../../../Context'
// import Dialog from '../../../Components'

const Registered = () => {
    //! FIX Dialog
	const [anchorElUser, setAnchorElUser] = useState(null)
	// const [open, setOpen] = useState(false)
	const { logOut, user } = useAuth()
	const userData = user.providerData[0]

	//* handel Event Menu
	const handleOpenMenu = (e) => {
		setAnchorElUser(e.currentTarget)
	}
	const handleCloseMenu = () => {
		setAnchorElUser(null)
	}

	//* handel Event Dialog
	// const handleClickOpen = () => {
	// 	setOpen(true)
	// }
	// const handleClose = () => {
	// 	setOpen(false)
	// }

	return (
		<>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenMenu}>
					<Avatar alt='profile' src={userData.photoURL ? userData.photoURL : ''} />
				</IconButton>
			</Tooltip>
			<Menu anchorEl={anchorElUser} open={!!anchorElUser} onClose={handleCloseMenu}>
				<MenuItem dense divider>
					<Typography variant='subtitle2' textAlign='center'>
						Information
					</Typography>
					{/* <Dialog open={open} handleClose={handleClose} /> */}
				</MenuItem>
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
