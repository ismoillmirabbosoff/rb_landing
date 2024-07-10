import dayjs from 'dayjs'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import type { BlogProps } from '@/constants/blog'
import { Wrapper, Container, WrapImage } from './style'

interface BlogPageProps {
	blog: string
}

export const Blog = (props: BlogPageProps) => {
	const { t } = useTranslation('common')
	const blog: BlogProps = JSON.parse(props.blog)

	return (
		<Container>
			<Wrapper>
				<Typography component='h1' variant='title150'>
					{t(blog.title)}
				</Typography>
				<Typography m='10px 0' variant='text150'>
					{dayjs(blog.date).format('MMMM DD, YYYY')}
				</Typography>
				{blog.content.map((c, i) => {
					return (
						<div key={i}>
							{c.texts.map((text, j) => (
								<Typography key={j}>{t(text)}</Typography>
							))}
							{c.image && (
								<Stack alignItems='center'>
									<WrapImage>
										<Image fill src={c.image} alt='blog' />
									</WrapImage>
								</Stack>
							)}
						</div>
					)
				})}
			</Wrapper>
		</Container>
	)
}
