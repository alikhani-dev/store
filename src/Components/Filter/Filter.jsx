import { Grid } from '@mui/material'
import Category from './Category/Category'
import Sort from './SortBy/Sort'
import Search from './Search/Search'

const Filter = () => {
	return (
		<Grid item xs={12}>
			<Grid container justifyContent='space-around' alignItems='baseline'>
				<Grid item xs={12} md={6} p>
					<Search />
				</Grid>
				<Grid item xs={12} sm p>
					<Category />
				</Grid>
				<Grid item xs={12} sm p>
					<Sort />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Filter
