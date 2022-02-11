import { useProducts } from '../../context'
import { combineFilters as filter, useFilter } from '../../context/FilterProvider'
import Product from './Product/Product'

const Products = () => {
	const { products } = useProducts()
	const { category, search, sort } = useFilter()
	const filterProduct = filter(products, category, search, sort)

	return filterProduct.length && filterProduct.map((data) => <Product key={data.id} product={data} />)
}

export default Products
