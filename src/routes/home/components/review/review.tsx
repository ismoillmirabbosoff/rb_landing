import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import { IconQuote } from '@/assets/icons/quote'
import Typography from '@mui/material/Typography'
import { useKeenSlider } from 'keen-slider/react'
import { Card, Wrapper, Container, Slider } from './style'

const animation = { duration: 40000, easing: (t: number) => t }

export const Review = () => {
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
					What are they saying about us?
				</Typography>
				<Slider>
					<div ref={sliderRef} className='keen-slider'>
						{Array.from({ length: 6 }, (_, i: number) => (
							<Card className='keen-slider__slide' key={i}>
								<Stack mb='10px'>
									<IconQuote />
								</Stack>
								<Typography maxWidth='440px'>
									Exceptional service! I couldn't be happier with the results. The team went above
									and beyond to meet my needs and deliver outstanding outcomes.
								</Typography>
								<Stack gap='12px' direction='row'>
									<Avatar />
									<Stack>
										<Typography>Sarvarbek Erkinjonov</Typography>
										<Typography>Marketolog of XonXonim</Typography>
									</Stack>
								</Stack>
							</Card>
						))}
					</div>
				</Slider>
			</Wrapper>
		</Container>
	)
}
