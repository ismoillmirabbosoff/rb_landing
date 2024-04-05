import { gilroy } from '@/utils/fonts'
import { type AppType } from 'next/app'
import { type ServiceAppProps } from './_app'
import createEmotionCache from '@/utils/create-emotion-cache'
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
			<Head>{emotionStyleTags}</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
	const originalRenderPage = ctx.renderPage
	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = async () =>
		await originalRenderPage({
			enhanceApp: (App: ComponentType<ComponentProps<AppType> & ServiceAppProps>) =>
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
