import { Button, ButtonGroup, Typography } from '@mui/material'
import { Login } from '@mui/icons-material'
import useStyles from './Style'
import { Link } from 'react-router-dom'

const NotRegistered = () => {
	const styles = useStyles()

	return (
		<ButtonGroup className={styles.wrapper} variant='text'>
			<Button className={styles.singUp}>
				<Typography variant='body1'>Sing up</Typography>
				<Link className={styles.link} to='register' />
			</Button>
			<Button className={styles.login}>
				<Typography variant='body1'>Login</Typography>
				<Login className={styles.iconLogin} />
				<Link className={styles.link} to='login' />
			</Button>
		</ButtonGroup>
	)
}

export default NotRegistered
