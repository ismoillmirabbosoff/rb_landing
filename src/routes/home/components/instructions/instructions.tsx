import { Wrapper, Container } from './style'
import Typography from '@mui/material/Typography'

export const Instructions = () => {
	return (
		<Container>
			<Wrapper>
				<Typography variant='title10' component='h2'>
					How It Works
				</Typography>
				<Typography component='h3' variant='text10'>
					It takes only{' '}
					<Typography component='span' fontWeight='500' variant='inherit' color='colors.BLACK'>
						15 minutes
					</Typography>{' '}
					to create a store and you can start selling
				</Typography>
			</Wrapper>
		</Container>
	)
}
