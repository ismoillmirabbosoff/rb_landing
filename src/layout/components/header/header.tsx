import { Hoc } from './hoc'
import Stack from '@mui/material/Stack'
import { Logo } from '@/components/logo'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'
import { Container, WrapDesktop } from './style'
import { SelectI18nLanguage } from '@/components/select-i18n-language'

export const Header = () => {
	const { t } = useTranslation('common')

	return (
		<Container>
			<Hoc>
				<WrapDesktop>
					<Logo variant='logo' />
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
