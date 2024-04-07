import { styled } from '@mui/material/styles'

export const Container = styled('footer')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 30px 35px 30px 0;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	border-top: 1px solid ${({ theme }) => theme.palette.colors.GRAY20};
`
