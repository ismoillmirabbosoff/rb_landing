import dayjs from 'dayjs'
import { useForm } from 'react-hook-form'
import { useBoolean } from '@/hooks/useBoolean'
import { phoneFormat } from '@/utils/format'
import { object, string, type InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = object().shape({
	name: string().required('name_is_a_required_field').default(''),
	company: string().required('company_is_a_required_field').default(''),
	phone: string()
		.required('phone_is_a_required_field')
		.test({
			name: 'min length',
			message: 'phone_number_is_invalid',
			test: val => (val?.length === 0 ? true : val ? !val.includes('_') : undefined),
		})
		.default(''),
})

type SchemaType = InferType<typeof schema>

const URL = 'https://api.telegram.org/bot6517679915:AAEbhiGxDM37BrlrHDfQCwieqxA1pHkPEnQ/sendMessage'

export const useContact = () => {
	const modal = useBoolean()
	const { value, setTrue, setFalse } = useBoolean()
	const form = useForm<SchemaType>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: schema.cast({}),
	})

	const onSubmit = async (data: SchemaType) => {
		setTrue()
		const text = `Ismi: ${data.name} \nKompaniya: ${data.company}\nTelefon: ${phoneFormat(data.phone)}\nSana: ${dayjs().format('YYYY-MM-DD HH:mm')}`
		const body = { chat_id: -1002105690785, text }

		try {
			await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			})

			setFalse()
			modal.setTrue()
			form.reset(schema.cast({}))
		} catch (error) {
			setFalse()
		}
	}

	return { form, value, modal, onSubmit }
}
