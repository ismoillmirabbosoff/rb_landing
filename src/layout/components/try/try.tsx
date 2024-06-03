import Link from 'next/link'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import { ROUTER } from '@/constants/router'
import Typography from '@mui/material/Typography'
import { Trans, useTranslation } from 'next-i18next'
import { IconTryBack } from '@/assets/icons/try-back'
import { Wrapper, Container, WrapImage, Content, WrapperImage } from './style'
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
				<Content>
					<Typography variant='title130' component='h3'>
						<Trans
							i18nKey='create_your_online_store_with_robosell_in_just_15_minutes'
							components={{
								linkTag: (
									<Typography px='5px' component='span' color='colors.PURPLE' variant='inherit' />
								),
							}}
						/>
					</Typography>
					<Typography variant='text60' component='h4' color='colors.GRAY10'>
						{t(
							'become_the_new_model_of_online_business_success_by_selling_products_or_services_anywhere_and_to_any_audience',
						)}
					</Typography>
					<Stack>
						<Button
							target='_blank'
							component={Link}
							href={adminBaseURL}
							sx={{ minWidth: { sx: '100%', md: '183px' } }}
						>
							{t('try_it')}
						</Button>
					</Stack>
				</Content>
				<WrapperImage>
					<WrapImage>
						<Image fill alt='main-back' src={ImageProductTry.src} />
					</WrapImage>
				</WrapperImage>
			</Wrapper>
		</Container>
	)
}
