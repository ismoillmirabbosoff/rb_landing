import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	padding-bottom: 85px;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const Slider = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	flex-direction: column;
`
