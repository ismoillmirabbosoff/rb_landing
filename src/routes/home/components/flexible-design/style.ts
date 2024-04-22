import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 100px 0 90px;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapImageBody = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	padding: 15px 15px 35px;
`

export const WrapImage = styled('div')`
	width: 100%;
	height: 100%;
	padding-top: 15px;
	position: relative;
	border-radius: 10px 10px 0 0;
	background: ${({ theme }) => theme.palette.colors.WHITE};
`

export const WrapCamera = styled('div')`
	left: 0;
	top: -5px;
	width: 100%;
	display: flex;
	position: absolute;
	justify-content: center;
`
