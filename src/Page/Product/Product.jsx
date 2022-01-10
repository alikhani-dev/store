import { Container, Grid, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
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
			<Grid item textAlign='center' xs={12} md>
				<img src={image} alt={name} />
			</Grid>
			<Grid item xs={12} md>
				<Typography variant='h2' gutterBottom>
					{name}
				</Typography>
				<Typography variant='h4' gutterBottom>
					${price}
				</Typography>
				<Typography variant='body1'>{description}</Typography>
			</Grid>
		</Container>
	)
}

export default Product
