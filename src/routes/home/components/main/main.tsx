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
						{t('launch_your_online_business_in_just_15_minutes')}
					</Typography>
					<Typography variant='text' maxWidth='707px'>
						{t('start_selling_online_today_and_get_a_business_management_platform')}
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
