import Link from 'next/link'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { Logo } from '@/components/logo'
import Divider from '@mui/material/Divider'
import { NAVBAR } from '@/constants/navbar'
import { SOCIALS } from '@/constants/social'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { IconCalling } from '@/assets/icons/calling'
import { Wrapper, Container, WrapImage } from './style'
import ImageBgFooter from '@/assets/images/bg-footer.webp'

export const Footer = () => {
	const date = new Date()
	const { t } = useTranslation('common')

	return (
		<Container>
			<WrapImage>
				<Image fill alt='bg-footer' src={ImageBgFooter.src} />
			</WrapImage>
			<Wrapper>
				<Stack
					p='50px 0 65px'
					gap='20px'
					direction={{ xs: 'column', md: 'row' }}
					justifyContent='space-between'
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
						<Stack
							gap='14px'
							component='a'
							direction='row'
							alignItems='center'
							href='tel:+998711234567'
						>
							<Stack justifyContent='center'>
								<IconCalling />
							</Stack>
							<Typography variant='text70' component='h4'>
								+998(71) 123 45 67
							</Typography>
						</Stack>
						<Stack pt='21px' gap='12px' component='ul' direction='row'>
							{SOCIALS.map(({ Icon, href }, i: number) => (
								<Stack component='li' key={i} justifyContent='center'>
									<IconButton
										href={href}
										target='_blank'
										component={Link}
										sx={{
											p: '6px',
											minWidth: '31px',
											svg: {
												width: '24px',
												height: '24px',
											},
										}}
									>
										<Icon />
									</IconButton>
								</Stack>
							))}
						</Stack>
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
					<Typography variant='text30' component='h2'>
						{t('copyright_year_robosell_all_rights_reserved', { year: date.getFullYear() })}
					</Typography>
				</Stack>
			</Wrapper>
		</Container>
	)
}
