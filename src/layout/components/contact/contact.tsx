import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useContact } from './useContact'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Input } from '@/components/inputs/input'
import LoadingButton from '@mui/lab/LoadingButton'
import { InputPhone } from '@/components/inputs/input-phone'
import { Wrapper, Container, WrapLinearGradientContact } from './style'
import { IconLinearGradientContact } from '@/assets/icons/linear-gradient-contact'

export const Contact = () => {
	const { form, value, modal, onSubmit } = useContact()

	return (
		<>
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
						<LoadingButton
							type='submit'
							loading={value}
							variant='contained'
							sx={{ minWidth: { xs: '100%', md: '183px' }, borderRadius: '9px' }}
						>
							Send
						</LoadingButton>
					</Stack>
				</Wrapper>
			</Container>
			<Dialog fullWidth scroll='body' open={modal.value} onClose={modal.setFalse}>
				<Stack alignItems='center' p='50px'>
					<Image fill src='/success.gif' alt='success.gif' />
					<Stack gap='20px' width='100%' alignItems='center'>
						<Typography>Title</Typography>
						<Typography>Text</Typography>
						<Button fullWidth sx={{ maxWidth: '212px' }}>
							Done
						</Button>
					</Stack>
				</Stack>
			</Dialog>
		</>
	)
}
