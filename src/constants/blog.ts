import dayjs, { type Dayjs } from 'dayjs'
import ImageBlog1 from '@/assets/images/blog-1.webp'
import ImageBlog2 from '@/assets/images/blog-2.webp'
import ImageBlog3 from '@/assets/images/blog-3.webp'
import ImageBlog11 from '@/assets/images/blog-1.1.png'
import ImageBlog12 from '@/assets/images/blog-1.2.png'
import ImageBlog13 from '@/assets/images/blog-1.3.png'
import ImageBlog14 from '@/assets/images/blog-1.4.png'
import ImageBlog21 from '@/assets/images/blog-2.1.png'
import ImageBlog22 from '@/assets/images/blog-2.2.png'
import ImageBlog23 from '@/assets/images/blog-2.3.png'
import ImageBlog31 from '@/assets/images/blog-3.1.png'
import ImageBlog32 from '@/assets/images/blog-3.2.png'
import ImageBlog33 from '@/assets/images/blog-3.3.png'
import ImageBlog34 from '@/assets/images/blog-3.4.png'
import ImageBlog35 from '@/assets/images/blog-3.5.png'

export interface BlogContentProps {
	left?: boolean
	right?: boolean
	image: string | null
	texts: string[]
}
export interface BlogProps {
	id: string
	date: Dayjs
	photo: string
	title: string
	isMain: boolean
	content: Array<BlogContentProps>
}

