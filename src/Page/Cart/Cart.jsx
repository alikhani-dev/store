import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context'
import CartItem from './Item'

const Cart = () => {
	const { selectedItem } = useCart()
	const existProducts = !selectedItem.length

	const CartEmpty = () => (
		<Grid item my={2} xs={12}>
			<Typography variant='h6' xs={{ variant: 'body2' }} align='center'>
				You have no items in shopping cart ,<Link to='/'> start adding some !</Link>
			</Typography>
		</Grid>
	)

	return (
		<Grid container justifyContent='space-evenly' spacing={4} columns={12} p={4}>
			<Grid item xs={12} mt={3}>
				<Typography align='center' variant='h4'>
					Your shopping Cart
				</Typography>
			</Grid>
			{existProducts ? <CartEmpty /> : selectedItem.map((product) => <CartItem product={product} />)}
		</Grid>
	)
}

export default Cart