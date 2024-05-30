import { motion } from 'framer-motion'
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
	padding-bottom: 236px;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '0 0 80px',
		},
	})}
`

export const Cards = styled('ul')`
	gap: 20px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '8px',
			gridTemplateColumns: 'repeat(3, 1fr)',
		},
	})}
	@media only screen and (max-width: 430px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

export const Card = styled(motion.li)`
	gap: 20px;
	width: 100%;
	display: flex;
	padding: 18px 30px;
	border-radius: 6px;
	align-items: center;
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

	:after {
		top: 0;
		z-index: 1;
		content: '';
		width: 100%;
		height: 100%;
		border-radius: 12px;
		position: absolute;
		background: transparent;
		box-shadow: 0px 2px 50px 0px ${({ theme }) => theme.palette.colors.GRAY80};
	}
`
