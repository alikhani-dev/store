import { useState } from 'react'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { schema, defaultValues } from './validation'
import { Toast } from '../../components'
import { useAuth } from '../../context'
import Input from '../FormTools/CustomTextField'
import useStyles from './Style'

const Register = () => {
	const [open, setOpen] = useState(false)
	const [error, setError] = useState(null)
	const { singUp } = useAuth()
	const navigate = useNavigate()
	const { handleSubmit, control, formState: { errors } } = useForm({ resolver: schema, defaultValues })
	const styles = useStyles()

	const handelClose = (e, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	const onSubmit = async (data) => {
		try {
			await singUp(data)
			navigate('/')
		} catch ({ code }) {
			setError(code)
			setOpen(true)
		}
	}

	return (
		<Card className={styles.wrapper}>
			<Toast title='Error' type='error' open={open} message={error} onClose={handelClose} autoHideDuration={5000} />
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
