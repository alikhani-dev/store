import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { AttachMoney, Clear } from '@mui/icons-material'
import { useCart } from '../../Context'
// import { useNavigate } from 'react-router-dom'

const PayOff = () => {
	const { total } = useCart().state
	const { clear } = useCart().dispatch
	// const navigate = useNavigate()

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
					<Button onClick={clear}>
						<Clear />
						Clear
					</Button>
				</ButtonGroup>
			</Grid>
		</>
	)
}

export default PayOff
