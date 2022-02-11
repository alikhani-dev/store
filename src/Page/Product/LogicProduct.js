import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../Context'
import { Main } from '../../Layout'
import Loading from './Loading'
import Product from './Product'

const LogicProduct = () => {
	const [item, setItem] = useState()
	const { products, loading } = useProducts()
	const { id } = useParams()

	useLayoutEffect(() => {
		if (products) {
			setItem(products.find((item) => item !== null && item.id === Number(id)))
		}
	}, [id, products])

	return <Main>{!item || loading ? <Loading /> : <Product product={item} />}</Main>
}

export default LogicProduct
