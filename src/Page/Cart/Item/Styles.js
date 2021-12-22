import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	card: {
		padding: '15px',
		display: 'flex',
		margin: '20px',
		boxShadow: '0 0 7px #aaa !important',
	},
	media1: { width: '170px !important' },
	boxWrapper: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
	boxChild: { display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' },
})

export default useStyles
