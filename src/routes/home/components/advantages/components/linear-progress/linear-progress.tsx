import { type COLORS } from '@/constants/css'
import { useRef, useState, useEffect } from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

interface LinearprogressProps {
	value: number
	color: keyof typeof COLORS
	bgcolor: keyof typeof COLORS
}

export const Linearprogress = ({ value, color, bgcolor }: LinearprogressProps) => {
	const progressRef = useRef(() => {})
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		progressRef.current = () => {
			if (progress > value) {
				setProgress(0)
			} else {
				const diff = Math.random() * 10
				setProgress(progress + diff)
			}
		}
	})

	useEffect(() => {
		const timer = setInterval(() => {
			progressRef.current()
		}, 500)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<LinearProgress
			value={progress}
			variant='determinate'
			sx={theme => ({
				[`.${linearProgressClasses.bar1Determinate}`]: {
					backgroundColor: theme.palette.colors[color],
				},
				[`&.${linearProgressClasses.root}`]: {
					backgroundColor: theme.palette.colors[bgcolor],
				},
			})}
		/>
	)
}
