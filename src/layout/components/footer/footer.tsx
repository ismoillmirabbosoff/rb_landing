import Link from 'next/link'
import Image from 'next/image'
import { Phone } from '../phone'
import { Social } from '../social'
import Stack from '@mui/material/Stack'
import { Logo } from '@/components/logo'
import Divider from '@mui/material/Divider'
import { NAVBAR } from '@/constants/navbar'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { Wrapper, Container, WrapImage } from './style'
import ImageBgFooter from '@/assets/images/bg-footer.webp'
import ImageBgFooterMb from '@/assets/images/bg-footer-mb.webp'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Footer = () => {
	const date = new Date()
	const theme = useTheme()
	const { t } = useTranslation('common')
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Container>
			<WrapImage>
				<Image fill alt='bg-footer' src={matches ? ImageBgFooterMb.src : ImageBgFooter.src} />
			</WrapImage>
			<Wrapper>
				<Stack
					gap='20px'
					justifyContent='space-between'
					direction={{ xs: 'column', md: 'row' }}
					p={{
						md: '50px 0 65px',
						xs: '32px 0 36px',
					}}
				>
					<Stack>
						<Stack justifyContent='center'>
							<Logo variant='text' />
						</Stack>
						<Typography
							component='h3'
							p='13px 0 17px'
							variant='text60'
							maxWidth='457px'
							color='colors.GRAY120'
						>
							{t(
								'robosell_is_your_reliable_partner_in_creating_and_managing_your_online_business_our_goal_is_to_make_the_process_of_starting_an_internet_business_fast_simple_and_efficient_for_entrepreneurs',
							)}
						</Typography>
						<Phone />
						<Social />
					</Stack>
					<Stack gap='20px' component='ul'>
						{NAVBAR.map((f, i: number) => (
							<Stack key={i} component='li'>
								<Typography href={f.href} component={Link} variant='title110' fontWeight='700'>
									{t(f.title)}
								</Typography>
							</Stack>
						))}
					</Stack>
				</Stack>
				<Divider sx={theme => ({ borderColor: theme.palette.colors.WHITE20 })} />
				<Stack p='15px 15px 17px' alignItems='center'>
					<Typography variant='text30' align='center' component='h2'>
						{t('copyright_year_robosell_all_rights_reserved', { year: date.getFullYear() })}
					</Typography>
				</Stack>
			</Wrapper>
		</Container>
	)
}
