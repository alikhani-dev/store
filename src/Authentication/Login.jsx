import { Button, Card, CardContent, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import Input from './Input'
import schema from './validation'
import useStyles from './LoginStyles'

const Login = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: schema })
	const styles = useStyles()
	const onSubmit = (data) => console.log(data)

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
					</Grid>
				</form>
			</CardContent>
		</Card>
	)
}

export default Login
