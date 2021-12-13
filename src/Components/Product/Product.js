import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Product = ({ id, title, price, image }) => {
	return (
		<div className={styles.card}>
			<Link to={`product/${id}`} className={styles.link} />
			<div className={styles.wrapperImg}>
				<img className={styles.img} alt={`image ` + title} src={image} />
			</div>
			<h3 className={styles.title}>{title}</h3>
		</div>
	)
}

export default Product
