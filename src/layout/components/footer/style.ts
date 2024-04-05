import { styled } from '@mui/material/styles'

export const Container = styled('footer')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	padding: 30px 0;
	align-items: center;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`
