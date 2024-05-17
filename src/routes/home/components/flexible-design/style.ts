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
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '22px 18px 40px',
		},
	})}
`

export const WrapImageBody = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	padding: 15px 15px 35px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '12px 12px 25px',
		},
	})};
`

export const WrapImage = styled('div')`
	width: 100%;
	height: 100%;
	padding-top: 15px;
	position: relative;
	border-radius: 10px 10px 0 0;
	background: ${({ theme }) => theme.palette.colors.WHITE};
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			paddingTop: '10px',
			borderRadius: '5px 5px 0 0',
		},
	})};
`

export const WrapCamera = styled('div')`
	left: 0;
	top: -5px;
	width: 100%;
	display: flex;
	position: absolute;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			svg: {
				width: '75px',
				height: '12px',
			},
		},
	})};
`

export const Wrap = styled('div')`
	width: 100%;
	display: flex;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '60px',
			flexDirection: 'column-reverse',
		},
	})};
`

export const Cards = styled('ul')`
	gap: 50px;
	display: flex;
	min-width: 390px;
	padding-top: 50px;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			paddingTop: '0',
			li: {
				alignItems: 'center',
			},
		},
	})};
`

export const WrapIcon = styled('div')`
	width: 42px;
	height: 42px;
	display: flex;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.colors.WHITE40};
	svg {
		width: 24px;
		height: 24px;
		path {
			fill: ${({ theme }) => theme.palette.colors.GRAY120};
		}
	}
`
