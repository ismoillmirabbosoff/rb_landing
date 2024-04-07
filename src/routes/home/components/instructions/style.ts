import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	gap: 40px;
	width: 100%;
	display: grid;
	padding-bottom: 120px;
	grid-template-columns: 1fr 1fr;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`
