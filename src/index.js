import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { fetchProducts } from './Redux/productSlice'
import { Provider } from 'react-redux'
import { AuthProvider } from './Context'
import store from './Redux'
import App from './App'
import './index.css'

store.dispatch(fetchProducts())

render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<AuthProvider>
					<App />
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
