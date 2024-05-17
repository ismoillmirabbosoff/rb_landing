import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { IconCalling } from '@/assets/icons/calling'

export const Phone = () => {
	return (
		<Stack gap='14px' component='a' direction='row' alignItems='center' href='tel:+998781138212'>
			<Stack justifyContent='center'>
				<IconCalling />
			</Stack>
			<Typography variant='text70' component='h4'>
				+998(78) 113 82 12
			</Typography>
		</Stack>
	)
}
