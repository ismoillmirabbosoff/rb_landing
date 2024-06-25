import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { useRef, useState, useEffect } from 'react'
import { type PlatformsProps } from '@/constants/platform'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

export const Platform = ({ Icon, color, label, bgcolor, percent }: PlatformsProps) => {
	const { t } = useTranslation('common')
	const progressRef = useRef(() => {})
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		progressRef.current = () => {
			if (progress > percent) {
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
		<>
			<Stack justifyContent='center'>
				<Icon />
			</Stack>
			<Stack gap='6px' flexGrow={1}>
				<Stack direction='row' alignItems='center' justifyContent='space-between'>
					<Typography variant='text130' component='h5'>
						{t(label)}
					</Typography>
					<Typography variant='text130' component='h6' color='colors.GRAY50'>
						{Math.floor(progress)}
					</Typography>
				</Stack>
				<Stack>
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
				</Stack>
			</Stack>
		</>
	)
}
