import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')`
	display: flex;
	align-items: center;

	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			'#logo svg': {
				width: '28px',
				height: '28px',
			},
			'#logo-text svg': {
				width: '170px',
				height: '40px',
			},
		},
	})}
`
