import { IconFlagEn } from '@/assets/icons/flag-en'
import { IconFlagRu } from '@/assets/icons/flag-ru'
import { IconFlagUz } from '@/assets/icons/flag-uz'
import { type LanguageOptionProps } from '@/types/language'

export const LANGUAGE_OPTIONS: LanguageOptionProps = {
	uz: {
		value: 'uz',
		// eslint-disable-next-line quotes
		label: "O'zbekcha",
		Icon: IconFlagUz,
		checked: false,
		// eslint-disable-next-line quotes
		shortLabel: "O'zb",
	},
	ru: {
		value: 'ru',
		label: 'Pусский',
		Icon: IconFlagRu,
		checked: false,
		shortLabel: 'Pуc',
	},
	en: {
		value: 'en',
		label: 'English',
		Icon: IconFlagEn,
		checked: false,
		shortLabel: 'Eng',
	},
}
