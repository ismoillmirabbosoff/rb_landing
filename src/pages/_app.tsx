import Head from 'next/head'
import { Layout } from '@/layout'
import type { AppProps } from 'next/app'
import { theme } from '@/configs/material'
import NextNProgress from 'nextjs-progressbar'
import { AnimatePresence } from 'framer-motion'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from '@/utils/create-emotion-cache'
import { CacheProvider, type EmotionCache } from '@emotion/react'

import 'keen-slider/keen-slider.min.css'
import '@/styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

export interface ServiceAppProps extends AppProps {
	emotionCache?: EmotionCache
}

export default function App(props: ServiceAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<>
			<Head>
				<title>Robosell</title>
				<link rel='shortcut icon' href='/logo.svg' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#7d79ff' />
				<meta name='msapplication-TileColor' content='#7d79ff' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={theme}>
					<NextNProgress
						color={theme.palette.colors.PURPLE}
						options={{
							showSpinner: false,
						}}
					/>
					<CssBaseline />
					<AnimatePresence mode='wait' initial={false}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</AnimatePresence>
				</ThemeProvider>
			</CacheProvider>
		</>
	)
}
