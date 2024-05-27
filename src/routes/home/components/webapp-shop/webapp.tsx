import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { FEATURES } from './constants'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Wrapper, Container } from './style'
import { useTranslation } from 'next-i18next'
import { IconTick } from '@/assets/icons/tick'
import Typography from '@mui/material/Typography'
import { useInView } from 'react-intersection-observer'
import ImageIphoneShop from '@/assets/images/iphone-shop.webp'

const adminBaseURL = process.env.NEXT_PUBLIC_ADMIN_BASE_URL

export const WebappShop = () => {
	const view = useInView({ threshold: 0 })
	const { t } = useTranslation('common')

	return (
		<Container>
			<Wrapper>
				<Stack
					ref={view.ref}
					width='100%'
					alignItems='center'
					justifyContent='space-between'
					direction={{ xs: 'column-reverse', md: 'row' }}
				>
					<Stack
						pt='60px'
						width='100%'
						maxWidth='580px'
						component={motion.div}
						style={{
							opacity: view.inView ? '1' : '0',
							transform: view.inView ? 'none' : 'translateX(-100vw)',
							transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}
					>
						<Typography variant='title10' component='h2'>
							{t('robo_shop')}
						</Typography>
						<Typography component='h3' variant='text10'>
							{t('sell_products_on_your_own_website_and_through_the_telegram_messenger')}
						</Typography>
						<Stack gap='26px' m='28px 0 48px' component='ul'>
							{FEATURES.map((f, i: number) => (
								<Stack gap='15px' key={i} component='li' direction='row' alignItems='center'>
									<Stack>
										<IconTick />
									</Stack>
									<Stack>
										<Typography component='h4' variant='title60'>
											{t(f.title)}
										</Typography>
										<Typography component='h5' variant='text20'>
											{t(f.text)}
										</Typography>
									</Stack>
								</Stack>
							))}
						</Stack>
						<Box>
							<Button
								target='_blank'
								component={Link}
								href={adminBaseURL}
								sx={{ minWidth: '183px' }}
							>
								{t('try_it')}
							</Button>
						</Box>
					</Stack>
					<Stack width='100%' maxWidth={{ xs: '339px', md: '477px' }}>
						<Image fill alt='iphone-shop' src={ImageIphoneShop.src} />
					</Stack>
				</Stack>
			</Wrapper>
		</Container>
	)
}
