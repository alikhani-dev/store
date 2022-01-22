import { Button, ButtonGroup, Typography } from '@mui/material'
import { Login } from '@mui/icons-material'
import useStyles from './Style'
import { useNavigate } from 'react-router-dom'

const NotRegistered = () => {
	const styles = useStyles()
	const navigate = useNavigate()

	return (
		<ButtonGroup className={styles.wrapper} variant='text'>
			<Button className={styles.singUp} onClick={() => navigate('register')}>
				<Typography variant='body1'>Sing up</Typography>
			</Button>
			<Button className={styles.login} onClick={() => navigate('login')}>
				<Typography variant='body1'>Login</Typography>
				<Login className={styles.iconLogin} />
			</Button>
		</ButtonGroup>
	)
}

export default NotRegistered
