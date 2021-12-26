import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context'
import useStyles from './Styles'

const Navbar = () => {
	const styles = useStyles()
	const { selectedItem } = useCart()

	return (
		<AppBar className={styles.appBar} position='sticky'>
			<Toolbar className={styles.toolbar}>
				<IconButton aria-label='logo' color='inherit' edge='start'>
					<Link to='/'>
						<Typography variant='h6'>Home</Typography>
					</Link>
				</IconButton>
				<div className={styles.wrapperForm}>
					<IconButton aria-label='go to page register' color='inherit' >
						<Link to='register'>
							<Typography variant='body1'>Sing up</Typography>
						</Link>
					</IconButton>
					<IconButton color='inherit' >
						<Link to='login'>
							<Typography variant='body1'>Login</Typography>
						</Link>
					</IconButton>
				</div>
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
