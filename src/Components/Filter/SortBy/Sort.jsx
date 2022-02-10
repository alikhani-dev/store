import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { setSort, sortList, useFilter, useFilterDispatch } from '../../../Context/FilterProvider'

const Sort = () => {
	const { sort } = useFilter()
	const dispatch = useFilterDispatch()

	const handelSortChange = (event) => {
		dispatch(setSort(event.target.value.toLowerCase()))
	}

	const selectSort = sortList.map((value) => (
		<MenuItem key={value} value={value}>
			{value[0].toUpperCase() + value.slice(1)}
		</MenuItem>
	))

	return (
		<FormControl fullWidth>
			<InputLabel id='select-sort'>Sort</InputLabel>
			<Select labelId='select-sort' value={sort} label='Sort' onChange={handelSortChange}>
				{selectSort}
			</Select>
		</FormControl>
	)
}

export default Sort
