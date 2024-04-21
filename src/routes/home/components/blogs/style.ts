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

export const Card = styled('li')`
	width: 100%;
	position: relative;
	img {
		max-height: 430px;
	}
	::after {
		left: 0;
		z-index: 1;
		bottom: 0;
		width: 100%;
		content: '""';
		height: 270px;
		position: absolute;
		border-radius: 0px 0px 8px 8px;
		background: ${({ theme }) => theme.palette.colors.LINEAR_GRADIENT10};
	}
`

export const Content = styled('div')`
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 2;
	position: absolute;
	padding: 0 34px 16px 28px;
`
