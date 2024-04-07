import { Wrapper, Container } from './style'
import Typography from '@mui/material/Typography'

export const Chat = () => {
	return (
		<Container>
			<Wrapper>
				<Typography variant='title40' component='h2'>
					Mijoz bilan doimiy aloqa
				</Typography>
				<Typography>
					If you receive an order by phone, you can also manage those orders by entering them into
					the system.
				</Typography>
			</Wrapper>
		</Container>
	)
}
