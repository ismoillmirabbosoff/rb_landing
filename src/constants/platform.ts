import type { COLORS } from './css'
import { IconWebsite } from '@/assets/icons/website'
import type { SVGProps, FunctionComponent } from 'react'
import { IconTelegramFill } from '@/assets/icons/telegram-fill'
import { IconInstagramFill } from '@/assets/icons/instagram-fill'

interface PlatformsProps {
	label: string
	value: number
	percent: number
	color: keyof typeof COLORS
	bgcolor: keyof typeof COLORS
	Icon: FunctionComponent<
		SVGProps<SVGSVGElement> & {
			title?: string | undefined
		}
	>
	platform: 'TELEGRAM' | 'WEBSITE' | 'INSTAGRAM'
}

export const PLATFORMS: PlatformsProps[] = [
	{
		color: 'BLUE',
		bgcolor: 'BLUE10',
		platform: 'TELEGRAM',
		label: 'telegram_bot',
		Icon: IconTelegramFill,
		value: 125,
		percent: 80,
	},
	{
		color: 'YELLOW',
		label: 'website',
		Icon: IconWebsite,
		bgcolor: 'YELLOW10',
		platform: 'WEBSITE',
		value: 31,
		percent: 20,
	},
	{
		color: 'PURPLE',
		label: 'instagram',
		bgcolor: 'PURPLE20',
		Icon: IconInstagramFill,
		platform: 'INSTAGRAM',
		value: 49,
		percent: 25,
	},
]
