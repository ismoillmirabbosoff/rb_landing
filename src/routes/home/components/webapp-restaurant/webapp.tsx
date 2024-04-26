import Image from 'next/image'
import Box from '@mui/material/Box'
import { FEATURES } from './constants'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { IconTick } from '@/assets/icons/tick'
import { motion, useInView } from 'framer-motion'
import Typography from '@mui/material/Typography'
import { Content, Wrapper, Container } from './style'
import ImageIphone from '@/assets/images/iphone.webp'
import { useRef, type RefObject, type LegacyRef } from 'react'
import { IconLinearGradient } from '@/assets/icons/linear-gradient'

export const WebappRestaurant = () => {
	const ref = useRef() as LegacyRef<HTMLDivElement>
	const isInView = useInView(ref as RefObject<Element>)

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
				<div ref={ref}>
					<div style={{ display: 'flex' }}>
						<motion.div
							style={{
								marginRight: '20px',
								width: isInView ? '50%' : '100%',
								transition: 'all 0.5s ease-in-out',
								transform: isInView ? 'none' : 'translateY(-120px)',
							}}
						>
							<Image fill alt='iphone-restaurant' src={ImageIphone.src} />
						</motion.div>
						<motion.div
							style={{
								paddingTop: '60px',
								opacity: isInView ? '1' : '0',
								width: isInView ? '50%' : '0',
								transform: isInView ? 'none' : 'translateX(2000px)',
								transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
							}}
						>
							<Typography variant='title10' component='h2'>
								Robo Restoran
							</Typography>
							<Typography component='h3' variant='text10'>
								It takes only{' '}
								<Typography
									component='span'
									fontWeight='500'
									variant='inherit'
									color='colors.BLACK'
								>
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
						</motion.div>
					</div>
				</div>
			</Wrapper>
		</Container>
	)
}
