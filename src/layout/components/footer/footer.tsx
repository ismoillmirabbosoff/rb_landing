import Link from 'next/link'
import Stack from '@mui/material/Stack'
import { Wrapper, Container } from './style'
import { SOCIALS } from '@/constants/social'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

export const Footer = () => {
	const date = new Date()
	const { t } = useTranslation('common')

	return (
		<Container>
			<Wrapper>
				<Typography variant='text30' component='h2'>
					{t('copyright_year_robosell_all_rights_reserved', { year: date.getFullYear() })}
				</Typography>
				<Stack
					gap='10px'
					component='ul'
					direction='row'
					alignItems='center'
					justifyContent='flex-end'
				>
					{SOCIALS.map(({ Icon, href }, i: number) => (
						<Stack component='li' key={i} justifyContent='center'>
							<IconButton
								href={href}
								target='_blank'
								component={Link}
								sx={{ p: '6px', minWidth: '31px' }}
							>
								<Icon />
							</IconButton>
						</Stack>
					))}
				</Stack>
			</Wrapper>
		</Container>
	)
}
