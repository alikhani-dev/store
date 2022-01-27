import { AddCircleOutlineOutlined, DeleteOutlineOutlined, RemoveCircleOutlineOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { decrementProduct, incrementProduct, removeProduct } from '../../../Redux/cartSlice'

const ItemActions = ({ countProduct, id }) => {
	const dispatch = useDispatch()

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
