import { Grid } from '@mui/material'

const Product = ({ product }) => {
	const { image, name, price, description, status, id } = product

	return <Grid container>{name}</Grid>
}

export default Product
