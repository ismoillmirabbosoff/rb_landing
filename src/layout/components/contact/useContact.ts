import dayjs from 'dayjs'
import { useForm } from 'react-hook-form'
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

const URL = 'https://api.telegram.org/bot5863453084:AAFe57oruCXVUMacRlp2OfXTGDQeXhvABPw/sendMessage'

export const useContact = () => {
	const form = useForm<SchemaType>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: schema.cast({}),
	})

	const onSubmit = async (data: SchemaType) => {
		const text = `Ismi: ${data.name}, Kompaniya: ${data.company},Telefon: ${data.phone},Sana: ${dayjs().format()}`
		const body = { chat_id: -1002105690785, text }

		try {
			const res = await fetch(URL, {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
					'cache-control': 'no-cache',
				},
			})
			if (res.status === 200) {
				console.log(res)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return { form, onSubmit }
}
