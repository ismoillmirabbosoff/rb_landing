import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { Wrapper, WrapImage, Container } from './style'
import ImageMainBack from '@/assets/images/main-back.webp'
import ImageRobosellDark from '@/assets/images/robosell-dark.webp'

export const Main = () => {
	const { t } = useTranslation('common')
	return (
		<Container>
			<Wrapper>
				<Stack
					gap='18px'
					flexGrow={1}
					alignItems='center'
					position='relative'
					justifyContent='center'
				>
					<Typography variant='title50' component='h1' maxWidth='921px'>
						{t('automate_your_business_in_15_minutes')}
					</Typography>
					<Typography variant='text' maxWidth='707px'>
						{t(
							'if_you_receive_an_order_by_phone_you_can_also_manage_those_orders_by_entering_them_into_the_system',
						)}
					</Typography>
					<WrapImage>
						<Image fill alt='main-back' src={ImageMainBack.src} />
					</WrapImage>
				</Stack>
				<Stack flexGrow={1} sx={{ color: 'white' }} justifyContent='flex-end'>
					<Image fill alt='robosell-dark' priority src={ImageRobosellDark.src} />
				</Stack>
			</Wrapper>
		</Container>
	)
}
