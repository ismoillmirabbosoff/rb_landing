import { styled } from '@mui/material/styles'

export const Container = styled('footer')`
	width: 100%;
	display: flex;
	position: relative;
	padding-bottom: 118px;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '0 18px 33px',
		},
	})}
`

export const Wrapper = styled('div')`
	z-index: 0;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	background-color: ${({ theme }) => theme.palette.colors.WHITE};
	box-shadow: 0px 0px 50px 0px ${({ theme }) => theme.palette.colors.GRAY150};
	${({ theme }) => ({
		borderRadius: '20px',
		padding: '34px 50px 50px',
		[theme.breakpoints.down('md')]: {
			borderRadius: '8px',
			padding: '30px 16px 16px',
		},
	})}
`

export const WrapLinearGradientContact = styled('div')`
	left: 0;
	top: -70%;
	z-index: -1;
	position: absolute;
`
