import dynamic from 'next/dynamic'
import { Faq } from './components/faq'
import { AnimationBack } from './style'
import Stack from '@mui/material/Stack'
import { Main } from './components/main'
import { Plans } from './components/plans'
import { Blogs } from './components/blogs'
import { Brands } from './components/brands'
import { Review } from './components/review'
import { Chat } from './components/chat/chat'
import { WebappShop } from './components/webapp-shop'
import { useInView } from 'react-intersection-observer'
import { Instructions } from './components/instructions'
import { FlexibleDesign } from './components/flexible-design'
import { WebappRestaurant } from './components/webapp-restaurant'

const Advantages = dynamic(async () => (await import('./components/advantages')).Advantages, {
	ssr: false,
})

export const Home = () => {
	const advantagesAndInstructions = useInView({ threshold: 0.3 })
	const flexibleDesign = useInView({ threshold: 0.3 })
	const webappRestaurantAndWebappShop = useInView({ threshold: 0.1 })
	const chat = useInView({ threshold: 0.3 })

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
			<Stack ref={chat.ref} position='relative'>
				<AnimationBack
					sx={theme => ({
						background: chat.inView ? theme.palette.colors.BLACK10 : theme.palette.colors.WHITE,
					})}
				/>
				<Chat />
			</Stack>
			<Review />
			<Brands />
			<Blogs />
			<Plans />
			<Faq />
		</>
	)
}
