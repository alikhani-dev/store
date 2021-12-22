import { Grid, TextField } from '@mui/material'

const InputSearch = ({ setCharacter }) => {
	return (
		<Grid item xs={12} textAlign='center'>
			<TextField
				fullWidth
				style={{ maxWidth: '700px' }}
				onChange={({ target }) => setCharacter(target.value.toLowerCase())}
				label='Search ....'
			/>
		</Grid>
	)
}

export default InputSearch
