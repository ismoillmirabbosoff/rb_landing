import Image from 'next/image'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Content, Wrapper, Container } from './style'
import ImageIphoneHeader from '@/assets/images/iphone-header.webp'
import { IconLinearGradient } from '@/assets/icons/linear-gradient'

export const Webapp = () => {
	return (
		<Container>
			<Wrapper>
				<Content>
					<Stack position='relative'>
						<Stack top='-100%' position='absolute'>
							<IconLinearGradient />
						</Stack>
						<Typography align='center' variant='title30'>
							Webapp - Sizning mobile yordamchingiz.
						</Typography>
					</Stack>
					<Typography p='36px 24px 24px' align='center' variant='text' color='colors.GRAY10'>
						If you receive an order by phone, you can also manage those orders by entering them into
						the system.
					</Typography>
					<Box>
						<Button sx={{ minWidth: '183px' }}>Sinab Ko’rish</Button>
					</Box>
				</Content>
				<Stack px='27px'>
					<Image fill alt='iphone-header' src={ImageIphoneHeader.src} />
				</Stack>
			</Wrapper>
		</Container>
	)
}
