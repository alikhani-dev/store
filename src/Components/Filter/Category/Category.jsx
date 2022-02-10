import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { categoryList, setCategory, useFilter, useFilterDispatch } from '../../../Context/FilterProvider'

const Category = () => {
	const { category } = useFilter()
	const dispatch = useFilterDispatch()

	const handelCategoryChange = (event) => {
		dispatch(setCategory(event.target.value))
	}

	const selectCategory = categoryList.map((value) => (
		<MenuItem key={value} value={value}>
			{value[0].toUpperCase() + value.slice(1)}
		</MenuItem>
	))

	return (
		<FormControl fullWidth>
			<InputLabel id='select-category'>Category</InputLabel>
			<Select labelId='select-category' value={category} label='Category' onChange={handelCategoryChange}>
				{selectCategory}
			</Select>
		</FormControl>
	)
}

export default Category
