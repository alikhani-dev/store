import { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import { useProducts } from '../../Context'
import Main from '../../Layout/Main'
import Product from '../../Components/Product'

const Home = () => {
	const [items, setItems] = useState()
	const { loading, products } = useProducts()

	useEffect(() => {
		if (products) {
			setItems(products.map((product) => <Product key={product.id} data={product} />))
		}
	}, [products])

	return loading ? <Loader /> : <Main>{items}</Main>
}

export default Home
