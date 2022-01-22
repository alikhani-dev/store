import { useProducts } from '../../Context'
import { Main } from '../../Layout'
import { Products as ListProduct } from '../../Components'
import Skeletons from './Skeleton'
import { Grid } from '@mui/material'

const Home = () => {
	const { loading, products } = useProducts()
	return (
		<Main>
			<Grid container justifyContent='space-evenly' spacing={4} p={4}>
				{loading || !products ? <Skeletons /> : <ListProduct products={products} />}
			</Grid>
		</Main>
	)
}

export default Home
