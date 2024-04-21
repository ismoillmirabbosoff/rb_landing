import { IconMenu } from '@/assets/icons/menu'
import { useBoolean } from '@/hooks/useBoolean'
import IconButton from '@mui/material/IconButton'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

export const Menu = () => {
	const { value, setTrue, setFalse } = useBoolean()

	return (
		<>
			<IconButton onClick={setTrue}>
				<IconMenu />
			</IconButton>
			<SwipeableDrawer
				open={value}
				anchor='right'
				onOpen={setTrue}
				onClose={setFalse}
				PaperProps={{
					sx: {
						width: '100vw',
					},
				}}
			>
				dkdskdskds
			</SwipeableDrawer>
		</>
	)
}
