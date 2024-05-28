import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.palette.colors.BLACK10};
`

export const Wrapper = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	min-height: calc(100vh - 94px);
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			minHeight: 'calc(100vh - 124px)',
		},
	})};
`

export const WrapImage = styled('div')`
	top: 0;
	width: 100vw;
	height: 100%;
	position: absolute;
`

export const WrapImageRobosellDark = styled('div')`
	display: flex;
	align-items: flex-end;
	img {
		min-height: 180px;
	}
`
