import Image from 'next/image'
import { motion } from 'framer-motion'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { useInView } from 'react-intersection-observer'
import ImageAdvantagesTopProducts from '@/assets/images/advantages-top-products.webp'

export const TopProducts = () => {
	const view = useInView()
	const { t } = useTranslation('common')

	return (
		<>
			<Typography ref={view.ref} mb='6px' variant='title60' component='h5'>
				{t('top_10_products')}
			</Typography>
			<Typography variant='text120' component='h6'>
				{t('view_top_selling_products')}
			</Typography>
			<Stack mb='-20px'>
				<motion.div
					style={{
						opacity: view.inView ? 1 : 0,
						transform: view.inView ? 'none' : 'translateY(200px)',
						transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
					}}
				>
					<Image fill src={ImageAdvantagesTopProducts.src} alt='res' />
				</motion.div>
			</Stack>
		</>
	)
}
