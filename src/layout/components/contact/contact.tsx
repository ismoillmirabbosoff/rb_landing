import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useContact } from './useContact'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { Input } from '@/components/inputs/input'
import LoadingButton from '@mui/lab/LoadingButton'
import { InputPhone } from '@/components/inputs/input-phone'
import { Wrapper, Container, WrapLinearGradientContact } from './style'
import { IconLinearGradientContact } from '@/assets/icons/linear-gradient-contact'
import { ScrollDown } from '@/components/scroll-down'

export const Contact = () => {
	const { t } = useTranslation('common')
	const { form, value, modal, onSubmit } = useContact()

	return (
		<>
			<Container>
				<ScrollDown id='contact' />
				<WrapLinearGradientContact>
					<IconLinearGradientContact />
				</WrapLinearGradientContact>
				<Wrapper onSubmit={form.handleSubmit(onSubmit)}>
					<Stack p={{ xs: '0 9px', md: 0 }}>
						<Typography variant='title90' component='h2'>
							{t('do_you_still_have_questions')}
						</Typography>
						<Typography align='center' variant='text80' component='h3'>
							{t(
								'can_t_find_the_answer_you_are_looking_for_contact_our_responsive_team_for_support',
							)}
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
							label='name'
							control={form.control}
							placeholder='enter_name'
						/>
						<Input
							fullWidth
							name='company'
							label='company'
							control={form.control}
							placeholder='enter_company'
						/>
						<InputPhone
							fullWidth
							name='phone'
							label='phone_number'
							control={form.control}
							placeholder='enter_phone_number'
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
							{t('send')}
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
