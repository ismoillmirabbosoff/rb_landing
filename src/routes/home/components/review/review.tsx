import { Wrapper, Container } from './style'
import Typography from '@mui/material/Typography'

export const Review = () => {
	return (
		<Container>
			<Wrapper>
				<Typography variant='title' component='h2' lineHeight='67px'>
					What are they saying about us?
				</Typography>
			</Wrapper>
		</Container>
	)
}
