import { Grid } from '@mui/material'
import Product from './Product'

const Products = ({ listProduct, characterFilter, categoryFilter }) => {
	const filterListCharacter = characterFilter
		? listProduct.filter((item) => item.name.toLowerCase().startsWith(characterFilter))
		: listProduct

	const filterListCategory =
		categoryFilter !== 'All'
			? filterListCharacter.filter((item) => item.category === categoryFilter)
			: filterListCharacter

	if (filterListCategory.length > 0) {
		return (
			<>
				{filterListCategory.map((item) => (
					<Grid item key={item.key} xs={12} sm={6} md={4} lg={3}>
						<Product product={item} />
					</Grid>
				))}
			</>
		)
	} else {
		return (
			<Grid item xs={12}>
				<p>not found</p>
			</Grid>
		)
	}
}

export default Products
