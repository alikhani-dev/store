import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	card: {
		boxShadow: '0 0 15px #ccc !important',
		border: 'solid 1px #cdcdcd',
		position: 'relative',
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
	status: {
		position: 'absolute',
		width: '9px',
		height: '9px',
		backgroundColor: (status) => (status ? '#02af02' : '#e52f2f'),
		borderRadius: '50%',
		right: '15px',
	},
	action: {
		height: '60px',
		display: 'flex',
		justifyContent: 'space-between',
	},
})

export default useStyles
