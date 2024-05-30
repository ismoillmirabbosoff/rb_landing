import { BRANDS } from './constants'
import { useTranslation } from 'next-i18next'
import { stringAvatar } from '@/utils/avatar'
import { useTheme } from '@mui/material/styles'
import { useKeenSlider } from 'keen-slider/react'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Card, Cards, Avatar, Wrapper, Container, Slider } from './style'

const animation = { duration: 40000, easing: (t: number) => t }

export const Brands = () => {
	const theme = useTheme()
	const { t } = useTranslation('common')
	const matches = useMediaQuery(theme.breakpoints.down('md'))
	const [sliderRef] = useKeenSlider({
		loop: matches,
		renderMode: 'performance',
		slides: { origin: 'center', perView: 3, spacing: 10 },
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

	const list = () => {
		return BRANDS.map((b, i) => (
			<Card
				key={i}
				className='keen-slider__slide'
				whileHover={{ scale: matches ? undefined : 0.9 }}
			>
				<Avatar alt={b.title} src={b?.logo?.src ?? ''} {...stringAvatar(b.title ?? '')} />
				<Typography variant='title80' component='h4'>
					{b.title}
				</Typography>
			</Card>
		))
	}

	return (
		<Container>
			<Wrapper>
				<Typography
					component='h2'
					variant='title'
					mb={{ xs: '18px', md: '39px' }}
					lineHeight={{ xs: '30px', md: '67px' }}
				>
					{t('companies_using_the_robosell_platform')}
				</Typography>
				{matches ? (
					<Slider>
						<div ref={sliderRef} className='keen-slider'>
							{list()}
						</div>
					</Slider>
				) : (
					<Cards>{list()}</Cards>
				)}
			</Wrapper>
		</Container>
	)
}
