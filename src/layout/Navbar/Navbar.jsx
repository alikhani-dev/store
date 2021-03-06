import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import NotRegistered from './NotRegistered'
import Registered from './Registered'
import { useAuth, useCart } from '../../context'
import useStyles from './Styles'

const Navbar = () => {
	const styles = useStyles()
	const { selectedItem } = useCart()
	const { user } = useAuth()
	const navigate = useNavigate()
	return (
		<AppBar className={styles.appBar} position='sticky'>
			<Toolbar className={styles.toolbar}>
				<IconButton aria-label='logo' color='inherit' edge='start' onClick={() => navigate('/')}>
					<Typography variant='h6'>Home</Typography>
				</IconButton>
				{user?.uid ? <Registered /> : <NotRegistered />}
				<IconButton color='inherit' edge='end' onClick={() => navigate('cart')}>
					<Badge color='error' badgeContent={selectedItem.length}>
						<ShoppingCartOutlined />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
