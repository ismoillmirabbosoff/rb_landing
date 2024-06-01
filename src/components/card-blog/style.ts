import { styled } from '@mui/material/styles'

export const Card = styled('div')`
	width: 100%;
	height: 100%;
	position: relative;
	img {
		max-height: 430px;
		border-radius: 8px;
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
