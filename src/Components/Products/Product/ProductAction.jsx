import {
	ShoppingCart,
	AddCircleOutlineOutlined,
	DeleteOutlineOutlined,
	RemoveCircleOutlineOutlined,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { checkExist, countProducts } from '../../../Helper'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, decrementProduct, getSelectItem, incrementProduct, removeProduct } from '../../../Redux/cartSlice'

const ProductAction = ({ product }) => {
	const { id, status } = product
	const selectedItems = useSelector(getSelectItem)
	const dispatch = useDispatch()
	const countProduct = countProducts(selectedItems, id)
	const existProduct = checkExist(selectedItems, id)

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
