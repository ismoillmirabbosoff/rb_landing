import { useRef } from 'react'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { Waypoint } from 'react-waypoint'
import { useCountUp } from 'react-countup'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { IconPieChart } from '@/assets/icons/pie-chart'
import ImageAdvantagesTopProducts from '@/assets/images/advantages-top-products.webp'
import { IconAdvantagesSalesStatistics } from '@/assets/icons/advantages-sales-statistics'
import { IconAdvantagesOrderStatistics } from '@/assets/icons/advantages-order-statistics'
import ImageAdvantagesEarningStatistics from '@/assets/images/advantages-earning-statistics.webp'
import {
	Card,
	Wrap,
	WrapUp,
	Wrapper,
	WrapDown,
	WrapLeft,
	Container,
	WrapIconPieChart,
} from './style'

export const Advantages = () => {
	const countUpRef = useRef(null)
	const { t } = useTranslation('common')
	const { start, reset } = useCountUp({
		start: 0,
		end: 709,
		ref: countUpRef,
	})

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
								<Typography mb='6px' variant='title60' component='h5'>
									Источник трафика
								</Typography>
								<Typography variant='text120' component='h6'>
									Lorem ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus.
								</Typography>
								<Stack
									mt='25px'
									direction='row'
									alignItems='flex-start'
									justifyContent='space-between'
								>
									<Stack direction='row' alignItems='flex-end'>
										<Waypoint onEnter={start} onLeave={reset}>
											<Typography mt='7px' variant='title140' ref={countUpRef} minWidth='60px' />
										</Waypoint>
										<Typography variant='text40'>Users</Typography>
									</Stack>
									<WrapIconPieChart>
										<IconPieChart />
									</WrapIconPieChart>
								</Stack>
							</Card>
							<Card>
								<Typography mb='6px' variant='title60' component='h5'>
									Savdo Statistikalari
								</Typography>
								<Typography variant='text120' component='h6'>
									Lorem ipsum dolor sit amet consectetur. Quis fermentum a lectus.
								</Typography>
								<Stack
									alignItems='center'
									sx={{
										svg: {
											width: '100%',
											height: '100%',
										},
									}}
								>
									<IconAdvantagesSalesStatistics />
								</Stack>
							</Card>
						</WrapUp>
						<WrapDown>
							<Card>
								<Typography mb='6px' variant='title60' component='h5'>
									Top 10 products
								</Typography>
								<Typography variant='text120' component='h6'>
									Lorem ipsum dolor sit amet consectetur. Quis fermentum a lectus.
								</Typography>
								<Stack mb='-20px'>
									<Image fill src={ImageAdvantagesTopProducts.src} alt='res' />
								</Stack>
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
						<Stack flexGrow={1}>
							<Typography mb='6px' variant='title60' component='h5'>
								Order Statistics
							</Typography>
							<Typography variant='text120' component='h6'>
								Lorem ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus. Lorem
								ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus.
							</Typography>
						</Stack>
						<Stack
							alignItems='center'
							justifyContent='flex-end'
							sx={{
								svg: {
									width: '100%',
									height: '100%',
								},
							}}
						>
							<IconAdvantagesOrderStatistics />
						</Stack>
					</Card>
				</Wrap>
			</Wrapper>
		</Container>
	)
}
