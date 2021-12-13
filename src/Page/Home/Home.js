import { useEffect, useState } from 'react'
import Main from '../../layout/Main'
import Product from '../../Components/Product'
import { get } from '../../service/axios'

const Home = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		get(`https://fakestoreapi.com/products`)
			.then(({ status, data }) => status === 200 && setData(data))
			.catch(() => console.log('error'))
	}, [])
	let Products = null
	if (data) {
		Products = data.map(({ id, title, price, image }) => (
			<Product key={id} image={image} id={id} title={title} price={price} />
		))
	}
	return <Main>{Products ? Products : <p>loader</p>}</Main>
}

export default Home
