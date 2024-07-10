import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	padding: 50px 0;
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

export const WrapImage = styled('div')`
	padding: 20px 0;
	width: fit-content;
	height: fit-content;

	img {
		object-fit: scale-down;
	}
`
