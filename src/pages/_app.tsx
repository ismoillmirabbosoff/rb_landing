import Head from 'next/head'
import { Layout } from '@/layout'
import type { AppProps } from 'next/app'
import { COLORS } from '@/constants/css'
import { theme } from '@/configs/material'
import NextNProgress from 'nextjs-progressbar'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { YandexMetricaProvider } from 'next-yandex-metrica'
import createEmotionCache from '@/utils/create-emotion-cache'
import { CacheProvider, type EmotionCache } from '@emotion/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import '@/styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

export interface RbLandingAppProps extends AppProps {
	emotionCache?: EmotionCache
}

function App(props: RbLandingAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<>
			<Head>
				<title>Robo</title>
				<link rel='shortcut icon' href='/logo.svg' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color={COLORS.PURPLE} />
				<meta name='msapplication-TileColor' content={COLORS.PURPLE} />
				<meta name='theme-color' content={COLORS.WHITE} />
			</Head>
			<YandexMetricaProvider
				tagID={97742397}
				initParameters={{
					clickmap: true,
					webvisor: true,
					trackLinks: true,
					accurateTrackBounce: true,
				}}
			>
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
			</YandexMetricaProvider>
		</>
	)
}

export default appWithTranslation(App)
