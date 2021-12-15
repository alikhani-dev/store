import { useNavigate } from 'react-router-dom'
import Main from '../../../Layout/Main'
import styles from './style.module.css'

const Item = ({ title, image }) => {
	const navigate = useNavigate()

	return (
		<Main>
			<button onClick={() => navigate(-1)}>go back</button>
			<div className={styles.container}>
				<div className={styles.wrapperImg}>
					<img className={styles.img} src={image} alt={title} />
				</div>
				<h3>{title}</h3>
			</div>
		</Main>
	)
}

export default Item
