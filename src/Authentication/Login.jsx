import { Button, Card, CardContent, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { schema, defaultValues } from './validation'
import { useAuth } from '../Context'
import Input from './Input'
import useStyles from './LoginStyles'

const Login = () => {
	const { login, googleSingIn } = useAuth()
	const navigate = useNavigate()
	const { control, handleSubmit, formState: { errors } } = useForm({ resolver: schema, defaultValues })
	const styles = useStyles()

	const onSubmit = async ({password,email}) => {
		try {
            await login(password,email)
            navigate('/')
		} catch (e) {
			console.log(e)
            // TODO
		}
	}

	const handelGoogleSingIn = async () => {
		try {
			await googleSingIn()
			navigate('/')
		} catch (e) {
			console.log(e)
            // TODO
		}
	}
	return (
		<Card className={styles.wrapper}>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container rowSpacing={3}>
						<Grid item xs={12}>
							<Input
								control={control}
								error={errors?.email}
								type='email'
								label='email'
								autoComplete='email'
								placeholder='example@gmail.com'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<Input
								control={control}
								error={errors?.password}
								type='password'
								label='password'
								autoComplete='password'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<Button variant='contained' fullWidth type='submit'>
								Login
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button variant='contained' fullWidth onClick={handelGoogleSingIn}>
								google
							</Button>
						</Grid>
					</Grid>
				</form>
			</CardContent>
		</Card>
	)
}

export default Login
