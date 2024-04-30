import type { ReactElement } from 'react'
import type { COLORS } from '@/constants/css'

export type PricingPlanTypeProps = 'BASIC' | 'PROFESSIONAL' | 'ENTERPRISE'
export type PlatformTypeProps = 'TELEGREM' | 'WEBSITE' | 'TELEGREM_WEBSITE'
export type PlanTypeProps = 'monthly' | 'halfYearly' | 'yearly'

export type TabPlanProps = Record<
	PlanTypeProps,
	{
		label: string
		months: number
		discount: number
		value: PlanTypeProps
	}
>

export type PricingPlanProps = Record<
	PricingPlanTypeProps,
	{
		title: string
		isPopular: boolean
		desc: string
		banner: number
		promocode: boolean
		source: boolean
		product: number
		discount: boolean
		branch: number
		mailing: number
		chat: boolean
		stock: boolean
		analytics: boolean
		export: boolean
		price: number
		type: PricingPlanTypeProps
		color: keyof typeof COLORS
	}
>

export type PlatformProps = Record<
	PlatformTypeProps,
	{
		title: string
		disabled: boolean
		icon: ReactElement
		platform: PlatformTypeProps
	}
>
