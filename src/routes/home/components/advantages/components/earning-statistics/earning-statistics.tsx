import Image from 'next/image'
import { motion } from 'framer-motion'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import { useInView } from 'react-intersection-observer'
import ImageAdvantagesEarningStatistics from '@/assets/images/advantages-earning-statistics.webp'

export const EarningStatistics = () => {
	const view = useInView()
	const { t } = useTranslation('common')

	return (
		<>
			<Stack flexGrow={1}>
				<Typography ref={view.ref} mb='6px' variant='title60' component='h5'>
					{t('sales_dynamics')}
				</Typography>
				<Typography variant='text120' component='h6'>
					{t('dont_forget_monitor_and_manage_the_revenue_of_your_business')}
				</Typography>
			</Stack>
			<Stack mb='-20px'>
				<motion.div
					style={{
						opacity: view.inView ? 1 : 0,
						transform: view.inView ? 'none' : 'translateY(200px)',
						transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
					}}
				>
					<Image fill src={ImageAdvantagesEarningStatistics.src} alt='res' />
				</motion.div>
			</Stack>
		</>
	)
}
