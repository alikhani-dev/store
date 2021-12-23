import {
	ShoppingCart,
	AddCircleOutlineOutlined,
	DeleteOutlineOutlined,
	RemoveCircleOutlineOutlined,
} from '@mui/icons-material'
import { useCart, useCartDispatch } from '../../../Context'
import { checkExist, countProducts } from '../../../Helper'
import { IconButton } from '@mui/material'

const ProductAction = ({ product }) => {
	const { addProduct, removeProduct, incrementProduct, decrementProduct } = useCartDispatch()
	const { selectedItem } = useCart()
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
						<IconButton onClick={() => decrementProduct(id)} aria-label='increment'>
							<RemoveCircleOutlineOutlined />
						</IconButton>
					)}
					{countProduct === 1 && (
						<IconButton onClick={() => removeProduct(id)} aria-label='increment'>
							<DeleteOutlineOutlined />
						</IconButton>
					)}
					{!existProduct ? (
						<IconButton onClick={() => addProduct(product)} aria-label='add to Cart'>
							<ShoppingCart />
						</IconButton>
					) : (
						<IconButton onClick={() => incrementProduct(id)} aria-label='increment'>
							<AddCircleOutlineOutlined />
						</IconButton>
					)}
				</>
			)}
		</div>
	)
}

export default ProductAction
