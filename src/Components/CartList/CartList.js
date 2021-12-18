const CartList = ({data}) => {
	const { name, price } = data
	return (
		<div>
			<h1>{name}</h1>
			<p>{price}</p>
		</div>
	)
}

export default CartList
