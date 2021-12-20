import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	appBar: {
		backgroundColor: '#363a42 !important',
		boxShadow: '0px 0px 20px #8d8d8d !important',
	},
	toolbar: {
		justifyContent: 'space-between',
		padding: '0 25px !important',
	},
	input: {
		fontSize: '1rem',
		fontWeight: 400,
		backgroundColor: 'rgb(243, 246, 249)',
		border: '1px solid #e5e8ec',
		borderRadius: '6px',
		color: '#20262d',
		transition: ' width 300ms ease',
		'&:hover': {
			backgroundColor: '#eaeef3',
			borderColor: '#e5e8ec',
		},
		'&:focus': {
			outline: 'none',
			transition: 'width 200ms ease-out',
		},
	},
})

export default useStyles
