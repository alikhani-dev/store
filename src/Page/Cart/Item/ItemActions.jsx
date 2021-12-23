import { AddCircleOutlineOutlined, DeleteOutlineOutlined, RemoveCircleOutlineOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'

const ItemActions = ({ countProduct, dispatch, id }) => {
	const { removeProduct, incrementProduct, decrementProduct } = dispatch()

    return (
		<>
			{countProduct === 1 ? (
				<IconButton aria-label='remove' onClick={() => removeProduct(id)}>
					<DeleteOutlineOutlined />
				</IconButton>
			) : (
				<IconButton aria-label='decrement' onClick={() => decrementProduct(id)}>
					<RemoveCircleOutlineOutlined />
				</IconButton>
			)}
			<Typography>{countProduct}</Typography>
			<IconButton aria-label='increment' onClick={() => incrementProduct(id)}>
				<AddCircleOutlineOutlined />
			</IconButton>
		</>
	)
}

export default ItemActions
