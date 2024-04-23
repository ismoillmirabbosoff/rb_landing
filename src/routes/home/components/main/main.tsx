import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Wrapper, WrapImage, Container } from './style'
import ImageMainBack from '@/assets/images/main-back.webp'
import ImageRobosellDark from '@/assets/images/robosell-dark.webp'

export const Main = () => {
	return (
		<Container>
			<Wrapper>
				<Stack
					gap='18px'
					flexGrow={1}
					alignItems='center'
					position='relative'
					justifyContent='center'
				>
					<Typography variant='title50' component='h1' maxWidth='921px'>
						15 minut ichida Biznesingizni Avtomatlashtiring.
					</Typography>
					<Typography variant='text' maxWidth='707px'>
						If you receive an order by phone, you can also manage those orders by entering them into
						the system.
					</Typography>
					<WrapImage>
						<Image fill alt='main-back' src={ImageMainBack.src} />
					</WrapImage>
				</Stack>
				<Image fill alt='robosell-dark' priority src={ImageRobosellDark.src} />
			</Wrapper>
		</Container>
	)
}
