import { NavLink } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { MdPersonOutline } from 'react-icons/md'
import { BiHomeAlt } from 'react-icons/bi'
import styles from './style.module.css'
import { useCart } from '../../Context'

const Header = () => {
	const { selectedItem } = useCart()
	const { length } = selectedItem

	return (
		<header className={styles.header}>
			<NavLink className={styles.home} title='page home' to='/'>
				<BiHomeAlt />
				Home
			</NavLink>
			<NavLink className={styles.account} title='My account' to='error'>
				<MdPersonOutline />
				Login / Signup
			</NavLink>
			<NavLink className={styles.cart} title='page cart' to='cart'>
				<MdOutlineShoppingCart />
				<span className={styles.badge}>{length}</span>
			</NavLink>
		</header>
	)
}

export default Header
