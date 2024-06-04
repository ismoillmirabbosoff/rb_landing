import { BRANDS } from './constants'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useKeenSlider, type KeenSliderOptions } from 'keen-slider/react'

const animation = { duration: 10000, easing: (t: number) => t }

export const useBrands = () => {
	const halfwayThrough = Math.floor(BRANDS.length / 2)
	const arrayFirstHalf = BRANDS.slice(0, halfwayThrough)
	const arraySecondHalf = BRANDS.slice(halfwayThrough, BRANDS.length)
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))
	const options: KeenSliderOptions = {
		loop: matches,
		renderMode: 'performance',
		drag: false,
		created(s) {
			s.moveToIdx(1, true, animation)
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 1, true, animation)
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 1, true, animation)
		},
		breakpoints: {
			[`(min-width: ${theme.breakpoints.values.md}px)`]: {
				slides: {
					spacing: 12,
					perView: 3.5,
				},
			},
			[`(max-width: ${theme.breakpoints.values.md}px)`]: {
				slides: {
					spacing: 12,
					perView: 2.5,
				},
			},
			[`(min-width: ${theme.breakpoints.values.lg}px)`]: {
				slides: {
					spacing: 20,
					perView: 4.5,
				},
			},
		},
	}

	const up = useKeenSlider(options)
	const down = useKeenSlider({
		rtl: true,
		...options,
	})

	return { up, down, arrayFirstHalf, arraySecondHalf }
}
