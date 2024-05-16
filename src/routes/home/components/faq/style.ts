import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
	${({ theme }) => ({
		paddingBottom: '90px',
		[theme.breakpoints.down('md')]: {
			paddingBottom: '35px',
		},
	})}
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '0 18px',
		},
	})}
`
