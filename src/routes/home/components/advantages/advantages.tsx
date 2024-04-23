import { useRef } from 'react'
import Stack from '@mui/material/Stack'
import { Waypoint } from 'react-waypoint'
import { useCountUp } from 'react-countup'
import Typography from '@mui/material/Typography'
import { Card, Wrapper, Container } from './style'
import { IconPieChart } from '@/assets/icons/pie-chart'

export const Advantages = () => {
	const countUpRef = useRef(null)
	const { start, reset } = useCountUp({
		start: 0,
		end: 709,
		ref: countUpRef,
	})

	return (
		<Container>
			<Wrapper>
				<Typography mb='17px' variant='title' component='h2'>
					Robosell Afzalliklari
				</Typography>
				<Stack gap='20px' width='100%' direction='row'>
					<Stack gap='20px' width='60%'>
						<Stack gap='20px' display='grid' gridTemplateColumns='0.4fr 0.6fr'>
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
											<Typography variant='title140' ref={countUpRef} minWidth='60px' />
										</Waypoint>
										<Typography variant='text40'>Users</Typography>
									</Stack>
									<Stack justifyContent='center'>
										<IconPieChart />
									</Stack>
								</Stack>
							</Card>
							<Card>
								<Typography mb='6px' variant='title60' component='h5'>
									Savdo Statistikalari
								</Typography>
								<Typography variant='text120' component='h6'>
									Lorem ipsum dolor sit amet consectetur. Quis fermentum a lectus.
								</Typography>
							</Card>
						</Stack>
						<Stack gap='20px' display='grid' gridTemplateColumns='0.6fr 0.4fr'>
							<Card>
								<Typography mb='6px' variant='title60' component='h5'>
									Top 10 products
								</Typography>
								<Typography variant='text120' component='h6'>
									Lorem ipsum dolor sit amet consectetur. Quis fermentum a lectus.
								</Typography>
							</Card>
							<Card>
								<Typography mb='6px' variant='title60' component='h5'>
									Earning Statistics
								</Typography>
								<Typography variant='text120' component='h6'>
									Lorem ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus.
								</Typography>
							</Card>
						</Stack>
					</Stack>
					<Card sx={{ width: '40%' }}>
						<Typography mb='6px' variant='title60' component='h5'>
							Order Statistics
						</Typography>
						<Typography variant='text120' component='h6'>
							Lorem ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus. Lorem ipsum
							dolor sit amet consectetur. Quis fermentum accumsan a lectus.
						</Typography>
					</Card>
				</Stack>
			</Wrapper>
		</Container>
	)
}
