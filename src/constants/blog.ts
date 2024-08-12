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
	content: BlogContentProps[]
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
		title: 'how_to_start_a_business_online_using_one_platform',
		content: [
			{
				image: ImageBlog31.src,
				texts: ['the_robosell_platform_simplifies_the_process_of_entering_a_business_online'],
			},
			{
				image: ImageBlog32.src,
				texts: [
					'e_commerce_is_growing_rapidly_in_uzbekistan',
					'now_you_dont_have_to_search_for_developers_or_companies_to_start_your_business_online',
				],
			},
			{
				image: ImageBlog33.src,
				texts: [
					'lets_compare_the_total_monthly_cost_of_creating_a_telegram_bot_and_a_website',
					'if_you_want_to_do_it_yourself_telegram_bot_web_app_version__8_million_soums',
				],
			},
			{
				image: ImageBlog34.src,
				texts: [
					'with_the_robosell_platform_an_entrepreneur_saves_not_only_his_money',
					'we_conclude_from_this_that_an_entrepreneur_can_run_a_successful_business',
					'currently_more_than_50_users_register_on_roboselluz_every_day_and_introduce_the_platform_to_their_business',
				],
			},
			{
				image: ImageBlog35.src,
				texts: [
					'at_the_moment_you_can_create_your_own_telegram_bot_and_website_through_the_platform',
					'in_order_to_make_our_users_more_comfortable_we_have_launched_a_call_center',
				],
			},
		],
	},
]
