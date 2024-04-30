import { IconGlobal } from '@/assets/icons/global'
import type { TabPlanProps, PricingPlanProps, PlatformProps } from '@/types/plan'
import { IconTelegramOutline } from '@/assets/icons/telegram-outline'

export const TAB_PLANS: TabPlanProps = {
	monthly: {
		label: 'one_month',
		months: 1,
		discount: 0,
		value: 'monthly',
	},
	halfYearly: {
		label: 'six_month',
		discount: 15,
		value: 'halfYearly',
		months: 6,
	},
	yearly: {
		label: 'one_yearly',
		discount: 20,
		value: 'yearly',
		months: 12,
	},
}

export const PRICING_PLANS: PricingPlanProps = {
	BASIC: {
		title: 'Basic',
		isPopular: false,
		desc: 'perfect_plan_for_starters',
		banner: 1,
		promocode: false,
		source: true,
		product: 250,
		discount: true,
		branch: 2,
		mailing: 3,
		chat: true,
		stock: false,
		analytics: false,
		export: false,
		price: 200000,
		type: 'BASIC',
		color: 'PURPLE',
	},
	PROFESSIONAL: {
		title: 'Professional',
		isPopular: true,
		desc: 'for_companies_want_to_do_more',
		banner: 5,
		promocode: true,
		source: true,
		product: 5000,
		discount: true,
		branch: 10,
		mailing: 20,
		chat: true,
		stock: true,
		analytics: true,
		export: false,
		price: 400000,
		type: 'PROFESSIONAL',
		color: 'GREEN',
	},
	ENTERPRISE: {
		title: 'Enterprise',
		isPopular: false,
		desc: 'run_your_company_on_your_termns',
		banner: 10,
		promocode: true,
		source: true,
		product: -1,
		discount: true,
		branch: -1,
		mailing: -1,
		chat: true,
		stock: true,
		analytics: true,
		export: true,
		price: 700000,
		type: 'ENTERPRISE',
		color: 'ORANGE',
	},
}

export const PLAN_PLATFORMS: PlatformProps = {
	TELEGREM: {
		disabled: false,
		title: 'Telegram',
		icon: <IconTelegramOutline />,
		platform: 'TELEGREM',
	},
	WEBSITE: {
		disabled: true,
		title: 'Website',
		icon: <IconGlobal />,
		platform: 'WEBSITE',
	},
	TELEGREM_WEBSITE: {
		disabled: true,
		title: 'Telegram + Website',
		icon: (
			<>
				<IconTelegramOutline />
				<IconGlobal />
			</>
		),
		platform: 'TELEGREM_WEBSITE',
	},
}
