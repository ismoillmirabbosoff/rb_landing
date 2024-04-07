import type { SVGProps, FunctionComponent } from 'react'

export type LanguageTypes = 'uz' | 'ru' | 'en'

export type LanguageOptionProps = Record<
	LanguageTypes,
	{
		label: string
		checked: boolean
		shortLabel: string
		value: LanguageTypes
		Icon: FunctionComponent<
			SVGProps<SVGSVGElement> & {
				title?: string | undefined
			}
		>
	}
>
