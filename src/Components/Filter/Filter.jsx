import { useLayoutEffect, useState } from 'react'
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { getCategory } from '../../Service'
import { useDispatch, useSelector } from 'react-redux'
import { filterCategory, filterCharacter, getFilterCategory } from '../../Redux/filterSlice'

const Filter = () => {
    const [category, setCategory] = useState([])
	const dispatch = useDispatch()
	const categoryFilter = useSelector(getFilterCategory)

    // TODO
	useLayoutEffect(() => {
		getCategory()
			.then((res) => setCategory(res))
			.catch(() => setCategory([{ value: 'server Error', key: 'error' }]))
	}, [])

	const handleChange = (event) => {
		dispatch(filterCategory(event.target.value))
	}
	const selectItem =
		category.length > 0 &&
		category.map(({ value, key }) => {
			return (
				<MenuItem key={key} value={value.toLowerCase()}>
					{value}
				</MenuItem>
			)
		})

	return (
		<Grid item xs={12}>
			<Grid container justifyContent='space-around' alignItems='baseline'>
				<Grid item xs={8} md={10}>
					<TextField
						fullWidth
						style={{ maxWidth: '700px' }}
						onChange={({ target }) => dispatch(filterCharacter(target.value.toLowerCase()))}
						label='Search ....'
					/>
				</Grid>
				<Grid item xs={3} md={2}>
					<FormControl fullWidth>
						<InputLabel id='select-category'>Category</InputLabel>
						<Select labelId='select-category' value={categoryFilter} label='Category' onChange={handleChange}>
							<MenuItem value='All'>All</MenuItem>
							{selectItem}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Filter
