import { Hoc } from './hoc'
import { Menu } from '../menu'
import { Navbar } from '../navbar'
import Stack from '@mui/material/Stack'
import { Logo } from '@/components/logo'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'
import { SelectI18nLanguage } from '@/components/select-i18n-language'
import { Wrap, WrapNav, WrapMenu, WrapRight, Container } from './style'

export const Header = () => {
	const { t } = useTranslation('common')

	return (
		<Container>
			<Hoc>
				<Wrap>
					<Stack flexGrow={1} direction='row' alignItems='center'>
						<Logo variant='logo' />
						<WrapNav>
							<Navbar variant='header' />
						</WrapNav>
					</Stack>
					<WrapRight>
						<SelectI18nLanguage />
						<Button variant='contained' sx={{ minWidth: '105px' }}>
							{t('enter')}
						</Button>
					</WrapRight>
					<WrapMenu>
						<Menu />
					</WrapMenu>
				</Wrap>
			</Hoc>
		</Container>
	)
}
