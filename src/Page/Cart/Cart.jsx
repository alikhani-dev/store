import { Grid, Typography } from '@mui/material'
import CartItems from './Items'
import { useCart } from '../../Context'

const Cart = () => {
	const { selectedItem } = useCart()
	const existProducts = !selectedItem.length

	const CartEmpty = () => (
		<Grid item my={2} xs={12}>
			<Typography variant='h6' xs={{ variant: 'body2' }} align='center'>
				You have no items in shopping cart , start adding some !
			</Typography>
		</Grid>
	)

	return (
		<Grid container>
			<Grid item xs={12} my={4}>
				<Typography align='center' variant='h4'>
					Your shopping Cart
				</Typography>
			</Grid>
			{existProducts ? <CartEmpty /> : <CartItems />}
		</Grid>
	)
}

export default Cart
