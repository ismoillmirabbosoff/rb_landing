import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import { useTranslation } from 'next-i18next'
import { IconQuote } from '@/assets/icons/quote'
import Typography from '@mui/material/Typography'
import { useKeenSlider } from 'keen-slider/react'
import { Card, Slider, Wrapper, WrapUser, Container } from './style'

const animation = { duration: 40000, easing: (t: number) => t }

export const Review = () => {
	const { t } = useTranslation('common')
	const [sliderRef] = useKeenSlider({
		loop: true,
		renderMode: 'performance',
		slides: {
			origin: 'center',
			perView: 3,
			spacing: 20,
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
				<Typography mb='56px' variant='title' component='h2' lineHeight='67px' maxWidth='652px'>
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
									<Avatar sx={{ width: 48, height: 48 }} />
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
