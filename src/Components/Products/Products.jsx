import { Grid } from '@mui/material'
import { useProducts } from '../../Context'
import { combineFilters as filter, useFilter } from '../../Context/FilterProvider'
import Product from './Product/Product'

const Products = () => {
	const { products } = useProducts()
	const { category, search, sort } = useFilter()
	const filterProduct = filter(products, category, search, sort)

	if (filterProduct) {
		return filterProduct.map((item) => (
			<Grid item key={item.key} xs={12} sm={6} md={4} lg={3}>
				<Product product={item} />
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
