import { Blogs } from '@/routes/blogs'
import { BLOGS } from '@/constants/blog'
import type { GetServerSideProps } from 'next'
import type { LanguageTypes } from '@/types/language'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default Blogs

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale as LanguageTypes, ['common'])),
// 		},
// 	}
// }

export const getStaticPaths = async () => {
	const paths = BLOGS.map(b => ({
		params: {
			blog: b.id,
		},
	}))
	return {
		paths: paths,
		fallback: false,
	}
}
