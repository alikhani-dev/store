import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { AttachMoney, Clear } from '@mui/icons-material'
import { useCart } from '../../Context'
import { clearProduct } from '../../Context/CartProvider'

const PayOff = () => {
	const {
		state: { total },
		dispatch,
	} = useCart()

	return (
		<>
			<Grid item xs={12} p={4}>
				<Typography variant='h6' paragraph>
					total all product : $ {total}
				</Typography>
				<ButtonGroup variant='outlined' aria-label='outlined primary button group'>
					<Button>
						<AttachMoney />
						Pay
					</Button>
					<Button onClick={dispatch(clearProduct)}>
						<Clear />
						Clear
					</Button>
				</ButtonGroup>
			</Grid>
		</>
	)
}

export default PayOff
