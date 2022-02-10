import { Grid } from '@mui/material'
import Category from './Category/Category'
import Sort from './SortBy/Sort'
import Search from './Search/Search'

const Filter = () => {
	return (
		<Grid item xs={12}>
			<Grid container justifyContent='space-around' alignItems='baseline'>
				<Grid item xs={12}>
					<Search />
				</Grid>
				<Grid item xs={12}>
					<Category />
				</Grid>
				<Grid item xs={12}>
					<Sort />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Filter
