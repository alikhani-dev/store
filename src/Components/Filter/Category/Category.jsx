import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { filterCategory, getFilterCategory, typeCategory } from '../../../Redux/filterSlice'

const Category = () => {
	const categoryFilter = useSelector(getFilterCategory)
	const dispatch = useDispatch()

	const handleChangeCategory = (event) => {
		dispatch(filterCategory(event.target.value))
	}
	const selectItem = Object.values(typeCategory).map((value) => (
		<MenuItem key={value} value={value}>
			{value.toLowerCase()}
		</MenuItem>
	))

	return (
		<FormControl fullWidth>
			<InputLabel id='select-category'>Category</InputLabel>
			<Select labelId='select-category' value={categoryFilter} label='Category' onChange={handleChangeCategory}>
				{selectItem}
			</Select>
		</FormControl>
	)
}

export default Category
