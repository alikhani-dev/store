import { useState } from 'react'
import { Products as ListProduct, Filter } from '../../Components'
import { useProducts } from '../../Context'
import { Main } from '../../Layout'
import { Grid } from '@mui/material'
import Skeletons from './Skeleton'

const Home = () => {
	const { loading, products } = useProducts()
	const [characterFilter, setCharacterFilter] = useState()
	const [categoryFilter, setCategoryFilter] = useState('All')

	return (
		<Main>
			<Grid container justifyContent='space-evenly' spacing={4} p={4}>
				<Filter
					setCharacterFilter={setCharacterFilter}
					setCategoryFilter={setCategoryFilter}
					categoryFilter={categoryFilter}
				/>
				{loading ? (
					<Skeletons />
				) : (
					<ListProduct listProduct={products} characterFilter={characterFilter} categoryFilter={categoryFilter} />
				)}
			</Grid>
		</Main>
	)
}

export default Home
