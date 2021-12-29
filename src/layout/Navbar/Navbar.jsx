import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useAuth, useCart } from '../../Context'
import useStyles from './Styles'

import NotRegistered from './NotRegistered'
import Registered from './Registered'

const Navbar = () => {
	const styles = useStyles()
	const { selectedItem } = useCart()
	const { user } = useAuth()

	return (
		<AppBar className={styles.appBar} position='sticky'>
			<Toolbar className={styles.toolbar}>
				<IconButton aria-label='logo' color='inherit' edge='start'>
					<Link to='/'>
						<Typography variant='h6'>Home</Typography>
					</Link>
				</IconButton>
				{!user ? <NotRegistered /> : <Registered />}
				<IconButton color='inherit' edge='end'>
					<Badge color='error' badgeContent={selectedItem.length}>
						<Link to='cart'>
							<ShoppingCartOutlined />
						</Link>
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
