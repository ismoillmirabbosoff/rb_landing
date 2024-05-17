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
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '0 18px',
		},
	})}
`

export const Cards = styled('div')`
	gap: 20px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '10px',
			gridTemplateColumns: '1fr',
		},
	})};
`
