import { useNavigate } from 'react-router-dom'
import Main from '../../../Layout/Main'
import styles from './style.module.css'

const Item = ({data}) => {
	const navigate = useNavigate()
	const { image, name } = data
	return (
		<Main>
			<button onClick={() => navigate(-1)}>go back</button>
			<div className={styles.container}>
				<div className={styles.wrapperImg}>
					<img className={styles.img} src={image} alt={name} />
				</div>
				<h3>{name}</h3>
			</div>
		</Main>
	)
}

export default Item
