import { Products, Filter } from '../../Components'
import { getProducts, getStatus } from '../../Redux/productSlice'
import { useSelector } from 'react-redux'
import { Main } from '../../Layout'
import { Grid } from '@mui/material'
import Skeletons from './Skeleton'

const Home = () => {
	const products = useSelector(getProducts)
	const status = useSelector(getStatus)

	return (
		<Main>
			<Grid container justifyContent='space-evenly' spacing={4} p={4}>
				{status === 'pending' && <Skeletons />}
				{status === 'success' && <Filter />}
				{status === 'success' && <Products listProduct={products} />}
			</Grid>
		</Main>
	)
}

export default Home
