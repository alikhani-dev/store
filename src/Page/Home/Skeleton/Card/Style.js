import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	card: {
		boxShadow: '0 0 15px #ccc !important',
		transition: 'all .3s',
        border: 'solid 1px #cdcdcd',
		'&:hover': {
			boxShadow: '0 0 15px #8c8c8c !important',
		},
	},
})

export default useStyles
