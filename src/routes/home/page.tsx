import { Main } from './components/main'
import { Plans } from './components/plans'
import { Brands } from './components/brands'
import { Review } from './components/review'
import { Chat } from './components/chat/chat'
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
			<Chat />
			<Review />
			<Brands />
			<Plans />
		</>
	)
}
