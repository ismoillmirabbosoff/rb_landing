import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	padding-bottom: 97px;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	min-height: 332px;
	position: relative;
	border-radius: 20px;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	background-color: ${({ theme }) => theme.palette.colors.WHITE};
	box-shadow: 0px 0px 50px 0px ${({ theme }) => theme.palette.colors.GRAY150};
`
export const WrapImage = styled('div')`
	top: -9px;
	right: 0;
	width: 100%;
	height: 100%;
	max-width: 385px;
	position: absolute;
	padding-right: 60px;
`
