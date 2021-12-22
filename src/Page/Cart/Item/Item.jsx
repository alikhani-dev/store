import { Grid, CardMedia, CardContent, Typography, IconButton, Card } from '@mui/material'
import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined, DeleteOutlineOutlined } from '@mui/icons-material'
import { useCart, useCartDispatch } from '../../../Context'
import { countProducts } from '../../../Helper'
import useStyles from './Styles'
import { Box } from '@mui/system'

const Item = ({ product }) => {
	const { selectedItem } = useCart()
	const { image, name, price, id } = product
	const { removeProduct, incrementProduct, decrementProduct } = useCartDispatch()
	const countProduct = countProducts(selectedItem, id)
	const styles = useStyles()

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card className={styles.card}>
				<CardMedia component='img' className={styles.media1} image={image} alt={`image ${name}`} />
				<Box className={styles.boxWrapper}>
					<CardContent>
						<Typography variant='h5' gutterBottom>
							{name}
						</Typography>
						<Typography>Price : ${price}</Typography>
						<Typography variant='subtitle1' color='text.secondary' component='div'>
							Total : ${price * countProduct}
						</Typography>
					</CardContent>
					<Box className={styles.boxChild}>
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
					</Box>
				</Box>
			</Card>
		</Grid>
	)
}

export default Item
