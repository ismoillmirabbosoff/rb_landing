import { styled } from '@mui/material/styles'
import { type BlogContentProps } from '@/constants/blog'

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

export const Content = styled('li')<BlogContentProps>`
	display: grid;
	${({ theme, left, right }) => ({
		gridTemplateColumns: right || left ? '1fr 1fr' : '1fr',
		[theme.breakpoints.down('md')]: {
			gridTemplateColumns: '1fr',
		},
	})}
`

export const WrapIamge = styled('div')`
	height: 400px;
	img {
		border-radius: 10px;
		object-fit: scale-down;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			maxHeight: '300px',
			height: 'fit-content',
		},
	})}
`
