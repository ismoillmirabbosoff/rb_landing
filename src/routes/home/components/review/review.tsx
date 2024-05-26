import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import { IconQuote } from '@/assets/icons/quote'
import Typography from '@mui/material/Typography'
import { useKeenSlider } from 'keen-slider/react'
import { Card, Slider, Wrapper, WrapUser, Avatar, Container } from './style'

const animation = { duration: 40000, easing: (t: number) => t }

export const Review = () => {
	const theme = useTheme()
	const { t } = useTranslation('common')
	const [sliderRef] = useKeenSlider({
		loop: true,
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
					perView: 1.2,
					spacing: 12,
				},
			},
			[`(min-width: ${theme.breakpoints.values.lg}px)`]: {
				slides: {
					origin: 'center',
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
			<Wrapper>
				<Typography
					variant='title'
					component='h2'
					maxWidth='652px'
					mb={{ xs: '20px', md: '56px' }}
					lineHeight={{ xs: '30px', md: '67px' }}
				>
					{t('feedback_from_our_partners')}
				</Typography>
				<Slider>
					<div ref={sliderRef} className='keen-slider'>
						{Array.from({ length: 6 }, (_, i: number) => (
							<Card className='keen-slider__slide' key={i}>
								<Stack>
									<Stack mb='10px'>
										<IconQuote />
									</Stack>
									<Typography maxWidth='440px' variant='text60'>
										Exceptional service! I couldnt be happier with the results. The team went above
										and beyond to meet my needs and deliver outstanding outcomes.Exceptional
										service! I couldnt be happier with the results. The team went
									</Typography>
								</Stack>
								<WrapUser>
									<Avatar />
									<Stack justifyContent='center'>
										<Typography variant='text60' fontWeight='400'>
											Sarvarbek Erkinjonov
										</Typography>
										<Typography variant='text60' color='colors.GRAY70'>
											Marketolog of XonXonim
										</Typography>
									</Stack>
								</WrapUser>
							</Card>
						))}
					</div>
				</Slider>
			</Wrapper>
		</Container>
	)
}
