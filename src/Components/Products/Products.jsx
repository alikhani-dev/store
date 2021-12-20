import { SearchOutlined } from '@mui/icons-material'
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import Product from './Product'

const Products = ({ products }) => {
	const [character, setCharacter] = useState()

	return (
		<Grid container justifyContent='space-evenly' spacing={4} columns={12} p={4}>
			<Grid item xs={12} textAlign='center'>
				<TextField
					fullWidth
					style={{ maxWidth: '700px' }}
					onChange={({ target }) => setCharacter(target.value.toLowerCase())}
					label='Search ....'
				/>
			</Grid>
			{products
				.filter((item) => (character ? item.name.toLowerCase().startsWith(character) : item))
				.map((item) => (
					<Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={item} />
					</Grid>
				))}
		</Grid>
	)
}

export default Products
