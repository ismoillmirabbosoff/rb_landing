import { Faq } from './components/faq'
import { Main } from './components/main'
import { Plans } from './components/plans'
import { Blogs } from './components/blogs'
import { Brands } from './components/brands'
import { Review } from './components/review'
import { Video } from './components/video/video'
import { Advantages } from './components/advantages'
import { WebappShop } from './components/webapp-shop'
import { Instructions } from './components/instructions'
import { FlexibleDesign } from './components/flexible-design'
import { WebappRestaurant } from './components/webapp-restaurant'

export const Home = () => {
	return (
		<>
			<Main />
			<Advantages />
			<Instructions />
			<FlexibleDesign />
			<WebappRestaurant />
			<WebappShop />
			<Video />
			<Brands />
			<Review />
			<Blogs />
			<Plans />
			<Faq />
		</>
	)
}
