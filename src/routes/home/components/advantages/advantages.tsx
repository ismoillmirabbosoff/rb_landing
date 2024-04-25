import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { TrafficSource } from './components/traffic-source'
import { OrderStatistics } from './components/order-statistics'
import ImageAdvantagesEarningStatistics from '@/assets/images/advantages-earning-statistics.webp'
import { IconAdvantagesSalesStatisticsOrders } from '@/assets/icons/advantages-sales-statistics-orders'
import { IconAdvantagesSalesStatisticsEarning } from '@/assets/icons/advantages-sales-statistics-earning'
import {
	Card,
	Wrap,
	WrapUp,
	Wrapper,
	WrapDown,
	WrapLeft,
	Container,
	WrapIconAdvantage,
} from './style'
import { IconAdvantagesSalesStatisticsTotalclients } from '@/assets/icons/advantages-sales-statistics-total-clients'
import { TopProducts } from './components/top-products'

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
								<Typography mb='6px' variant='title60' component='h5'>
									Savdo Statistikalari
								</Typography>
								<Typography variant='text120' component='h6'>
									Lorem ipsum dolor sit amet consectetur. Quis fermentum a lectus.
								</Typography>
								<Stack gap='7px' mt='23px' width='100%' alignItems='center'>
									<Stack gap='30px' display='grid' direction='row' gridTemplateColumns='1fr 1fr'>
										<WrapIconAdvantage rotate={5}>
											<IconAdvantagesSalesStatisticsEarning />
										</WrapIconAdvantage>
										<WrapIconAdvantage
											rotate={-5}
											sx={{
												svg: {
													transform: 'rotate(4.592deg)',
												},
											}}
										>
											<IconAdvantagesSalesStatisticsTotalclients />
										</WrapIconAdvantage>
									</Stack>
									<Stack width='50%'>
										<WrapIconAdvantage
											rotate={5}
											sx={{
												svg: {
													transform: 'rotate(-2.818deg)',
												},
											}}
										>
											<IconAdvantagesSalesStatisticsOrders />
										</WrapIconAdvantage>
									</Stack>
								</Stack>
							</Card>
						</WrapUp>
						<WrapDown>
							<Card>
								<TopProducts />
							</Card>
							<Card>
								<Stack flexGrow={1}>
									<Typography mb='6px' variant='title60' component='h5'>
										Earning Statistics
									</Typography>
									<Typography variant='text120' component='h6'>
										Lorem ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus.
									</Typography>
								</Stack>
								<Stack mb='-20px'>
									<Image fill src={ImageAdvantagesEarningStatistics.src} alt='res' />
								</Stack>
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
