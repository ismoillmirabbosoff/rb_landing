import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	min-height: 100vh;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const Content = styled('div')`
	flex-grow: 1;
	display: flex;
	max-width: 750px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`
