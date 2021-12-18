import { Link } from 'react-router-dom'
import styles from './style.module.css'
import { checkExist, countProduct } from '../../Helper'
import { useCart, useCartDispatch } from '../../Context'
import { BsTrash } from 'react-icons/bs'
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'

const Product = ({ data }) => {
	const { incrementProduct, decrementProduct, addProduct, removeProduct } = useCartDispatch()
	const { selectedItem } = useCart()
	const { id, title, image } = data
	const status = checkExist(selectedItem, id)
	const count = countProduct(selectedItem, id)

	return (
		<div className={styles.cart}>
			<div className={styles.wrapperImg}>
				<Link to={`product/${id}`} className={styles.link}>
					<img className={styles.img} alt={`image ` + title} src={image} />
				</Link>
			</div>
			<h3 className={styles.title}>{title}</h3>
			<div>
				{status ? 
				<button onClick={() => incrementProduct(id)}><AiOutlinePlusCircle/></button> : 
				<button onClick={() => addProduct(data)}>add Cart</button> }
				{count === 1 && <button onClick={() => removeProduct(id)}><BsTrash/></button>}
				{count > 1 && <button onClick={() => decrementProduct(id)}><AiOutlineMinusCircle/></button>}
			</div>
		</div>
	)
}

export default Product
