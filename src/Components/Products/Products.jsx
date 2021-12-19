import { Grid } from '@mui/material'
import Product from './Product'

const Products = ({ products }) => {
	return (
		<Grid container justifyContent='space-evenly' spacing={4} columns={12} p={4}>
			{products.map((item) => (
				<Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
					<Product product={item} />
				</Grid>
			))}
		</Grid>
	)
}

export default Products
