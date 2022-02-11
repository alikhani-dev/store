import { TextField } from '@mui/material'
import { setSearch, useFilter, useFilterDispatch } from '../../../Context/FilterProvider'

const Search = () => {
	const { search } = useFilter()
	const dispatch = useFilterDispatch()

	const handelTextFieldChange = (event) => {
		dispatch(setSearch(event.target.value.toLowerCase()))
	}

	return <TextField fullWidth value={search} onChange={handelTextFieldChange} label='Search ....' />
}

export default Search
