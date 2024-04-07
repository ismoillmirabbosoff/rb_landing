import { Hoc } from './hoc'
import Link from 'next/link'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'
import { Iconlogo } from '@/assets/icons/logo'
import { Container, WrapDesktop } from './style'
import { SelectI18nLanguage } from '@/components/select-i18n-language'

export const Header = () => {
	const { t } = useTranslation('common')

	return (
		<Container>
			<Hoc>
				<WrapDesktop>
					<Link href='/'>
						<Iconlogo />
					</Link>
					<Stack gap='10px' direction='row'>
						<SelectI18nLanguage />
						<Button variant='contained' sx={{ minWidth: '105px' }}>
							{t('enter')}
						</Button>
					</Stack>
				</WrapDesktop>
			</Hoc>
		</Container>
	)
}
