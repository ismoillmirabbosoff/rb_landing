import Image from 'next/image'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { FEATURES } from './constants'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { IconTick } from '@/assets/icons/tick'
import Typography from '@mui/material/Typography'
import { Content, Wrapper, Container } from './style'
import ImageIphone from '@/assets/images/iphone.webp'
import { IconLinearGradient } from '@/assets/icons/linear-gradient'

export const WebappRestaurant = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight
			const elementPosition = document.getElementById('trigger-element')?.offsetTop ?? 0
			if (scrollPosition - 200 > elementPosition) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

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
				<div>
					<div id='trigger-element' />
					<div style={{ display: 'flex' }}>
						<motion.div
							style={{
								marginRight: '20px',
								width: isVisible ? '50%' : '100%',
								transition: 'width 0.5s ease-in-out',
							}}
						>
							<Image fill alt='iphone-restaurant' src={ImageIphone.src} />
						</motion.div>
						<Stack
							component={motion.div}
							sx={{
								pt: '60px',
								opacity: isVisible ? '1' : '0',
								width: isVisible ? '50%' : '0%',
								transition: 'width 1s ease-in-out',
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
						</Stack>
					</div>
				</div>
			</Wrapper>
		</Container>
	)
}
