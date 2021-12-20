import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../Context'
import { Main } from '../../Layout'
import Product from './Product'

const LogicProduct = () => {
	const [item, setItem] = useState()
	const { products, loading } = useProducts()
	const { id } = useParams()

	useLayoutEffect(() => {
		if (products) {
			setItem(products.find((item) => item.id === Number(id)))
		}
	}, [id, products])

	return <Main>{!item || loading ? <p>please Wait...</p> : <Product product={item} />}</Main>
}

export default LogicProduct
