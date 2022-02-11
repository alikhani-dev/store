import { AddCircleOutlineOutlined, DeleteOutlineOutlined, RemoveCircleOutlineOutlined } from '@mui/icons-material'
import { decrementProduct, incrementProduct, removeProduct, useCartDispatch } from '../../../Context/CartProvider'
import { Grid, IconButton, Typography } from '@mui/material'

const ItemActions = ({ countProduct, id }) => {
	const dispatch = useCartDispatch()

	return (
		<Grid container justifyContent='flex-end' alignItems='center' pr={3}>
			{countProduct > 1 && (
				<IconButton onClick={() => dispatch(decrementProduct(id))} aria-label='decrement Product'>
					<RemoveCircleOutlineOutlined />
				</IconButton>
			)}
			{countProduct === 1 && (
				<IconButton onClick={() => dispatch(removeProduct(id))} aria-label='remove Product'>
					<DeleteOutlineOutlined />
				</IconButton>
			)}
			{countProduct !== 0 && <Typography variant='body1'>{countProduct}</Typography>}
			{
				<IconButton onClick={() => dispatch(incrementProduct(id))} aria-label='increment Product'>
					<AddCircleOutlineOutlined />
				</IconButton>
			}
		</Grid>
	)
}

export default ItemActions
