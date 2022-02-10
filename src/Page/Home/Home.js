import { Products as ListProduct, Filter } from '../../Components'
import { useProducts } from '../../Context'
import { Main } from '../../Layout'
import { Grid } from '@mui/material'
import Skeletons from './Skeleton'

const Home = () => {
	const { loading } = useProducts()
	return (
		<Main>
			<Grid container justifyContent='space-evenly' spacing={4} p={4}>
				<Filter />
				{loading ? <Skeletons /> : <ListProduct />}
			</Grid>
		</Main>
	)
}

export default Home
