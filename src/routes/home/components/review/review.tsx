import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import { IconQuote } from '@/assets/icons/quote'
import Typography from '@mui/material/Typography'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Card, Wrapper, WrapUser, Avatar, Container } from './style'
import { REVIEWS } from './constants'
import { Box } from '@mui/material'

export const Review = () => {
	const theme = useTheme()
	const { t } = useTranslation('common')

	return (
		<Container>
			<Wrapper>
				<Typography
					variant='title'
					component='h2'
					maxWidth='652px'
					lineHeight={{ xs: '30px', md: '67px' }}
				>
					{t('feedback_from_our_partners')}
				</Typography>
				<Box style={{ width: '100%' }}>
					<Swiper
						// loop={true}
						// speed={7000}
						// modules={[Autoplay, Navigation, Pagination]}
						// autoplay={{
						// 	delay: 0,
						// 	stopOnLastSlide: false,
						// 	pauseOnMouseEnter: true,
						// 	waitForTransition: true,
						// 	disableOnInteraction: false,
						// }}
						breakpoints={{
							[theme.breakpoints.values.xs]: {
								spaceBetween: 20,
								slidesPerView: 1.2,
							},
							[theme.breakpoints.values.sm]: {
								spaceBetween: 30,
								slidesPerView: 3.5,
							},
						}}
					>
						{REVIEWS.map(({ text, owner, company }, i: number) => (
							<SwiperSlide key={i}>
								<Card>
									<Stack>
										<Stack mb='10px'>
											<IconQuote />
										</Stack>
										<Typography maxWidth='440px' variant='text60'>
											{t(text)}
										</Typography>
									</Stack>
									<WrapUser>
										<Avatar />
										<Stack justifyContent='center'>
											<Typography variant='text60' fontWeight='400'>
												{t(owner)}
											</Typography>
											<Typography variant='text60' color='colors.GRAY70'>
												{t(company)}
											</Typography>
										</Stack>
									</WrapUser>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Wrapper>
		</Container>
	)
}
