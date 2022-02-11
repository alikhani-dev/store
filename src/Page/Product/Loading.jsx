import { Container, Grid, Skeleton, Typography } from '@mui/material'

const Loading = () => {
	return (
		<Container>
			<Grid container justifyContent='center' p={4}>
				<Skeleton variant='rectangular' animation='wave' height={400} width={400} />
			</Grid>
			<Grid>
				<Typography variant='h2' gutterBottom>
					<Skeleton variant='rectangular' animation='wave' height={72} width={200} />
				</Typography>
				<Typography variant='h4' gutterBottom>
					<Skeleton variant='rectangular' animation='wave' height={42} width={100} />
				</Typography>
				<Typography variant='body1'>
					<Skeleton variant='rectangular' animation='wave' height={24} />
				</Typography>
			</Grid>
		</Container>
	)
}

export default Loading
