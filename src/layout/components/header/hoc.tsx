import { Wrapper } from './style'
import { useState, useEffect } from 'react'
import { isServer } from '@/utils/is-server'
import { useBoolean } from '@/hooks/useBoolean'
import { useTheme } from '@mui/material/styles'
import type { ChildrenProps } from '@/types/common'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Hoc = ({ children }: ChildrenProps) => {
	const { value, setValue } = useBoolean()
	const [position, setPosition] = useState(isServer() ? 0 : window.pageYOffset)
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))

	useEffect(() => {
		const handleScroll = () => {
			const moving = window.pageYOffset
			setValue(moving !== 0 && position < moving)
			setPosition(moving)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	return (
		<Wrapper
			sx={{
				top: value && matches ? '-94px' : 0,
			}}
		>
			{children}
		</Wrapper>
	)
}
