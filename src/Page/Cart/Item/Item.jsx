import { Grid, CardMedia, CardContent, Typography, Card } from '@mui/material'
import { useCart } from '../../../Context'
import { addComma, countProducts } from '../../../Helper'
import Actions from './ItemActions'
import { Box } from '@mui/system'
import useStyles from './Style.js'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
	const { selectedItem } = useCart()
	const { image, name, price, id } = product
	const countProduct = countProducts(selectedItem, id)
	const styles = useStyles()

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card>
				<Grid container justifyContent='space-between' alignItems='center'>
					<Grid item xs={5} className={styles.media}>
						<CardMedia component='img' image={image} alt={`image ${name}`} />
						<Link className={styles.link} to={`/product/${id}`} />
					</Grid>
					<Grid item xs={7}>
						<Box>
							<CardContent>
								<Typography variant='h5' gutterBottom>
									{name}
								</Typography>
								<Typography>Price : ${addComma(price)}</Typography>
								<Typography variant='subtitle1' color='text.secondary' component='div'>
									Total : ${price * countProduct}
								</Typography>
							</CardContent>
							<Box>
								<Actions countProduct={countProduct} id={id} />
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	)
}

export default Item
