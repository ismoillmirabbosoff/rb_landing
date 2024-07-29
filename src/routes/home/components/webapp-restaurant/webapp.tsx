import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { FEATURES } from './constants'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'
import { IconTick } from '@/assets/icons/tick'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import ImageIphone from '@/assets/images/iphone.webp'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useInView } from 'react-intersection-observer'
import { IconLinearGradient } from '@/assets/icons/linear-gradient'
import {
	Content,
	Wrapper,
	Container,
	WrapImage,
	WrapCircle,
	WrapContent,
	WrapMobile,
	WrapLinearGradient,
} from './style'

const adminBaseURL = process.env.NEXT_PUBLIC_ADMIN_BASE_URL

const variants = {
	closed: { width: '100%', marginRight: 0 },
	open: { width: '50%', marginRight: '50px' },
}

export const WebappRestaurant = () => {
	const theme = useTheme()
	const inView = useInView({ threshold: 0 })
	const { t } = useTranslation('common')
	const matches = useMediaQuery(theme.breakpoints.down('md'))
	const view = inView.inView || matches
	const contentRef = useRef<HTMLDivElement | null>(null)
	const [distance, setDistance] = useState(0)

	useEffect(() => {
		const updateDistances = () => {
			if (contentRef.current) {
				const contentBottom = contentRef.current.getBoundingClientRect().bottom
				const scrollTop = window.scrollY || document.documentElement.scrollTop
				const documentHeight = document.documentElement.scrollHeight
				const bottomDistance = documentHeight - (contentBottom + scrollTop)
				setDistance(bottomDistance)
			}
		}

		updateDistances()
		window.addEventListener('resize', updateDistances)
		window.addEventListener('scroll', updateDistances)

		return () => {
			window.removeEventListener('resize', updateDistances)
			window.removeEventListener('scroll', updateDistances)
		}
	}, [])

	return (
		<Container>
			<Wrapper>
				<Content>
					<Stack position='relative'>
						<WrapLinearGradient>
							<IconLinearGradient />
						</WrapLinearGradient>
						<Typography align='center' variant='title30'>
							{t('robosell_is_your_reliable_business_partner')}
						</Typography>
					</Stack>
					<Typography p='36px 24px 24px' align='center' variant='text' color='colors.GRAY10'>
						{t('simplify_your_life_and_increase_your_business_income_with_robosell')}
					</Typography>
					<Box>
						<Button target='_blank' component={Link} href={adminBaseURL} sx={{ minWidth: '183px' }}>
							{t('try_it')}
						</Button>
					</Box>
				</Content>
				<Box width='100%'>
					<WrapImage
						ref={contentRef}
						sx={{
							'.scroll': {
								height: `${distance}px`,
							},
						}}
					>
						<div ref={inView.ref} className='scroll' />
						<WrapMobile variants={variants} animate={view ? 'open' : 'closed'}>
							<WrapCircle
								style={{
									padding: view ? '0 130px' : 0,
								}}
							>
								<Image fill src={ImageIphone.src} alt='iphone-restaurant' />
							</WrapCircle>
						</WrapMobile>
						<WrapContent isView={view}>
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
								<Button sx={{ minWidth: '183px' }}>{t('start')}</Button>
							</Box>
						</WrapContent>
					</WrapImage>
				</Box>
			</Wrapper>
		</Container>
	)
}
