import { styled } from '@mui/material/styles'
import MuiAvatar from '@mui/material/Avatar'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	padding: 0 0 40px;
	flex-direction: column;
	align-items: center;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '24px 0',
		},
	})}
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
	width: 100%;
	display: flex;
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
			borderRadius: '4px',
			padding: '14px 16px 16px',
		},
	})}
`

export const Slider = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	border-radius: 12px;
	flex-direction: column;
	.keen-slider {
		z-index: 2;
		padding: 50px 0;
		border-radius: 12px;
	}

	.keen-slider__slide {
		${({ theme }) => ({
			[theme.breakpoints.down('md')]: {
				minWidth: '310px !important',
				maxWidth: '310px !important',
			},
		})}
	}
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
