import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ProductsProvider from './Context'
import './index.css'

render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductsProvider>
				<App />
			</ProductsProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
