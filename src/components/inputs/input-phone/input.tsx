import Stack from '@mui/material/Stack'
import { InputMask } from '../input-mask'
import Typography from '@mui/material/Typography'
import { type FieldValues } from 'react-hook-form'
import { IconFlagUz } from '@/assets/icons/flag-uz'
import { type InputPhoneProps } from '@/types/components'
import InputAdornment from '@mui/material/InputAdornment'

export const InputPhone = <T extends FieldValues>(props: InputPhoneProps<T>) => {
	return (
		<InputMask
			{...props}
			mask={[/\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<Stack gap='10px' direction='row' alignItems='center'>
							<Stack
								alignItems='center'
								justifyContent='center'
								sx={{
									svg: {
										width: '26px',
										height: '26px',
									},
								}}
							>
								<IconFlagUz />
							</Stack>
							<Typography variant='text50' lineHeight='27px' color='colors.BLACK'>
								+998
							</Typography>
						</Stack>
					</InputAdornment>
				),
				...props.InputProps,
			}}
		/>
	)
}
