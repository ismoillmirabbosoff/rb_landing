import Link from 'next/link'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { Wrapper, Container, WrapImage } from './style'
import { SOCIALS } from '@/constants/social'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { FOOTER_LINKS } from '@/constants/footer'
import { IconCalling } from '@/assets/icons/calling'
import { IconLogoText } from '@/assets/icons/logo-text'
import ImageBgFooter from '@/assets/images/bg-footer.webp'
import Image from 'next/image'
import { Logo } from '@/components/logo'

export const Footer = () => {
	const date = new Date()
	const { t } = useTranslation('common')

	return (
		<Container>
			<WrapImage>
				<Image fill alt='bg-footer' src={ImageBgFooter.src} />
			</WrapImage>
			<Wrapper>
				<Stack p='50px 0 65px' gap='20px' direction='row' justifyContent='space-between'>
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
							We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt.
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
					<Stack gap='30px' display='grid' component='ul' gridTemplateColumns='1fr 1fr 1fr'>
						{FOOTER_LINKS.map((f, i: number) => (
							<Stack gap='20px' key={i} component='li'>
								<Typography variant='title80' component='h3'>
									{f.title}
								</Typography>
								<Stack gap='20px' component='ul'>
									{f.list.map((l, j: number) => (
										<Stack key={j} component='li'>
											<Typography
												href={l.href}
												variant='text40'
												component={Link}
												color='colors.GRAY120'
											>
												{l.title}
											</Typography>
										</Stack>
									))}
								</Stack>
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
