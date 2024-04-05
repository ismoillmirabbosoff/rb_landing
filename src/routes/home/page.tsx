import { Main } from './components/main'
import { Plans } from './components/plans'
import { Brands } from './components/brands'
import { Webapp } from './components/webapp'

export const Home = () => {
	return (
		<>
			<Main />
			<Brands />
			<Webapp />
			<Plans />
		</>
	)
}
