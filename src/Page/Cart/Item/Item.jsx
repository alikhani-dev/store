import { Grid, CardMedia, CardContent, Typography, Card } from '@mui/material'
import { useCart } from '../../../Context'
import { countProducts } from '../../../Helper'
import useStyles from './Styles'
import { Box } from '@mui/system'
import Actions from './ItemActions'

const Item = ({ product }) => {
	const { selectedItem } = useCart()
	const { image, name, price, id } = product
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
						<Actions countProduct={countProduct} id={id} />
					</Box>
				</Box>
			</Card>
		</Grid>
	)
}

export default Item
