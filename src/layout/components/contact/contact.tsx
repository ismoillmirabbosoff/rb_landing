import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useContact } from './useContact'
import Typography from '@mui/material/Typography'
import { Input } from '@/components/inputs/input'
import { InputPhone } from '@/components/inputs/input-phone'
import { Wrapper, Container, WrapLinearGradientContact } from './style'
import { IconLinearGradientContact } from '@/assets/icons/linear-gradient-contact'

export const Contact = () => {
	const { form, onSubmit } = useContact()

	return (
		<Container id='contact'>
			<WrapLinearGradientContact>
				<IconLinearGradientContact />
			</WrapLinearGradientContact>
			<Wrapper onSubmit={form.handleSubmit(onSubmit)}>
				<Stack p={{ xs: '0 9px', md: 0 }}>
					<Typography variant='title90' component='h2'>
						Still have questions?
					</Typography>
					<Typography align='center' variant='text80' component='h3'>
						Can’t find the answer you’re looking for? Please chat to our friendly team.
					</Typography>
				</Stack>
				<Stack
					mt='27px'
					gap={{
						xs: '12px',
						md: '28px',
					}}
					width='100%'
					display='grid'
					gridTemplateColumns={{
						xs: '1fr',
						md: '1fr 1fr 1fr',
					}}
				>
					<Input
						fullWidth
						name='name'
						label='Name'
						control={form.control}
						placeholder='Enter name'
					/>
					<Input
						fullWidth
						name='company'
						label='Company'
						control={form.control}
						placeholder='Enter company'
					/>
					<InputPhone
						fullWidth
						name='phone'
						label='Phone number'
						control={form.control}
						placeholder='Enter phone number'
						onPaste={async () => {
							await navigator.clipboard.readText().then((number: string) => {
								const phone = number.replace(/\s/g, '').replace(/^\+998/, '')
								form.setValue('phone', phone)
							})
						}}
					/>
				</Stack>
				<Stack mt='23px' width='100%' alignItems='flex-end'>
					<Button type='submit' sx={{ minWidth: { xs: '100%', md: '183px' }, borderRadius: '9px' }}>
						Send
					</Button>
				</Stack>
			</Wrapper>
		</Container>
	)
}