export const BLOGS: BlogProps[] = [
	{
		id: '1',
		isMain: true,
		date: dayjs().set('year', 2023).set('M', 0).set('date', 1).set('h', 15).set('minute', 30),
		photo: ImageBlog1.src,
		title:
			'robosell_uz_platform_that_changed_the_approach_to_business_management_through_telegram_bots',
		content: [
			{
				image: ImageBlog11.src,
				texts: ['the_robosell_uz_platform_was_first_launched_on_january_1_2023'],
			},
			{
				right: true,
				image: ImageBlog12.src,
				texts: [
					'in_addition_robosell_uz_was_one_of_the_first_platforms_to_introduce_the_source_function',
					'the_first_clients_of_the_robosell_uz_platform_were_the_jumanji_restaurant_and_the_xon_xonim_cafe',
				],
			},
			{
				left: true,
				image: ImageBlog13.src,
				texts: [
					'arthur_babajanov_restaurant_jumanji',
					'When_i_first_saw_the_webapp_design_of_this_bot',
				],
			},
			{
				image: ImageBlog14.src,
				texts: ['javlon_muyiddinov_xon_xonim', 'bots_like_robosell_uz_make_our_lives_much_easier'],
			},
		],
	},
	{
		id: '2',
		isMain: true,
		date: dayjs().set('year', 2024).set('M', 3).set('date', 1).set('h', 11).set('minute', 45),
		photo: ImageBlog2.src,
		title: 'second_version_of_robosell_uz_adding_features_and_changing_design',
		content: [
			{
				image: ImageBlog21.src,
				texts: ['the_second_and_main_version_of_robosell_uz_was_launched_on_april_1_2024'],
			},
			{
				image: ImageBlog22.src,
				texts: [
					'new_types_of_delivery_services_have_been_added_and_the_processes_for_using_the_platform_have_been_simplified_a_registration_function_was_developed',
				],
			},
			{
				image: ImageBlog23.src,
				texts: [
					'we_also_completely_updated_the_design_of_the_platform_and_introduced_the_necessary_functionality',
				],
			},
			{
				image: null,
				texts: ['so_register_as_soon_as_possible_and_start_your_online_business_with_robosell_uz'],
			},
		],
	},
	{
		id: '3',
		isMain: true,
		date: dayjs().set('year', 2024).set('M', 3).set('date', 29).set('hour', 9).set('minute', 30),
		photo: ImageBlog3.src,
		title: 'How to Start a Business Online Using One Platform',
		content: [
			{
				image: ImageBlog31.src,
				texts: [
					'Robosell platformasi biznesga onlayn kirish jarayonini soddalashtiradi, xavflarni kamaytiradi va ishga tushirishni sezilarli darajada tezlashtiradi.',
				],
			},
			{
				image: ImageBlog32.src,
				texts: [
					'O‘zbekistonda elektron tijorat jadal sur’atlar bilan o‘sib bormoqda, biroq ko‘plab tadbirkorlar bu borada muvaffaqiyatga erisha olmayaptilar. Bu bilim va imkoniyatlar  o’rtasida bo’shliqni keltirib chiqaradi. Robosell.uz platformasi biznesga onlayn kirish jarayonini soddalashtiradi, xavflarni kamaytiradi va tashkiliy jarayonlarni  sezilarli darajada tezlashtiradi.',
					'Endi biznesingizni onlayn boshlash uchun dasturchilar yoki kompaniyalarni qidirishingiz, ulardan 15-20 kunlab javob kutishingiz, shuningdek, Telegram bot yoki veb-saytga o‘zgartirish kiritmoqchi bo‘lganingizda har safar dasturchilarga murojaat qilishingiz shart emas.',
				],
			},
			{
				image: ImageBlog33.src,
				texts: [
					'Keling, solishtirib ko‘ramiz: Robosell platformasida Telegram bot hamda veb-sayt yaratishning umumiy oylik narxi 400 000 so‘m (tarifga qarab)ga teng bo‘ladi. Yiliga bu summa 3 840 000 so‘mni tashkil qiladi.',
					'Agar bu ishni o‘zingiz qilmoqchi bo‘lsangiz: Telegram bot (Web App versiyasi) – 8 mln so’m. Veb-sayt – 25 mln so’mdan -38 mln so’mgacha. Admin paneli – 19 mln so’m. Texnik qo‘llab-quvvatlash – 8 mln so’m/1 yil. Virtual server – 150 000 so‘m/1 oy, yiliga 1 800 000 so‘m. Umumiy hisobda, yiliga taxminan 68 mln so’m ketadi.',
				],
			},
			{
				image: ImageBlog34.src,
				texts: [
					'Robosell platformasi bilan tadbirkor nafaqat pulini, balki asablarini ham saqlaydi, chunki  birinchi urinishdayoq xohlagan narsaga erishishga hech kim kafolat bermaydi. Buning ustiga mijoz xohishini bitta so‘zdan tushunadigan va bajara oladigan jamoani topish – eng qiyin masala.',
					'Bundan xulosa qilamizki, tadbirkor o’zi ishlab chiqaruvchilarga alohida mablag‘ sarflab yaratgan platformaning’ o‘rniga shu pul evaziga Robocell bilan taxminan 15-17 yil davomida muvaffaqiyatli biznes yuritishi mumkin.',
					'Hozirda har kuni 50 dan ortiq foydalanuvchiRobosell.uz’da ro’yxatdan o’tib, platformani asta-sekin o’z biznesiga joriy qilmoqda.',
				],
			},
			{
				image: ImageBlog35.src,
				texts: [
					'Ayni paytda platforma orqali siz o’zingizning Telegram botingiz va veb-saytingizni yaratishingiz mumkin. Eng muhimi, biznesni boshqarish, uni ko’plab xizmatlar bilan integratsiya qilish uchun boshqaruv paneliga ega bo’lasiz.',
					'Foydalanuvchilarimizga yanada qulaylik yaratish uchun biz Call-markazni ishga tushirganmiz. Bu yerda ular nafaqat barcha savollarga javob olishlari, balki yangi akkaunt yaratish va biznesni boshlashda qo‘llab-quvvatlashga ega bo‘ladilar. Kompaniyamiz Genius Quality Agency, Robosell menejerlarini o’qitadi va ularni mijozlarni jalb qilish bo’yicha professional maslahatchilarga aylantiradi.',
				],
			},
		],
	},
]
