import Image from 'next/image'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { FEATURES } from './constants'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Wrapper, Container } from './style'
import { IconTick } from '@/assets/icons/tick'
import Typography from '@mui/material/Typography'
import { useInView } from 'react-intersection-observer'
import ImageIphoneShop from '@/assets/images/iphone-shop.webp'

export const WebappShop = () => {
	const view = useInView({ threshold: 0 })

	return (
		<Container>
			<Wrapper>
				<Stack ref={view.ref} width='100%' direction='row' justifyContent='space-between'>
					<Stack
						pt='60px'
						width='100%'
						maxWidth='580px'
						component={motion.div}
						style={{
							opacity: view.inView ? '1' : '0',
							transform: view.inView ? 'none' : 'translateX(-100vw)',
							transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}
					>
						<Typography variant='title10' component='h2'>
							Robo Shop
						</Typography>
						<Typography component='h3' variant='text10'>
							It takes only{' '}
							<Typography component='span' fontWeight='500' variant='inherit' color='colors.BLACK'>
								15 minutes
							</Typography>{' '}
							to create a store and you can start selling
						</Typography>
						<Stack gap='26px' m='28px 0 48px' component='ul'>
							{FEATURES.map((f, i: number) => (
								<Stack gap='15px' key={i} component='li' direction='row' alignItems='center'>
									<Stack>
										<IconTick />
									</Stack>
									<Stack>
										<Typography component='h4' variant='title60'>
											{f.title}
										</Typography>
										<Typography component='h5' variant='text20'>
											{f.text}
										</Typography>
									</Stack>
								</Stack>
							))}
						</Stack>
						<Box>
							<Button sx={{ minWidth: '183px' }}>Sinab Ko’rish</Button>
						</Box>
					</Stack>
					<Stack maxWidth='477px'>
						<Image fill alt='iphone-shop' src={ImageIphoneShop.src} />
					</Stack>
				</Stack>
			</Wrapper>
		</Container>
	)
}
