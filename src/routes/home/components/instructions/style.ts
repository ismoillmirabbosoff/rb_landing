import { motion } from 'framer-motion'
import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	gap: 40px;
	width: 100%;
	display: grid;
	padding-bottom: 120px;
	grid-template-columns: 1fr 1fr;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gridTemplateColumns: '100%',
		},
	})};
`

export const WrapPlay = styled(motion.div)`
	gap: 12px;
	display: flex;
	z-index: 999;
	padding: 0 22px;
	cursor: pointer;
	min-width: 260px;
	width: fit-content;
	position: absolute;
	align-items: center;
	border-radius: 11.818px;
	transition: all 0.5s ease-in-out;
	backdrop-filter: blur(9.454545021057129px);
	background: ${({ theme }) => theme.palette.colors.WHITE};
	border: 1.182px solid ${({ theme }) => theme.palette.colors.GRAY190};
	box-shadow: 0px 7.091px 44.909px ${({ theme }) => theme.palette.colors.GRAY200};
`

interface WrapImageContentProps {
	open: boolean
}

export const WrapImageContent = styled(motion.div)<WrapImageContentProps>`
	width: 100%;
	height: 100%;
	position: absolute;
	border-radius: 20px;
	transition: all 0.5s ease-in-out;
	top: ${({ open }) => (open ? 0 : '35px')};
	left: ${({ open }) => (open ? 0 : '-35px')};
	box-shadow: 4.639px -4.639px 28.995px rgba(0, 0, 0, 0.3);
`

export const WrapImage = styled('div')`
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	border-radius: 20px;
	background: ${({ theme }) => theme.palette.colors.GRAY90};
	&:hover {
		& > div:first-child {
			top: 0;
			left: 0;
		}
	}
`

export const WrapNumber = styled('div')`
	z-index: 1;
	width: 42px;
	height: 42px;
	display: flex;
	font-size: 16px;
	font-weight: 400;
	line-height: 32px;
	border-radius: 50%;
	text-align: center;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.palette.colors.PURPLE};
	background: ${({ theme }) => theme.palette.colors.WHITE};
	border: 1px solid ${({ theme }) => theme.palette.colors.PURPLE};
`

export const List = styled('ul')`
	position: relative;
	::after {
		top: 21px;
		left: 21px;
		width: 1px;
		content: '';
		position: absolute;
		height: calc(100% - 42px);
		background-color: ${({ theme }) => theme.palette.colors.PURPLE};
	}
`
