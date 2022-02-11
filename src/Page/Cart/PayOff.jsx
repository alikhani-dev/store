import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { AttachMoney, Clear } from '@mui/icons-material'
import { useCart } from '../../context'
import { addComma } from '../../helper'

const PayOff = () => {
	const { total } = useCart()

	return (
		<Grid item xs={12} p={4}>
			<Typography variant='h6' paragraph>
				total all product : $ {addComma(total)}
			</Typography>
			<ButtonGroup variant='outlined' aria-label='outlined primary button group'>
				<Button>
					<AttachMoney />
					Pay
				</Button>
				<Button>
					<Clear />
					Clear
				</Button>
			</ButtonGroup>
		</Grid>
	)
}

export default PayOff
