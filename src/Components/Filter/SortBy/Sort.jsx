import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { filterSortBy, getFilterSortBy, typeSort } from '../../../Redux/filterSlice'

const Sort = () => {
	const SortByFilter = useSelector(getFilterSortBy)
	const dispatch = useDispatch()

	const handleChangeSort = (event) => {
		dispatch(filterSortBy(event.target.value))
	}

	const SelectSortBy = Object.values(typeSort).map((value) => (
		<MenuItem key={value} value={value}>
			{value}
		</MenuItem>
	))
    
	return (
		<FormControl fullWidth>
			<InputLabel id='select-sortBy'>sortBy</InputLabel>
			<Select labelId='select-sortBy' value={SortByFilter} label='sortBy' onChange={handleChangeSort}>
				{SelectSortBy}
			</Select>
		</FormControl>
	)
}

export default Sort
