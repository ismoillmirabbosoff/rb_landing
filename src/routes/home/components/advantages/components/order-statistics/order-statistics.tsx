import { useRef } from 'react'
import { WrapOrders } from './style'
import { Platform } from '../platform'
import Stack from '@mui/material/Stack'
import { Waypoint } from 'react-waypoint'
import { useCountUp } from 'react-countup'
import Divider from '@mui/material/Divider'
import { useTranslation } from 'next-i18next'
import { PLATFORMS } from '@/constants/platform'
import { IconDaily } from '@/assets/icons/daily'
import Typography from '@mui/material/Typography'

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
			<Stack mb='20px'>
				<Typography mb='6px' variant='title60' component='h5'>
					{t('platform_report')}
				</Typography>
				<Typography variant='text120' component='h6'>
					{t('each_platform_will_bring_you_customers_on_its_own')}
				</Typography>
				<Typography variant='text120' component='h6'>
					{t('you_will_also_find_out_which_platform_receives_the_most_orders')}
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
					{PLATFORMS.map(platform => (
						<Stack key={platform.platform} gap='13px' direction='row' component='li'>
							<Platform {...platform} />
						</Stack>
					))}
				</Stack>
			</WrapOrders>
		</>
	)
}
