import Stack from '@mui/material/Stack'
import { Wrapper, Container } from './style'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { IconLinearGradient } from '@/assets/icons/linear-gradient'

export const AboutUs = () => {
	const { t } = useTranslation('common')

	return (
		<Container>
			<Wrapper>
				<Stack position='relative'>
					<Stack top='-200%' position='absolute'>
						<IconLinearGradient />
					</Stack>
					<Typography align='center' variant='title30'>
						{t('about_robosell_platform')}
					</Typography>
				</Stack>
				<Typography mt='50px' gap='10px' variant='text140' component={Stack}>
					<Typography>
						{t('robosell_is_a_full_featured_constructor_for_creating_websites_and_telegram_bots')}
					</Typography>
					<Typography>
						{t(
							'with_wobosell_any_entrepreneur_can_create_their_online_business_and_start_accepting',
						)}
					</Typography>
					<Typography variant='title70'>{t('company_mission')}</Typography>
					<Typography>{t('our_mission_is_to_make_life_easier_for_entrepreneurs')}</Typography>
					<Typography variant='title70'>{t('how_robosell_can_be_beneficial')}</Typography>
					<Typography>
						- {t('simplicity_and_speed_create_a_telegram_bot_or_website_in_just_15_minutes')}
					</Typography>
					<Typography>
						-{' '}
						{t(
							'integrations_take_advantage_of_integrations_with_payment_systems_pos_systems_and_warehouses_bringing_everything_together_in_a_unified_platform_this_significantly_simplifies_management_and_allows_you_to_focus_on_business_development',
						)}
					</Typography>
					<Typography>
						- {t('business_management_use_our_admin_panel_for_complete_control_over_your_business')}
					</Typography>
					<Typography>
						-{' '}
						{t(
							'revenue_growth_increase_revenue_by_simplifying_the_order_process_for_your_customers',
						)}
					</Typography>
					<Typography>
						-{' '}
						{t(
							'customer_loyalty_make_the_ordering_process_convenient_and_attract_repeat_customers',
						)}
					</Typography>
					<Typography>
						{t('currently_robosell_platform_is_used_in_more_than_4_countries')}
					</Typography>
					<Typography>
						{t(
							'we_have_been_operating_in_the_uzbekistan_market_since_2022_The_average_revenue_growth_of_our_users_is_more_than_2_times',
						)}
					</Typography>
					<Typography>{t('robosell_is_the_core_of_your_business')}</Typography>
				</Typography>
			</Wrapper>
		</Container>
	)
}
