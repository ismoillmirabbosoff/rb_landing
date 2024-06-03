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
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			minHeight: 'fit-content',
			flexDirection: 'column-reverse',
		},
	})}
`
export const WrapperImage = styled('div')`
	height: 100%;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			height: '300px',
		},
	})}
`

export const WrapImage = styled('div')`
	right: 0;
	top: -9px;
	width: 100%;
	height: 100%;
	max-width: 385px;
	position: absolute;
	padding-right: 60px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			top: '-25x',
			height: '300px',
		},
	})}
`

export const Content = styled('div')`
	gap: 16px;
	width: 50%;
	padding: 57px 60px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			width: '100%',
			padding: '18px',
		},
	})}
`
