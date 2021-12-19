import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
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
				<IconButton color='inherit' edge='end'>
					<Badge color='error' badgeContent={selectedItem.length}>
						<Link to='cart'>
							<ShoppingCartOutlinedIcon />
						</Link>
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
