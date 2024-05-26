import { styled } from '@mui/material/styles'

export const Container = styled('footer')`
	width: 100%;
	display: flex;
	position: relative;
	justify-content: center;
	background-color: ${({ theme }) => theme.palette.colors.BLACK};
`

export const Wrapper = styled('div')`
	z-index: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '0 18px',
		},
	})}
`
