import dynamic from 'next/dynamic'
import { Faq } from './components/faq'
import { Main } from './components/main'
import { Plans } from './components/plans'
import { Blogs } from './components/blogs'
import { Brands } from './components/brands'
import { Review } from './components/review'
import { useTranslation } from 'next-i18next'
import { WebappShop } from './components/webapp-shop'
import { Instructions } from './components/instructions'
import { FlexibleDesign } from './components/flexible-design'
import { WebappRestaurant } from './components/webapp-restaurant'

const mediaBaseURL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL

const Advantages = dynamic(async () => (await import('./components/advantages')).Advantages, {
	ssr: false,
})

export const Home = () => {
	const { t } = useTranslation('common')

	return (
		<>
			<Main />
			<Advantages />
			<Instructions />
			<FlexibleDesign />
			<WebappRestaurant />
			<WebappShop />
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
