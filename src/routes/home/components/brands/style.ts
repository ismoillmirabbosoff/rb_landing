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
	border-radius: 6px;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.colors.WHITE};
	border: 1px solid ${({ theme }) => theme.palette.colors.GRAY60};
	box-shadow: 0px 2px 50px 0px ${({ theme }) => theme.palette.colors.GRAY80};
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '4px',
			padding: '9px 18px',
			borderRadius: '4px',
		},
	})}
`

export const Avatar = styled(MuiAvatar)`
	width: 60px;
	height: 60px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			width: '24px',
			height: '24px',
			fontSize: '11px',
		},
	})}
`

export const Slider = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	flex-direction: column;
	.keen-slider {
		padding: 0;
		z-index: 2;
		border-radius: 12px;
	}
	& > .keen-slider:first-child {
		padding: 50px 0 5px;
	}
	& > .keen-slider:last-child {
		padding: 5px 0 50px;
	}
`
