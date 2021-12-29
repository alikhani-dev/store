import { Route, Routes } from 'react-router-dom'
import { Home, NotFound, Cart, Product, AddProduct } from '../Page'
import { Login, Register } from '../Authentication'
import ProtectRoute from './ProtectRoute'

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='*' element={<NotFound />} />
			<Route path='cart' element={<Cart />} />
			<Route path='login' element={<Login />} />
			<Route path='register' element={<Register />} />
			<Route path='product/:id' element={<Product />} />
			<Route path='addProduct' element={<ProtectRoute element={<AddProduct />} />} />
		</Routes>
	)
}

export default Routing
