import { Grid, Skeleton, Stack, Typography } from '@mui/material'
import useStyles from './Style'

const SkeletonCm = () => {
	const styles = useStyles()

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Stack spacing={1} p={2} className={styles.card}>
				<Skeleton variant='rectangular' animation='wave' height={223} />
				<Typography variant='h6' gutterBottom>
					<Skeleton variant='text' animation='wave' height={32} />
				</Typography>
				<Typography variant='body2' noWrap>
					<Skeleton variant='text' animation='wave' height={20} />
				</Typography>
				<Grid container justifyContent='space-between' alignItems='center'>
					<Typography variant='body2' m={2}>
						<Skeleton variant='text' animation='wave' height={20} width={30} />
					</Typography>
					<Skeleton variant='text' animation='wave' height={40} width={40} />
				</Grid>
			</Stack>
		</Grid>
	)
}

export default SkeletonCm
