import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Layout'
import { Home, NotFound, Cart } from './Page'

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App