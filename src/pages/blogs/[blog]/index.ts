import { Blog } from '@/routes/blog'
import { BLOGS } from '@/constants/blog'
import type { LanguageTypes } from '@/types/language'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default Blog

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

export async function getStaticProps({ params, locale }: any) {
	const blog = BLOGS.find(b => b.id === params.blog)
	return {
		props: {
			blog: JSON.stringify(blog),
			...(await serverSideTranslations(locale as LanguageTypes, ['common'])),
		},
	}
}
