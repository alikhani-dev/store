import { useProducts } from '../../Context'
import { Main } from '../../Layout'
import { Products as ListProduct } from '../../Components'
import CircularProgress from '@mui/material/CircularProgress'

const Home = () => {
	const { loading, products } = useProducts()
	return <Main>{loading || !products ? <CircularProgress /> : <ListProduct products={products} />}</Main>
}

export default Home
