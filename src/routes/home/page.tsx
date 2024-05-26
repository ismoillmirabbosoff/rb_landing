import dynamic from 'next/dynamic'
import { Faq } from './components/faq'
import { AnimationBack } from './style'
import Stack from '@mui/material/Stack'
import { Main } from './components/main'
import { Plans } from './components/plans'
import { Blogs } from './components/blogs'
import { Brands } from './components/brands'
import { Review } from './components/review'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import { WebappShop } from './components/webapp-shop'
import { useInView } from 'react-intersection-observer'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Instructions } from './components/instructions'
import { FlexibleDesign } from './components/flexible-design'
import { WebappRestaurant } from './components/webapp-restaurant'

const mediaBaseURL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL

const Advantages = dynamic(async () => (await import('./components/advantages')).Advantages, {
	ssr: false,
})

export const Home = () => {
	const { t } = useTranslation('common')
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))
	const threshold = matches ? 0.1 : 0.3
	const advantagesAndInstructions = useInView({ threshold })
	const flexibleDesign = useInView({ threshold })
	const webappRestaurantAndWebappShop = useInView({ threshold })

	return (
		<>
			<Main />
			<Stack ref={advantagesAndInstructions.ref} position='relative'>
				<AnimationBack
					sx={theme => ({
						background: advantagesAndInstructions.inView
							? theme.palette.colors.WHITE
							: theme.palette.colors.BLACK10,
					})}
				/>
				<Advantages />
				<Instructions />
			</Stack>
			<Stack ref={flexibleDesign.ref} position='relative'>
				<AnimationBack
					sx={theme => ({
						background: flexibleDesign.inView
							? theme.palette.colors.BLACK10
							: theme.palette.colors.WHITE,
					})}
				/>
				<FlexibleDesign />
			</Stack>
			<Stack ref={webappRestaurantAndWebappShop.ref} position='relative'>
				<AnimationBack
					sx={theme => ({
						background: webappRestaurantAndWebappShop.inView
							? theme.palette.colors.WHITE
							: theme.palette.colors.BLACK10,
					})}
				/>
				<WebappRestaurant />
				<WebappShop />
			</Stack>
			<video id='videoID' playsInline autoPlay loop muted>
				<source src={`${mediaBaseURL}/${t('chat_video')}`} type='video/mp4' />
			</video>
			<Review />
			<Brands />
			<Blogs />
			<Plans />
			<Faq />
		</>
	)
}
