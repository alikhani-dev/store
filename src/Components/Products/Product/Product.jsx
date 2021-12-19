import { Card, Typography, CardContent, CardActions, IconButton, CardMedia, Box } from '@mui/material'
import {
	ShoppingCart,
	AddCircleOutlineOutlined,
	DeleteOutlineOutlined,
	RemoveCircleOutlineOutlined,
} from '@mui/icons-material'
import { useCart, useCartDispatch } from '../../../Context'
import { checkExist, countProducts } from '../../../Helper'
import useStyles from './Styles'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
	const { addProduct, removeProduct, incrementProduct, decrementProduct } = useCartDispatch()
	const { image, name, price, description, status, id } = product
	const { selectedItem } = useCart()
	const existProduct = checkExist(selectedItem, id)
	const countProduct = countProducts(selectedItem, id)
	const styles = useStyles(status)

	return (
		<Card className={styles.card}>
			<Link to={`product/${id}`} className={styles.link} />
			<CardMedia className={styles.media} image={image} title={name} />
			<CardContent className={styles.content}>
				<Box className={styles.status} />
				<div>
					<Typography variant='h6' gutterBottom>
						{name}
					</Typography>
					<Typography variant='body2' noWrap>
						{description}
					</Typography>
				</div>
			</CardContent>
			<CardActions className={styles.action}>
				<Typography variant='body2' m={2}>
					${price}
				</Typography>
				<div>
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
				</div>
			</CardActions>
		</Card>
	)
}

export default Product
