import { motion } from 'framer-motion'
import { styled } from '@mui/material/styles'

export const AnimationBack = styled(motion.div)`
	top: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	position: absolute;
	transition: all 0.5s ease-in-out;
`
