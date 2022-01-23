import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	link: {
		color: '#555',
        textDecoration:'underline',
		transition: 'all .3s',
		'&:hover': {
			color: '#000',
		},
	},
})

export default useStyles
