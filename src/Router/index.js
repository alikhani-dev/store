import { Route, Routes } from 'react-router-dom'
import { Home, NotFound, Cart, Product } from '../page'
import { Login, Register } from '../authentication'

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='*' element={<NotFound />} />
			<Route path='cart' element={<Cart />} />
			<Route path='login' element={<Login />} />
			<Route path='register' element={<Register />} />
			<Route path='product/:id' element={<Product />} />
		</Routes>
	)
}

export default Routing
