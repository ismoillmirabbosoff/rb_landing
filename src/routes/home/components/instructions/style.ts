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
	padding: 0 22px;
	cursor: pointer;
	min-width: 260px;
	width: fit-content;
	position: absolute;
	align-items: center;
	border-radius: 11.818px;
	transition: all 0.5s ease-in-out;
	backdrop-filter: blur(9.454545021057129px);
	box-shadow: 0px 7.091px 44.909px rgba(0, 0, 0, 0.19);
	background: ${({ theme }) => theme.palette.colors.WHITE};
	border: 1.182px solid ${({ theme }) => theme.palette.colors.GRAY190};
`
