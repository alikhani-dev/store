import { useLayoutEffect, useState } from 'react'
import CardList from '../../Components/CardList'
import Loader from '../../Components/Loader'
import { useCard } from '../../Context'
import Main from '../../Layout/Main'

const Card = () => {
	const [items, setItems] = useState()
	const { loading, selectedItem } = useCard()
	useLayoutEffect(() => {
		if (selectedItem) {
			setItems(selectedItem.map(({ id, price, title }) => <CardList key={id} price={price} title={title} />))
		}
	}, [loading, selectedItem])

	return loading ? <Loader /> : <Main>{items}</Main>
}

export default Card
