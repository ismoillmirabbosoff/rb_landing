import { useRef } from 'react'
import Stack from '@mui/material/Stack'
import { Waypoint } from 'react-waypoint'
import { useCountUp } from 'react-countup'
import { WrapIconPieChart } from './style'
import Typography from '@mui/material/Typography'
import { IconPieChart } from '@/assets/icons/pie-chart'

export const TrafficSource = () => {
	const countUpRef = useRef(null)
	const { start, reset } = useCountUp({
		start: 0,
		end: 709,
		ref: countUpRef,
	})

	return (
		<>
			<Typography mb='6px' variant='title60' component='h5'>
				Источник трафика
			</Typography>
			<Typography variant='text120' component='h6'>
				Lorem ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus.
			</Typography>
			<Stack
				gap='20px'
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
		</>
	)
}
