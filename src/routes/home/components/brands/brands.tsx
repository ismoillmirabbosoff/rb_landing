import { useTranslation } from 'next-i18next'
import { stringAvatar } from '@/utils/avatar'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BRANDS, type BrandProps } from './constants'
import { Card, Avatar, Wrapper, Container } from './style'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export const Brands = () => {
	const theme = useTheme()
	const { t } = useTranslation('common')
	const halfwayThrough = Math.floor(BRANDS.length / 2)
	const arrayFirstHalf = BRANDS.slice(0, halfwayThrough)
	const arraySecondHalf = BRANDS.slice(halfwayThrough, BRANDS.length)

	const list = (data: BrandProps[], isFirst: boolean, reverseDirection?: boolean) => {
		return (
			<Swiper
				loop={true}
				speed={4000}
				centeredSlides={true}
				modules={[Autoplay, Navigation, Pagination]}
				autoplay={{
					delay: 0,
					reverseDirection,
					stopOnLastSlide: false,
					pauseOnMouseEnter: false,
					waitForTransition: true,
					disableOnInteraction: false,
				}}
				breakpoints={{
					[theme.breakpoints.values.xs]: {
						spaceBetween: 20,
						slidesPerView: isFirst ? 2.2 : 2,
					},
					[theme.breakpoints.values.sm]: {
						spaceBetween: 20,
						slidesPerView: isFirst ? 3.5 : 4,
					},
				}}
			>
				{data.map((b, i) => (
					<SwiperSlide key={i}>
						<Card>
							<Avatar alt={b.title} src={b?.logo?.src ?? ''} {...stringAvatar(b.title ?? '')} />
							<Typography variant='title80' component='h4' whiteSpace='nowrap'>
								{b.title}
							</Typography>
						</Card>
					</SwiperSlide>
				))}
			</Swiper>
		)
	}

	return (
		<Container>
			<Wrapper>
				<Typography
					mb='20px'
					component='h2'
					variant='title'
					maxWidth='800px'
					lineHeight={{ xs: '30px', md: '67px' }}
				>
					{t('companies_using_the_robosell_platform')}
				</Typography>
				<div style={{ width: '100%' }}>{list(arrayFirstHalf, true)}</div>
				<div style={{ width: '100%' }}>{list(arraySecondHalf, false, true)}</div>
			</Wrapper>
		</Container>
	)
}
