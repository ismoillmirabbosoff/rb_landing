import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import { IconQuote } from '@/assets/icons/quote'
import Typography from '@mui/material/Typography'
import { useKeenSlider } from 'keen-slider/react'
import { Card, Slider, Wrapper, WrapUser, Avatar, Container } from './style'

export const Review = () => {
	const theme = useTheme()
	const { t } = useTranslation('common')
	const [sliderRef] = useKeenSlider(
		{
			loop: true,
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
						perView: 3.5,
						spacing: 20,
					},
				},
			},
		},
		[
			slider => {
				let timeout: ReturnType<typeof setTimeout>
				let mouseOver = false
				function clearNextTimeout() {
					clearTimeout(timeout)
				}
				function nextTimeout() {
					clearTimeout(timeout)
					if (mouseOver) return
					timeout = setTimeout(() => {
						slider.next()
					}, 2000)
				}
				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true
						clearNextTimeout()
					})
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false
						nextTimeout()
					})
					nextTimeout()
				})
				slider.on('dragStarted', clearNextTimeout)
				slider.on('animationEnded', nextTimeout)
				slider.on('updated', nextTimeout)
			},
		],
	)

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
