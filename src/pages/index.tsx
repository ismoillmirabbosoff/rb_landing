import { Home } from '@/routes/home'
import type { GetServerSideProps } from 'next'
import type { LanguageTypes } from '@/types/language'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../next-i18next.config.js'

export default function Page() {
	return <Home />
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as LanguageTypes, ['common'], nextI18NextConfig)),
		},
	}
}
