import {
	ShoppingCart,
	AddCircleOutlineOutlined,
	DeleteOutlineOutlined,
	RemoveCircleOutlineOutlined,
} from '@mui/icons-material'
import { Grid, IconButton, Typography } from '@mui/material'
import { useCart, useCartDispatch } from '../../../context'
import { addProduct, decrementProduct, incrementProduct, removeProduct } from '../../../context/CartProvider'
import { checkExist, countProducts } from '../../../helper'

const ProductAction = ({ product }) => {
	const { selectedItem } = useCart()
	const dispatch = useCartDispatch()
	const { id, status } = product
	const countProduct = countProducts(selectedItem, id)
	const existProduct = checkExist(selectedItem, id)

	return (
		<Grid container justifyContent='flex-end' alignItems='center'>
			{!status ? (
				<IconButton disabled>
					<ShoppingCart />
				</IconButton>
			) : (
				<>
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
					{countProduct !== 0 && <Typography variant='body2'>{countProduct}</Typography>}
					{!existProduct ? (
						<IconButton onClick={() => dispatch(addProduct(product))} aria-label='add to Cart'>
							<ShoppingCart />
						</IconButton>
					) : (
						<IconButton onClick={() => dispatch(incrementProduct(id))} aria-label='increment Product'>
							<AddCircleOutlineOutlined />
						</IconButton>
					)}
				</>
			)}
		</Grid>
	)
}

export default ProductAction
