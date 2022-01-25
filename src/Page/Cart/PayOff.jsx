import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { AttachMoney, Clear } from '@mui/icons-material'
import { clearProduct, getTotal } from '../../Redux/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { addCommasToNumber } from '../../Helper'

const PayOff = () => {
	const total = useSelector(getTotal)
	const dispatch = useDispatch()

	return (
		<Grid item xs={12} p={4}>
			<Typography variant='h6' paragraph>
				total all product : $ {addCommasToNumber(total)}
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
	)
}

export default PayOff
