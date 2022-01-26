import { Grid } from '@mui/material'
import Category from './Category'
import Search from './Search'
import Sort from './SortBy'

const Filter = () => {
	return (
		<Grid item xs={12}>
			<Grid container justifyContent='space-around' alignItems='baseline' spacing={{ xs: 4 }}>
				<Grid item xs={12} sm={7} xl={8}>
					<Search />
				</Grid>
				<Grid item xs>
					<Category />
				</Grid>
				<Grid item xs>
					<Sort />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Filter
