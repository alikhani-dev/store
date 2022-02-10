import {
	ShoppingCart,
	AddCircleOutlineOutlined,
	DeleteOutlineOutlined,
	RemoveCircleOutlineOutlined,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useCart, useCartDispatch } from '../../../Context'
import { addProduct, decrementProduct, incrementProduct, removeProduct } from '../../../Context/CartProvider'
import { checkExist, countProducts } from '../../../Helper'

const ProductAction = ({ product }) => {
	const { selectedItem } = useCart()
	const dispatch = useCartDispatch()
	const { id, status } = product
	const countProduct = countProducts(selectedItem, id)
	const existProduct = checkExist(selectedItem, id)

	return (
		<div>
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
		</div>
	)
}

export default ProductAction
