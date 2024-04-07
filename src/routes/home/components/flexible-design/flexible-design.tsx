import { Wrapper, Container } from './style'
import Typography from '@mui/material/Typography'

export const FlexibleDesign = () => {
	return (
		<Container>
			<Wrapper>
				<Typography variant='title20' component='h2'>
					Moslashuvchan Dizayn
				</Typography>
				<Typography>
					If you receive an order by phone, you can also manage those orders by entering them into
					the system.
				</Typography>
			</Wrapper>
		</Container>
	)
}
