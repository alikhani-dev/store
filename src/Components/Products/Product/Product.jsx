import { Card, Typography, CardContent, CardMedia, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'
import { addComma } from '../../../Helper'
import Actions from './ProductAction'
import useStyles from './Styles'

const Product = ({ product }) => {
	const { image, name, price, description, status, id } = product
	const styles = useStyles(status)

	return (
		<Card className={styles.card}>
			<Link to={`product/${id}`} className={styles.link} />
			<CardMedia className={styles.media} image={image} title={name} />
			<CardContent className={styles.content}>
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
					${addComma(price)}
				</Typography>
				<Actions product={product} />
			</CardActions>
		</Card>
	)
}

export default Product
