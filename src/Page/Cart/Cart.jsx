import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useCart } from '../../context'
import PayOff from './PayOff'
import Product from './Product/Product'

const Cart = () => {
	const { selectedItem } = useCart()
	const existProducts = !selectedItem.length

	const CartEmpty = () => (
		<Grid item my={2} xs={12}>
			<Typography variant='h6' align='center'>
				You have no items in shopping cart ,<Link to='/'>start adding some !</Link>
			</Typography>
		</Grid>
	)

	return (
		<Grid container justifyContent='flex-start' columns={12} spacing={4} p={4}>
			<Grid item xs={12} mt={3}>
				<Typography align='center' variant='h4'>
					Your shopping Cart
				</Typography>
			</Grid>
			<Grid container>
				<Grid item xs={12}>
					{existProducts ? <CartEmpty /> : selectedItem.map((product) => <Product product={product} />)}
				</Grid>
			</Grid>
			{!existProducts && <PayOff />}
		</Grid>
	)
}

export default Cart
