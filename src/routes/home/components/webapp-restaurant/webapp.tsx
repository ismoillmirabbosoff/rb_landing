import Image from 'next/image'
import Box from '@mui/material/Box'
import { FEATURES } from './constants'
import { motion } from 'framer-motion'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'
import { IconTick } from '@/assets/icons/tick'
import Typography from '@mui/material/Typography'
import ImageIphone from '@/assets/images/iphone.webp'
import { useInView } from 'react-intersection-observer'
import { IconLinearGradient } from '@/assets/icons/linear-gradient'
import { Content, Wrapper, Container, WrapImage, WrapCircle } from './style'

const variants = {
	closed: { width: '100%', marginRight: 0 },
	open: { width: '50%', marginRight: '50px' },
}

export const WebappRestaurant = () => {
	const view = useInView({ threshold: 0 })
	const { t } = useTranslation('common')

	return (
		<Container>
			<Wrapper>
				<Content>
					<Stack position='relative'>
						<Stack top='-100%' position='absolute'>
							<IconLinearGradient />
						</Stack>
						<Typography align='center' variant='title30'>
							{t('robosell_is_your_reliable_business_partner')}
						</Typography>
					</Stack>
					<Typography p='36px 24px 24px' align='center' variant='text' color='colors.GRAY10'>
						{t('simplify_your_life_and_increase_your_business_income_with_robosell')}
					</Typography>
					<Box>
						<Button sx={{ minWidth: '183px' }}>{t('try_it_out')}</Button>
					</Box>
				</Content>
				<Box width='100%'>
					<WrapImage>
						<div ref={view.ref} className='scroll' />
						<motion.div
							variants={variants}
							animate={view.inView ? 'open' : 'closed'}
							style={{
								transition: 'all 0.5s ease-in-out',
							}}
						>
							<WrapCircle
								style={{
									padding: view.inView ? '0 130px' : 0,
								}}
							>
								<Image
									fill
									src={ImageIphone.src}
									alt='iphone-restaurant'
									style={{ minHeight: '680px', minWidth: '306px' }}
								/>
							</WrapCircle>
						</motion.div>
						<motion.div
							style={{
								paddingTop: '60px',
								opacity: view.inView ? '1' : '0',
								width: view.inView ? '50%' : '0',
								transform: view.inView ? 'none' : 'translateX(2000px)',
								transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
							}}
						>
							<Typography variant='title10' component='h2'>
								{t('robo_restaurant')}
							</Typography>
							<Typography component='h3' variant='text10'>
								{t('create_convenience_for_your_guests_and_increase_your_sales')}
							</Typography>
							<Stack gap='26px' m='28px 0 48px' component='ul'>
								{FEATURES.map((f, i: number) => (
									<Stack gap='15px' key={i} component='li' direction='row' alignItems='center'>
										<Stack>
											<IconTick />
										</Stack>
										<Stack>
											<Typography component='h4' variant='title60'>
												{t(f.title)}
											</Typography>
											<Typography component='h5' variant='text20'>
												{t(f.text)}
											</Typography>
										</Stack>
									</Stack>
								))}
							</Stack>
							<Box>
								<Button sx={{ minWidth: '183px' }}>{t('try_it_out')}</Button>
							</Box>
						</motion.div>
					</WrapImage>
				</Box>
			</Wrapper>
		</Container>
	)
}
