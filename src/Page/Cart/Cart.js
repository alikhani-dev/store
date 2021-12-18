import { useEffect, useState } from 'react'
import CartList from '../../Components/CartList'
import Loader from '../../Components/Loader'
import { useCart } from '../../Context'
import Main from '../../Layout/Main'

const Cart = () => {
	const [carts, setCarts] = useState()
	const { loading, selectedItem,total } = useCart()

	useEffect(() => {
		if (selectedItem.length !== 0) {
			const items = selectedItem.map((item) => <CartList key={item.id} data={item} />)
			setCarts(items)
		} else {
			const item = <h1>not buy</h1>
			setCarts(item)
		}
	}, [loading, selectedItem])

	return loading ? <Loader /> : <Main>{carts}<h1>{total}</h1></Main>
}

export default Cart
