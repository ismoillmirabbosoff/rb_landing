import MuiAvatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 45px 0 40px;
	flex-direction: column;
	justify-content: space-between;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '24px 0',
		},
	})}
`

export const Card = styled('li')`
	gap: 20px;
	width: 100%;
	display: flex;
	padding: 18px 30px;
	align-items: center;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '4px',
			padding: '9px 18px',
		},
	})}
`

export const Avatar = styled(MuiAvatar)`
	width: 70px;
	height: 70px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			width: '50px',
			height: '50px',
			fontSize: '11px',
		},
	})}
`
