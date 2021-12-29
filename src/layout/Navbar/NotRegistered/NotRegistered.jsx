import { Button, ButtonGroup, Typography } from '@mui/material'
import { Login } from '@mui/icons-material'
import useStyles from './Style'

const NotRegistered = () => {
	const styles = useStyles()
	// TODO : Action Link
	return (
		<ButtonGroup className={styles.wrapper} variant='text'>
			<Button className={styles.singUp}>
				<Typography variant='body1'>Sing up</Typography>
			</Button>
			<Button className={styles.login}>
				<Typography variant='body1'>Login</Typography>
				<Login className={styles.iconLogin} />
			</Button>
		</ButtonGroup>
	)
}

export default NotRegistered
