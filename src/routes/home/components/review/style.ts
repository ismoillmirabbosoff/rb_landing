import MuiAvatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
`

export const Card = styled('div')`
	gap: 40px;
	display: flex;
	margin: 50px 0;
	border-radius: 6px;
	flex-direction: column;
	padding: 23px 24px 20px;
	justify-content: space-between;
	background: ${({ theme }) => theme.palette.colors.WHITE};
	border: 1px solid ${({ theme }) => theme.palette.colors.GRAY60};
	box-shadow: 0px 2px 50px 0px ${({ theme }) => theme.palette.colors.GRAY80};
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '13px',
			margin: '20px 0',
			borderRadius: '4px',
			padding: '14px 16px 16px',
			boxShadow: `0px 2px 20px 0px ${theme.palette.colors.GRAY80}`,
		},
	})}
`

export const WrapUser = styled('div')`
	gap: 12px;
	display: flex;
	padding-top: 12px;
	align-items: center;
	border-top: 1px solid ${({ theme }) => theme.palette.colors.GRAY60};
`

export const Avatar = styled(MuiAvatar)`
	width: 48px;
	height: 48px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			width: '36px',
			height: '36px',
		},
	})}
`
