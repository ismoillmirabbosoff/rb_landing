import { motion } from 'framer-motion'
import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	min-height: 100vh;
	align-items: center;
	padding-bottom: 116px;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const Content = styled('div')`
	flex-grow: 1;
	display: flex;
	max-width: 850px;
	padding-top: 145px;
	align-items: center;
	margin-bottom: 141px;
	flex-direction: column;
	justify-content: center;
`

export const WrapImage = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	.scroll {
		top: 10%;
		width: 100%;
		z-index: -1;
		height: 2000px;
		position: absolute;
	}
`

export const WrapCircle = styled(motion.div)`
	display: flex;
	position: relative;
	justify-content: center;
	::after {
		left: 0;
		bottom: 0;
		z-index: -1;
		width: 100%;
		content: '';
		height: 570px;
		border-radius: 50%;
		position: absolute;
		background: linear-gradient(180deg, #5d59f01a, #5d59f000);
	}
`
