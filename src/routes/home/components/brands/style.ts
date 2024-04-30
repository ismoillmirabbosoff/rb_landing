import { motion } from 'framer-motion'
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
`
