import { styled } from '@mui/material/styles'

export const Card = styled('div')`
	width: 100%;
	height: 100%;
	position: relative;
	img {
		max-height: 430px;
	}
	::after {
		left: 0;
		z-index: 1;
		bottom: 0;
		width: 100%;
		height: 100%;
		content: '';
		position: absolute;
		border-radius: 0px 0px 8px 8px;
		background: ${({ theme }) => theme.palette.colors.LINEAR_GRADIENT10};
	}
`

export const Content = styled('div')`
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 2;
	position: absolute;
	padding: 0 34px 16px 28px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '0 10px',
		},
	})};
`
