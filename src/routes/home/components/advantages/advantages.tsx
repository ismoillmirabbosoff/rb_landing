import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { TopProducts } from './components/top-products'
import { TrafficSource } from './components/traffic-source'
import { OrderStatistics } from './components/order-statistics'
import { SalesStatistics } from './components/sales-statistics'
import { EarningStatistics } from './components/earning-statistics'
import { Card, Wrap, WrapUp, Wrapper, WrapDown, WrapLeft, Container } from './style'

export const Advantages = () => {
	const { t } = useTranslation('common')

	return (
		<Container id='advantages'>
			<Wrapper>
				<Typography mb='17px' variant='title' component='h2'>
					{t('robosell_advantages')}
				</Typography>
				<Wrap>
					<WrapLeft>
						<WrapUp>
							<Card>
								<TrafficSource />
							</Card>
							<Card>
								<SalesStatistics />
							</Card>
						</WrapUp>
						<WrapDown>
							<Card>
								<TopProducts />
							</Card>
							<Card>
								<EarningStatistics />
							</Card>
						</WrapDown>
					</WrapLeft>
					<Card className='order'>
						<OrderStatistics />
					</Card>
				</Wrap>
			</Wrapper>
		</Container>
	)
}
