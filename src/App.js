import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Layout'
import { Home, NotFound, Cart, Product } from './Page'
import { Login, Register } from './Authentication'

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='product/:id' element={<Product />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
