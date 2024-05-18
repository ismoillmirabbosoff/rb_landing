import Link from 'next/link'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import { ROUTER } from '@/constants/router'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { IconTryBack } from '@/assets/icons/try-back'
import { Wrapper, Container, WrapImage } from './style'
import ImageProductTry from '@/assets/images/product-try.webp'

const adminBaseURL = process.env.NEXT_PUBLIC_ADMIN_BASE_URL

export const Try = () => {
	const { t } = useTranslation('common')
	const { pathname } = useRouter()
	if (pathname === ROUTER.HOME) {
		return null
	}

	return (
		<Container>
			<Wrapper>
				<Stack position='absolute'>
					<IconTryBack />
				</Stack>
				<Stack gap='16px' p='57px 60px' width='50%'>
					<Typography variant='title130' component='h3'>
						Robosell orqali
						<Typography px='5px' component='span' color='colors.PURPLE' variant='inherit'>
							15 daqiqa
						</Typography>
						ichida o’z internet do’koningizni yarating
					</Typography>
					<Typography variant='text60' component='h4' color='colors.GRAY10'>
						Lorem ipsum dolor sit amet consectetur. Quis fermentum accumsan a lectus. Lorem ipsum
						dolor sit amet consectetur. Quis fermentum accumsan a lectus.
					</Typography>
					<div>
						<Button target='_blank' component={Link} href={adminBaseURL} sx={{ minWidth: '183px' }}>
							{t('try_it_out')}
						</Button>
					</div>
				</Stack>
				<WrapImage>
					<Image fill alt='main-back' src={ImageProductTry.src} />
				</WrapImage>
			</Wrapper>
		</Container>
	)
}
