import { TextField } from '@mui/material'
import { filterCharacter } from '../../../Redux/filterSlice'
import { useDispatch } from 'react-redux'

const Search = () => {
	const dispatch = useDispatch()

	return (
		<TextField
			fullWidth
			style={{ maxWidth: '700px' }}
			onChange={({ target }) => dispatch(filterCharacter(target.value.toLowerCase()))}
			label='Search ....'
		/>
	)
}

export default Search
