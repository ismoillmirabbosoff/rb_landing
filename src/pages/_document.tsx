import { gilroy } from '@/utils/fonts'
import { type AppType } from 'next/app'
import { type RbLandingAppProps } from './_app'
import createEmotionCache from '@/utils/create-emotion-cache'
import { GoogleTagManager } from '@next/third-parties/google'
import { type ComponentType, type ComponentProps } from 'react'
import createEmotionServer from '@emotion/server/create-instance'
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	type DocumentProps,
	type DocumentContext,
} from 'next/document'

interface MyDocumentProps extends DocumentProps {
	emotionStyleTags: JSX.Element[]
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
	return (
		<Html lang='en' className={gilroy.className}>
			<Head>
				{emotionStyleTags}
				<script
					dangerouslySetInnerHTML={{
						__html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KBPK8JZS');
            `,
					}}
				/>
			</Head>
			<body>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBPK8JZS"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
					}}
				/>
				<Main />
				<NextScript />
			</body>
			<GoogleTagManager gtmId='G-9D6W5GJH7Q' />
		</Html>
	)
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
	const originalRenderPage = ctx.renderPage
	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = async () =>
		await originalRenderPage({
			enhanceApp: (App: ComponentType<ComponentProps<AppType> & RbLandingAppProps>) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />
				},
		})

	const initialProps = await Document.getInitialProps(ctx)
	const emotionStyles = extractCriticalToChunks(initialProps.html)
	const emotionStyleTags = emotionStyles.styles.map(style => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	))

	return {
		...initialProps,
		emotionStyleTags,
	}
}
