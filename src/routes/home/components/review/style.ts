import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	padding: 53px 0 190px;
	flex-direction: column;
	align-items: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const Card = styled('div')`
	width: 100%;
	padding: 24px;
	min-width: 488px;
	border-radius: 6px;
	border: 1px solid #e9e9e9;
	box-shadow: 0px 2px 50px 0px rgba(0, 0, 0, 0.1);
	background: ${({ theme }) => theme.palette.colors.WHITE};
`

export const Slider = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	border-radius: 12px;
	flex-direction: column;
	.keen-slider {
		padding: 0;
		z-index: 2;
		border-radius: 12px;
	}
	:after {
		top: 0;
		z-index: 1;
		content: '';
		width: 100%;
		height: 100%;
		border-radius: 12px;
		position: absolute;
		background: transparent;
		box-shadow: 0px 2px 50px 0px rgba(0, 0, 0, 0.1);
	}
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			marginTop: '34px',
			paddingLeft: '18px',
		},
	})}
`
