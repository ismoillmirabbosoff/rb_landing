import type { ReactElement } from 'react'
import type { COLORS } from '@/constants/css'

export type PricingPlanTypeProps = 'BASIC' | 'PROFESSIONAL' | 'ENTERPRISE'
export type PlatformTypeProps = 'TELEGRAM' | 'WEBSITE' | 'TELEGRAM_WEBSITE'
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

export interface PlanProps {
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
	employee: number
	chat: boolean
	stock: boolean
	analytics: boolean
	export: boolean
	type: PricingPlanTypeProps
	color: keyof typeof COLORS
	price: Record<PlatformTypeProps, number>
}

export type PricingPlanProps = Record<PricingPlanTypeProps, PlanProps>

export type PlatformProps = Record<
	PlatformTypeProps,
	{
		title: string
		icon: ReactElement
		platform: PlatformTypeProps
	}
>
