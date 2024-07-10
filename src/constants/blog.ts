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

export interface BlogProps {
	id: string
	date: Dayjs
	photo: string
	title: string
	isMain: boolean
	content: { image: string | null; texts: string[] }[]
}

export const BLOGS: BlogProps[] = [
	{
		id: '1',
		isMain: true,
		date: dayjs(),
		photo: ImageBlog1.src,
		title:
			'robosell_uz_platform_that_changed_the_approach_to_business_management_through_telegram_bots',
		content: [
			{
				image: ImageBlog11.src,
				texts: ['the_robosell_uz_platform_was_first_launched_on_january_1_2023'],
			},
			{
				image: ImageBlog12.src,
				texts: [
					'in_addition_robosell_uz_was_one_of_the_first_platforms_to_introduce_the_source_function',
					'the_first_clients_of_the_robosell_uz_platform_were_the_jumanji_restaurant_and_the_xon_xonim_cafe',
				],
			},
			{
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
		date: dayjs(),
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
		id: '4',
		isMain: true,
		date: dayjs(),
		photo: ImageBlog3.src,
		title: 'Most popular design systems to learn from in 2022',
		content: [],
	},
]
