import Image from 'next/image'
import { motion } from 'framer-motion'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useInView } from 'react-intersection-observer'
import ImageAdvantagesEarningStatistics from '@/assets/images/advantages-earning-statistics.webp'

export const EarningStatistics = () => {
	const view = useInView()

	return (
		<>
			<Stack flexGrow={1}>
				<Typography ref={view.ref} mb='6px' variant='title60' component='h5'>
					Earning Statistics
				</Typography>
				<Typography variant='text120' component='h6'>
					Lorem ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus.
				</Typography>
			</Stack>
			<Stack mb='-20px'>
				<motion.div
					style={{
						opacity: view.inView ? 1 : 0,
						transform: view.inView ? 'none' : 'translateY(200px)',
						transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
					}}
				>
					<Image fill src={ImageAdvantagesEarningStatistics.src} alt='res' />
				</motion.div>
			</Stack>
		</>
	)
}
