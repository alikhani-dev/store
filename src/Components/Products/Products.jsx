import { Grid } from '@mui/material'
import { getKeysFilterProduct } from '../../Redux/filterSlice'
import Product from './Product'
import { shallowEqual, useSelector } from 'react-redux'

const Products = () => {
	const products = useSelector(getKeysFilterProduct, shallowEqual)

	if (products && products.length > 0) {
		return products.map((id) => (
			<Grid item key={id} xs={12} sm={6} md={4} lg={3}>
				<Product id={id} />
			</Grid>
		))
	}

	return (
		<Grid item xs={12}>
			<p>not found</p>
		</Grid>
	)
}

export default Products
