import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	card: {
		boxShadow: '0 0 15px #ccc !important',
		border: 'solid 1px #cdcdcd',
		position: 'relative',
		'&:hover': {
			boxShadow: '0 0 15px #8c8c8c !important',
		},
	},
	media: {
		margin: '0 12%',
		paddingTop: '76%',
		backgroundSize: 'contain',
	},
	link: {
		position: 'absolute',
		width: '100%',
		height: 'calc(100% - 60px)',
		zIndex: 1,
	},
	content: {
		position: 'relative',
	},
	action: {
		height: '60px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	tooltip: {
		zIndex: 2,
	},
})

export default useStyles
