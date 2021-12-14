import Main from '../../layout/Main'
import Products from '../../Components/Products'
import { useProducts } from './../../Context'

const Home = () => {
	const { loading } = useProducts()

	return loading ? (
		<p>please wait...</p>
	) : (
		<Main>
			<Products />
		</Main>
	)
}

export default Home
