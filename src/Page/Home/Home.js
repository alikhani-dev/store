import { Products as ListProduct, Filter } from '../../components'
import { useProducts } from '../../context'
import { Main } from '../../layout'
import { Grid } from '@mui/material'
import Skeletons from './Skeleton'

const Home = () => {
	const { loading } = useProducts()

	return (
		<Main>
			<Grid container justifyContent='space-evenly' spacing={4} p={4}>
				<Filter />
				{loading === 'pending' && <Skeletons />}
				{loading === 'success' && <ListProduct />}
			</Grid>
		</Main>
	)
}

export default Home
