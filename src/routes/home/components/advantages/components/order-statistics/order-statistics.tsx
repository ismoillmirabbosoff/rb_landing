import { useRef } from 'react'
import { WrapOrders } from './style'
import Stack from '@mui/material/Stack'
import { Waypoint } from 'react-waypoint'
import { useCountUp } from 'react-countup'
import Divider from '@mui/material/Divider'
import { useTranslation } from 'react-i18next'
import { PLATFORMS } from '@/constants/platform'
import { IconDaily } from '@/assets/icons/daily'
import Typography from '@mui/material/Typography'
import { Linearprogress } from '../linear-progress/linear-progress'

export const OrderStatistics = () => {
	const countUpRef = useRef(null)
	const { t } = useTranslation('common')
	const { start, reset } = useCountUp({
		start: 0,
		end: 205,
		ref: countUpRef,
	})

	return (
		<>
			<Stack flexGrow={1}>
				<Typography mb='6px' variant='title60' component='h5'>
					Order Statistics
				</Typography>
				<Typography variant='text120' component='h6'>
					Lorem ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus. Lorem ipsum
					dolor sit amet consectetur. Quis fermentum accumsan a lectus.
				</Typography>
			</Stack>
			<WrapOrders>
				<Stack direction='row' alignItems='center' justifyContent='space-between'>
					<Typography variant='text50'>Order Statistics</Typography>
					<IconDaily />
				</Stack>
				<Stack p='13px 0 10px'>
					<Divider
						sx={theme => ({
							borderBottomWidth: '0.7px',
							borderColor: theme.palette.colors.GRAY180,
						})}
					/>
				</Stack>
				<Stack p='10px 0 20px' direction='row' alignItems='flex-end'>
					<Waypoint onEnter={start} onLeave={reset}>
						<Typography mt='7px' variant='title140' ref={countUpRef} minWidth='60px' />
					</Waypoint>
					<Typography variant='text40'>Orders</Typography>
				</Stack>
				<Stack gap='18px' component='ul' width='100%'>
					{PLATFORMS.map(({ Icon, value, label, color, bgcolor, percent, platform }) => (
						<Stack key={platform} gap='13px' direction='row' component='li'>
							<Stack justifyContent='center'>
								<Icon />
							</Stack>
							<Stack gap='6px' flexGrow={1}>
								<Stack direction='row' alignItems='center' justifyContent='space-between'>
									<Typography variant='text130' component='h5'>
										{t(label)}
									</Typography>
									<Typography variant='text130' component='h6' color='colors.GRAY50'>
										{value}
									</Typography>
								</Stack>
								<Stack>
									<Linearprogress color={color} value={percent} bgcolor={bgcolor} />
								</Stack>
							</Stack>
						</Stack>
					))}
				</Stack>
			</WrapOrders>
		</>
	)
}
