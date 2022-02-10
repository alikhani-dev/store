import { AuthProvider, CartProvider, ProductsProvider, FilterProvider } from '.'

const Provider = ({ children }) => {
	return (
		<ProductsProvider>
			<AuthProvider>
				<FilterProvider>
					<CartProvider>{children}</CartProvider>
				</FilterProvider>
			</AuthProvider>
		</ProductsProvider>
	)
}

export default Provider
