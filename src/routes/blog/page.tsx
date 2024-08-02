import dayjs from 'dayjs'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { BlogProps } from '@/constants/blog'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Content, Wrapper, Container, WrapIamge } from './style'

interface BlogPageProps {
	blog: string
}

export const Blog = (props: BlogPageProps) => {
	const theme = useTheme()
	const { t } = useTranslation('common')
	const blog: BlogProps = JSON.parse(props.blog)
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Container>
			<Wrapper>
				<Typography component='h1' variant='title150'>
					{t(blog.title)}
				</Typography>
				<Typography m='10px 0' variant='text150'>
					{dayjs(blog.date).format('MMMM DD, YYYY')}
				</Typography>
				<Stack gap='20px' component='ul'>
					{blog.content.map((c, i) => {
						return (
							<Content key={i} {...c}>
								{c.left && !matches ? (
									<>
										{c.image && (
											<Stack mt='20px' alignItems='center'>
												<WrapIamge>
													<Image fill src={c.image} alt='blog' />
												</WrapIamge>
											</Stack>
										)}
										<Stack>
											{c.texts.map((text, j) => (
												<Typography key={j}>{t(text)}</Typography>
											))}
										</Stack>
									</>
								) : (
									<>
										<Stack>
											{c.texts.map((text, j) => (
												<Typography key={j}>{t(text)}</Typography>
											))}
										</Stack>
										{c.image && (
											<Stack mt='20px' alignItems='center'>
												<WrapIamge>
													<Image fill src={c.image} alt='blog' />
												</WrapIamge>
											</Stack>
										)}
									</>
								)}
							</Content>
						)
					})}
				</Stack>
			</Wrapper>
		</Container>
	)
}
