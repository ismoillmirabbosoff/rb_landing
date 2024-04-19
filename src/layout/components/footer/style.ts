import { styled } from '@mui/material/styles'

export const Container = styled('footer')`
	width: 100%;
	display: flex;
	position: relative;
	justify-content: center;
`

export const Wrapper = styled('div')`
	z-index: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapImage = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: absolute;
`
