import { useProducts } from './../../Context'
import Product from './Product'

const Products = () => {
	const { products } = useProducts()
	const Items = products.map(({ id, image, title }) => <Product key={id} id={id} image={image} title={title} />)
	return Items
}

export default Products
