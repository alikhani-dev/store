import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import schema from './validation'
import Input from './Input'
import useStyles from './registerStyles'

const Register = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ resolver: schema, mode: 'onBlur' })
	const styles = useStyles()
	const onSubmit = (data) => console.log(data)

	return (
		<Card className={styles.wrapper}>
			<CardContent>
				<Typography variant='h4' component='h1' paragraph>
					Sing up
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm>
							<Input control={control} error={errors?.name} label='name' autoComplete='name' fullWidth />
						</Grid>
						<Grid item xs={12} sm>
							<Input control={control} error={errors?.lastName} label='lastName' fullWidth />
						</Grid>
						<Grid item xs={12}>
							<Input
								control={control}
								error={errors?.['phone Number']}
								label='phone Number'
								placeholder='09123456789'
								autoComplete='phone'
								fullWidth
							/>
						</Grid>
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
								label='password'
								type='password'
								fullWidth
								autoComplete='new-password'
							/>
						</Grid>
						<Grid item xs={12}>
							<Input
								control={control}
								error={errors?.['confirm Password']}
								label='confirm Password'
								type='password'
								fullWidth
								autoComplete='new-password'
							/>
						</Grid>
						<Grid item xs={12}>
							<Button variant='contained' color='primary' type='submit' fullWidth>
								send
							</Button>
						</Grid>
					</Grid>
				</form>
			</CardContent>
		</Card>
	)
}

export default Register
