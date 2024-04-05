import { Wrapper } from './style'
import { useState, useEffect } from 'react'
import { isServer } from '@/utils/is-server'
import { useBoolean } from '@/hooks/useBoolean'
import type { ChildrenProps } from '@/types/common'

export const Hoc = ({ children }: ChildrenProps) => {
	const { value, setValue } = useBoolean()
	const [position, setPosition] = useState(isServer() ? 0 : window.pageYOffset)

	useEffect(() => {
		const handleScroll = () => {
			const moving = window.pageYOffset
			setValue(position < moving)
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
				top: value ? '-94px' : 0,
			}}
		>
			{children}
		</Wrapper>
	)
}
