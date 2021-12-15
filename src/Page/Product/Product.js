import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../Components/Loader'
import { useData } from '../../Context'
import Item from './Item'

const ProductItem = () => {
	const [product, setProduct] = useState()
	const { loading, products } = useData()
	const { id } = useParams()

	useEffect(() => {
		if (products) {
			setProduct(products.find((product) => product.id === Number(id)))
		}
	}, [id, products])

	return loading || !product ? <Loader /> : <Item title={product.title} image={product.image} />
}

export default ProductItem
