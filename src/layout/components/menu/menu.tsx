import { Header } from './style'
import { Phone } from '../phone'
import { Navbar } from '../navbar'
import { Social } from '../social'
import Stack from '@mui/material/Stack'
import { Logo } from '@/components/logo'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'
import { IconMenu } from '@/assets/icons/menu'
import { useBoolean } from '@/hooks/useBoolean'
import IconButton from '@mui/material/IconButton'
import { IconRemove } from '@/assets/icons/remove'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { SelectI18nLanguage } from '@/components/select-i18n-language'

export const Menu = () => {
	const { t } = useTranslation('common')
	const { value, setTrue, setFalse } = useBoolean()

	return (
		<>
			<IconButton onClick={setTrue}>
				<IconMenu />
			</IconButton>
			<SwipeableDrawer open={value} anchor='right' onOpen={setTrue} onClose={setFalse}>
				<Stack height='100%' width='100vw' p='18px'>
					<Header>
						<Logo variant='logo' />
						<IconButton
							onClick={setFalse}
							sx={theme => ({
								svg: {
									path: {
										stroke: theme.palette.colors.GRAY130,
									},
								},
							})}
						>
							<IconRemove />
						</IconButton>
					</Header>
					<Stack height='100%' flexGrow={1}>
						<div>
							<SelectI18nLanguage />
						</div>
						<Stack m='23px 0 45px' onClick={setFalse}>
							<Navbar variant='menu' />
						</Stack>
						<Phone />
						<Social />
					</Stack>
					<Button variant='contained' sx={{ minWidth: '105px' }}>
						{t('enter')}
					</Button>
				</Stack>
			</SwipeableDrawer>
		</>
	)
}
