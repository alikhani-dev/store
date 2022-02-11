import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../context'
import { Main } from '../../layout'
import Loading from './Loading'
import Product from './Product'

const LogicProduct = () => {
	const [item, setItem] = useState()
	const { products } = useProducts()
	const { id } = useParams()

	useLayoutEffect(() => {
		if (products) setItem(products.find((item) => item.id === Number(id)))
	}, [id, products])

	return <Main>{item ? <Product product={item} /> : <Loading />}</Main>
}

export default LogicProduct
