import { Link } from 'react-router-dom'
import styles from './style.module.css'
import { checkExist } from '../../helper'
import { useCard, useCardDispatch } from '../../Context'

const Product = ({ data }) => {
	const { selectedItem } = useCard()
	const { incrementProduct, decrementProduct, addProduct } = useCardDispatch()
	const { id, title, image } = data
	const status = checkExist(selectedItem, id)
	return (
		<div className={styles.card}>
			<div className={styles.wrapperImg}>
				<Link to={`product/${id}`} className={styles.link}>
					<img className={styles.img} alt={`image ` + title} src={image} />
				</Link>
			</div>
			<h3 className={styles.title}>{title}</h3>
			<div>
				{status ? (
					<button onClick={() => incrementProduct(id)}>+</button>
				) : (
					<button onClick={() => addProduct(data)}>add Card</button>
				)}
				{status && <button onClick={() => decrementProduct(id)}>-</button>}
			</div>
		</div>
	)
}

export default Product
