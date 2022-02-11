import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	card: {
		boxShadow: '0 0 15px #ccc !important',
		border: 'solid 1px #cdcdcd',
		'&:hover': {
			boxShadow: '0 0 15px #8c8c8c !important',
		},
	},
	mediaContainer: {
		position: 'relative',
	},
	media: {
		margin: '0 12%',
		paddingTop: '76%',
		backgroundSize: 'contain',
	},
	link: {
		inset: 0,
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
})

export default useStyles
