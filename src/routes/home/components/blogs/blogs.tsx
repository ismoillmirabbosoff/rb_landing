import Link from 'next/link'
import Stack from '@mui/material/Stack'
import { BLOGS } from '@/constants/blog'
import Button from '@mui/material/Button'
import { ROUTER } from '@/constants/router'
import { Wrapper, Container } from './style'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { CardBlog } from '@/components/card-blog'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ScrollDown } from '@/components/scroll-down'
import { IconArrowRight } from '@/assets/icons/arrow-right'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export const Blogs = () => {
	const { t } = useTranslation('common')
	const theme = useTheme()

	return (
		<Container>
			<ScrollDown id='blogs' />
			<Wrapper>
				<Typography variant='title30' component='h2'>
					{t('read_our_blog')}
				</Typography>
				<Typography
					variant='text'
					component='h3'
					color='colors.GRAY10'
					mb={{ xs: '21px', md: '54px' }}
				>
					{t('learn_new_technology')}
				</Typography>
				<div style={{ width: '100%' }}>
					<Swiper
						loop={true}
						speed={7000}
						spaceBetween={30}
						slidesPerView={3}
						modules={[Autoplay, Navigation, Pagination]}
						autoplay={{
							delay: 0,
							stopOnLastSlide: false,
							pauseOnMouseEnter: true,
							waitForTransition: true,
							disableOnInteraction: false,
						}}
						breakpoints={{
							[theme.breakpoints.values.xs]: {
								spaceBetween: 20,
								slidesPerView: 1.2,
							},
							[theme.breakpoints.values.sm]: {
								spaceBetween: 30,
								slidesPerView: 3,
							},
						}}
					>
						{BLOGS.filter(b => b.isMain).map((b, i: number) => (
							<SwiperSlide key={i}>
								<CardBlog {...b} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<Stack mt={{ xs: '20px', md: '28px' }}>
					<Button
						component={Link}
						variant='outlined'
						href={ROUTER.BLOGS}
						sx={{ minWidth: '183px' }}
						endIcon={<IconArrowRight />}
					>
						{t('view_all')}
					</Button>
				</Stack>
			</Wrapper>
		</Container>
	)
}
