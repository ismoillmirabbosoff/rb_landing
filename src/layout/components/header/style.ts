import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	&,
	& > header {
		max-height: 94px;
		min-height: 94px;
	}
	background-color: ${({ theme }) => theme.palette.colors.BLACK10};
`

export const Wrapper = styled('header')`
	top: 0;
	width: 100%;
	z-index: 999;
	height: 100%;
	display: flex;
	position: fixed;
	padding: 0 18px;
	align-items: center;
	transition: 0.3s linear;
	justify-content: center;
	background-color: ${({ theme }) => theme.palette.colors.BLACK10};
`

export const WrapDesktop = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`
