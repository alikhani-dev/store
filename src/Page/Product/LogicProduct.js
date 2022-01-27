import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Main } from '../../Layout'
import { getProducts, getStatus } from '../../Redux/productSlice'
import Product from './Product'
import { useSelector } from 'react-redux'

const LogicProduct = () => {
	const products = useSelector(getProducts)
	const status = useSelector(getStatus)
	const [productShow, setProductShow] = useState()
	const { id } = useParams()

	useLayoutEffect(() => {
		if (products) {
			setProductShow(products[id])
		}
	}, [id, products])

	return (
		<Main>
			{status === 'pending' && <p>please Wait...</p>}
			{status === 'success' && productShow && <Product product={productShow} />}
		</Main>
	)
}

export default LogicProduct
