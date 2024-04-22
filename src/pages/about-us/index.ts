import { AboutUs } from '@/routes/about-us'
import type { GetServerSideProps } from 'next'
import type { LanguageTypes } from '@/types/language'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default AboutUs

export const getStaticProps: GetServerSideProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as LanguageTypes, ['common'])),
		},
	}
}
