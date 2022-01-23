import { useLayoutEffect, useState } from 'react'
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { getCategory } from '../../Service'

const Filter = ({ setCharacterFilter, setCategoryFilter, categoryFilter }) => {
	const [category, setCategory] = useState([])

	useLayoutEffect(() => {
		getCategory()
			.then((res) => setCategory(res))
			.catch(() => setCategory([{ value: 'server Error', key: 'error' }]))
	}, [])

	const handleChange = (event) => {
		setCategoryFilter(event.target.value)
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
						onChange={({ target }) => setCharacterFilter(target.value.toLowerCase())}
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
