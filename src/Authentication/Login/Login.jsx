import { useState } from 'react'
import { Button, Card, CardContent, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { schema, defaultValues } from './validation'
import { useAuth } from '../../context'
import { Toast } from '../../components'
import Input from '../FormTools/CustomTextField'
import useStyles from './Style'

const Login = () => {
	const [open, setOpen] = useState(false)
	const [error, setError] = useState(null)
	const { login, googleSingIn } = useAuth()
	const navigate = useNavigate()
	const styles = useStyles()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: schema, defaultValues })

	const handelClose = (e, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	const onSubmit = async ({ email, password }) => {
		try {
			await login(email, password)
			navigate('/')
		} catch ({ code }) {
			setError(code)
			setOpen(true)
		}
	}

	const handelGoogleSingIn = async () => {
		try {
			await googleSingIn()
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
