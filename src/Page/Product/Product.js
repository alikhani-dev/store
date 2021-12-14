import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from './../../Context'
import styles from './style.module.css'
const ProductItem = () => {
	const [product, setProduct] = useState()
	const { loading, products } = useProducts()
	const { id } = useParams()

	useEffect(() => {
		if (products) {
			setProduct(products.find((product) => product.id === Number(id)))
		}
	}, [id, products])
	return loading ? <p>please wait ...</p> : <div></div>
}

export default ProductItem
