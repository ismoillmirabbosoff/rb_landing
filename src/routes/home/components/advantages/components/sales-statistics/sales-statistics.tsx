import Stack from '@mui/material/Stack'
import { WrapIconAdvantage } from './style'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import { IconAdvantagesSalesStatisticsOrders } from '@/assets/icons/advantages-sales-statistics-orders'
import { IconAdvantagesSalesStatisticsEarning } from '@/assets/icons/advantages-sales-statistics-earning'
import { IconAdvantagesSalesStatisticsTotalclients } from '@/assets/icons/advantages-sales-statistics-total-clients'

export const SalesStatistics = () => {
	const { t } = useTranslation('common')

	return (
		<>
			<Typography mb='6px' variant='title60' component='h5'>
				{t('sales_statistics')}
			</Typography>
			<Typography variant='text120' component='h6'>
				{t('stay_up_to_date_and_achieve_new_sales')}
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
		</>
	)
}
