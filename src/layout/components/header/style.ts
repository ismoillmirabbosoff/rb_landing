import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	&,
	& > header {
		max-height: 94px;
		min-height: 94px;
		${({ theme }) => ({
			[theme.breakpoints.down('md')]: {
				maxHeight: '68px',
				minHeight: '68px',
			},
		})}
	}
	background-color: ${({ theme }) => theme.palette.colors.BLACK10};
`

export const Wrapper = styled('header')`
	top: 0;
	width: 100%;
	z-index: 1000;
	height: 100%;
	display: flex;
	position: fixed;
	padding: 0 18px;
	align-items: center;
	transition: 0.3s linear;
	justify-content: center;
	background-color: ${({ theme }) => theme.palette.colors.BLACK10};
`

export const Wrap = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '3px 8px',
			borderRadius: '10px',
			backdropFilter: 'blur(25px)',
			background: theme.palette.colors.WHITE10,
		},
	})}
`

export const WrapNav = styled('div')`
	flex-grow: 1;
	display: flex;
	margin: 0 20px;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	})}
`

export const WrapRight = styled('div')`
	gap: 10px;
	display: flex;
	align-items: center;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	})}
`

export const WrapMenu = styled('div')`
	display: none;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			display: 'flex',
		},
	})};
`
