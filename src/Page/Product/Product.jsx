import { Container, Grid, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addComma } from '../../helper'
import useStyles from './Styles'

const Product = ({ product }) => {
	const { image, name, price, description } = product
	const navigate = useNavigate()
	const styles = useStyles()

	return (
		<Container>
			<Button className={styles.button} onClick={() => navigate(-1)} variant='outlined'>
				Go Back
			</Button>
			<Grid textAlign='center'>
				<img src={image} alt={name} />
			</Grid>
			<Grid>
				<Typography variant='h2' gutterBottom>
					{name}
				</Typography>
				<Typography variant='h4' gutterBottom>
					${addComma(price)}
				</Typography>
				<Typography variant='body1'>{description}</Typography>
			</Grid>
		</Container>
	)
}

export default Product
