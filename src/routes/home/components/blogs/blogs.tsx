import Link from 'next/link'
import Stack from '@mui/material/Stack'
import { BLOGS } from '@/constants/blog'
import Button from '@mui/material/Button'
import { ROUTER } from '@/constants/router'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useKeenSlider } from 'keen-slider/react'
import { CardBlog } from '@/components/card-blog'
import { Wrapper, Container, Slider } from './style'
import useMediaQuery from '@mui/material/useMediaQuery'
import { IconArrowRight } from '@/assets/icons/arrow-right'
import { ScrollDown } from '@/components/scroll-down'

const animation = { duration: 40000, easing: (t: number) => t }

export const Blogs = () => {
	const { t } = useTranslation('common')
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))
	const [sliderRef] = useKeenSlider({
		loop: matches,
		renderMode: 'performance',
		breakpoints: {
			[`(min-width: ${theme.breakpoints.values.md}px)`]: {
				slides: {
					perView: 2,
					spacing: 12,
				},
			},
			[`(max-width: ${theme.breakpoints.values.md}px)`]: {
				slides: {
					perView: 1.5,
					spacing: 12,
				},
			},
			[`(min-width: ${theme.breakpoints.values.lg}px)`]: {
				slides: {
					perView: 3,
					spacing: 20,
				},
			},
		},
		drag: false,
		created(s) {
			s.moveToIdx(5, true, animation)
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation)
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation)
		},
	})

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
				<Slider>
					<div ref={sliderRef} className='keen-slider'>
						{BLOGS.filter(b => b.isMain).map((b, i: number) => (
							<div className='keen-slider__slide' key={i}>
								<CardBlog {...b} />
							</div>
						))}
					</div>
				</Slider>
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
