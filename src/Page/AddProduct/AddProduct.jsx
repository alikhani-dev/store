import { useLayoutEffect, useState } from 'react'
import { Button, Grid, Card, CardContent, InputAdornment } from '@mui/material'
import { AttachMoney, AddLink, Category, Key, ProductionQuantityLimits } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { creatProduct } from '../../Service'
import { Input, Select } from './CustomInput'
import { getCategory } from '../../Service'
import { schema, defaultValues } from './validation'
import useStyles from './style'

const Dashboard = () => {
	const [category, setCategory] = useState([])
	const styles = useStyles()
	const { formState: { errors }, control, handleSubmit, reset } = useForm({ resolver: schema, defaultValues })
	const status = [
		{ value: true, key: '1', text: 'not exist' },
		{ value: false, key: '2', text: 'exist' },
	]

	useLayoutEffect(() => {
		getCategory()
			.then((res) => setCategory(res))
			.catch(() => setCategory([{ value: 'Error server', key: 1 }]))
	}, [])

    const onSubmit = (data) => creatProduct(data)


	return (
		<Card className={styles.wrapper}>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} md={5}>
							<Input control={control} error={errors?.name} label='name' placeholder='Mouse T-Wolf' />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Input
								control={control}
								error={errors?.price}
								label='price'
								placeholder='1000'
								type='number'
								InputProps={{
									endAdornment: <AttachMoney />,
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<Input
								control={control}
								error={errors?.id}
								label='id'
								placeholder='125'
								type='number'
								InputProps={{
									endAdornment: <Key />,
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md>
							<Select
								control={control}
								error={errors?.category}
								value={category}
								name='category'
								defaultValue=''
								endAdornment={
									<InputAdornment position='start'>
										<Category />
									</InputAdornment>
								}
							/>
						</Grid>
						<Grid item xs={12} md>
							<Select
								control={control}
								name='status'
								value={status}
								error={errors?.status}
								defaultValue={true}
								endAdornment={
									<InputAdornment position='start'>
										<ProductionQuantityLimits />
									</InputAdornment>
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<Input
								control={control}
								error={errors?.image}
								label='image'
								placeholder='https://www.example.com'
								InputProps={{
									endAdornment: <AddLink />,
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<Input control={control} error={errors?.description} label='description' rows={3} multiline />
						</Grid>
						<Grid item xs={12}>
							<Button type='submit' variant='contained'>
								send
							</Button>
						</Grid>
					</Grid>
				</form>
			</CardContent>
		</Card>
	)
}

export default Dashboard
