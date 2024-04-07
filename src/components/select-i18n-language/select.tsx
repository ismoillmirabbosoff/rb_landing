import { useState } from 'react'
import { Select } from './style'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import MenuItem from '@mui/material/MenuItem'
import type { LanguageTypes } from '@/types/language'
import { LANGUAGE_OPTIONS } from '@/constants/language'
import { type SelectChangeEvent } from '@mui/material/Select'
import { IconDirectionDown } from '@/assets/icons/direction-down'

export const SelectI18nLanguage = () => {
	const { push, query, asPath, locale, pathname } = useRouter()
	const [value, setValue] = useState(locale)

	const handleChange = (e: SelectChangeEvent<string>) => {
		void push({ pathname, query }, asPath, {
			locale: e.target.value,
		})
		setValue(e.target.value)
	}

	return (
		<Select
			onChange={handleChange}
			value={value as LanguageTypes}
			renderValue={(selected: LanguageTypes) => {
				const option = LANGUAGE_OPTIONS[selected]
				const Icon = option.Icon
				const label = option.shortLabel
				return (
					<Box gap='6px' display='flex' alignItems='center' justifyContent='center'>
						<Icon />
						{label}
					</Box>
				)
			}}
			IconComponent={props => (
				<Box
					{...props}
					sx={{
						width: '35px',
						height: '24px',
						display: 'flex',
						right: '6px !important',
						justifyContent: 'flex-end',
						top: 'calc(50% - 12px) !important',
						'&.MuiSelect-iconOpen': {
							borderLeft: 'none',
							justifyContent: 'flex-start',
						},
					}}
				>
					<IconDirectionDown />
				</Box>
			)}
		>
			{Object.values(LANGUAGE_OPTIONS).map(({ Icon, label, value }, i) => (
				<MenuItem key={i} value={value} sx={{ gap: '6px' }}>
					<Icon />
					{label}
				</MenuItem>
			))}
		</Select>
	)
}
