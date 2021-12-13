import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../../service/axios'
const Product = () => {
	const [data, setData] = useState()
	const { id } = useParams()
	useEffect(() => {
		get(`https://fakestoreapi.com/products/${id}`).then(({ data, status }) => {
			if (status === 200) setData(data)
		})
	}, [])
	let show
	if (data) {
		show = <div>{data.title}</div>
	} else {
		show = <p>please wait ...</p>
	}
	return show
}

export default Product
