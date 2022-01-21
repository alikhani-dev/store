import { AddCircleOutlineOutlined, DeleteOutlineOutlined, RemoveCircleOutlineOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { useCart } from '../../../Context'
import { decrementProduct, incrementProduct, removeProduct } from '../../../Context/CartProvider'

const ItemActions = ({ countProduct, id }) => {
	const { dispatch } = useCart()

	return (
		<>
			{countProduct === 1 ? (
				<IconButton aria-label='remove' onClick={() => dispatch(removeProduct(id))}>
					<DeleteOutlineOutlined />
				</IconButton>
			) : (
				<IconButton aria-label='decrement' onClick={() => dispatch(decrementProduct(id))}>
					<RemoveCircleOutlineOutlined />
				</IconButton>
			)}
			<Typography>{countProduct}</Typography>
			<IconButton aria-label='increment' onClick={() => dispatch(incrementProduct(id))}>
				<AddCircleOutlineOutlined />
			</IconButton>
		</>
	)
}

export default ItemActions
