import { Route, Routes } from 'react-router-dom'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Home from './Page/Home'
import Cart from './Page/Cart'
import Product from './Page/Product'
import NotFound from './Page/NotFound'

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='product/:id' element={<Product />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
