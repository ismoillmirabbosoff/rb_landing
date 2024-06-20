import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useRef } from 'react'

const mediaBaseURL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL

export const Video = () => {
	const theme = useTheme()
	const videoRef = useRef<HTMLVideoElement>(null)
	const { t } = useTranslation('common')
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	useEffect(() => {
		videoRef.current?.load()
	}, [t, matches])

	return (
		<video ref={videoRef} loop muted autoPlay playsInline>
			<source
				src={`${mediaBaseURL}/${t(matches ? 'chat_mobile_video' : 'chat_video')}`}
				type='video/webm'
			/>
		</video>
	)
}
