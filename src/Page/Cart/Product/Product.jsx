import { Card, Typography, CardContent, CardMedia, CardActions, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { addComma } from '../../../helper'
import Actions from './ProductAction'
import useStyles from './Styles'

const Product = ({ product }) => {
	const styles = useStyles()
	const { image, name, price, description, id } = product

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card className={styles.card}>
				<Grid container>
					<Grid item xs={12} className={styles.mediaContainer}>
						<Link to={`product/${id}`} className={styles.link} />
						<CardMedia image={image} title={name} className={styles.media} />
					</Grid>
					<Grid item xs={12}>
						<CardContent>
							<Typography variant='h6' gutterBottom>
								{name}
							</Typography>
							<Typography variant='body2' noWrap>
								{description}
							</Typography>
						</CardContent>
						<CardActions>
							<Typography variant='body2' m={2}>
								${addComma(price)}
							</Typography>
							<Actions product={product} />
						</CardActions>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	)
}

export default Product
