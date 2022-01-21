import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context'
import CartItem from './Item'
import PayOff from './PayOff'

const Cart = () => {
	const { selectedItem } = useCart().state
	const existProducts = !selectedItem.length

	const CartEmpty = () => (
		<Grid item my={2} xs={12}>
			<Typography variant='h6' xs={{ variant: 'body2' }} align='center'>
				You have no items in shopping cart ,<Link to='/'> start adding some !</Link>
			</Typography>
		</Grid>
	)

	return (
		<Grid container justifyContent='flex-start' columns={12}>
			<Grid item xs={12} mt={3}>
				<Typography align='center' variant='h4'>
					Your shopping Cart
				</Typography>
			</Grid>
			{existProducts ? <CartEmpty /> : selectedItem.map((product) => <CartItem key={product.id} product={product} />)}
			{!existProducts && <PayOff />}
		</Grid>
	)
}

export default Cart
