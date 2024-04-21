import Stack from '@mui/material/Stack'
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Input } from '@/components/inputs/input'
import { object, string, type InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputPhone } from '@/components/inputs/input-phone'
import { Wrapper, Container, WrapLinearGradientContact } from './style'
import { IconLinearGradientContact } from '@/assets/icons/linear-gradient-contact'

const schema = object().shape({
	name: string().required().default(''),
	company: string().required().default(''),
	phone: string()
		.test({
			name: 'min length',
			message: 'contact_number_is_invalid',
			test: val => (val?.length === 0 ? true : val ? !val.includes('_') : undefined),
		})
		.default(''),
})

type SchemaType = InferType<typeof schema>

export const Contact = () => {
	const form = useForm<SchemaType>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: schema.cast({}),
	})

	return (
		<Container>
			<WrapLinearGradientContact>
				<IconLinearGradientContact />
			</WrapLinearGradientContact>
			<Wrapper>
				<Typography variant='title90' component='h2'>
					Still have questions?
				</Typography>
				<Typography align='center' variant='text80' component='h3'>
					Can’t find the answer you’re looking for? Please chat to our friendly team.
				</Typography>
				<Stack mt='27px' gap='28px' width='100%' display='grid' gridTemplateColumns='1fr 1fr 1fr'>
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
					<Button sx={{ minWidth: '183px', borderRadius: '9px' }}>Send</Button>
				</Stack>
			</Wrapper>
		</Container>
	)
}
