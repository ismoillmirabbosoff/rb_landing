import dayjs from 'dayjs'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import type { BlogProps } from '@/constants/blog'
import { Wrapper, Container } from './style'

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
				<Stack gap='20px' component='ul'>
					{blog.content.map((c, i) => {
						return (
							<Stack
								key={i}
								component='li'
								sx={{ display: 'grid', gridTemplateColumns: c.right || c.left ? '1fr 1fr' : '1fr' }}
							>
								{c.left ? (
									<>
										{c.image && (
											<Stack mt='20px' alignItems='center'>
												<Stack
													sx={{
														height: '400px',
														img: {
															borderRadius: '10px',
															objectFit: 'scale-down',
														},
													}}
												>
													<Image fill src={c.image} alt='blog' />
												</Stack>
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
												<Stack
													sx={theme => ({
														height: '400px',
														img: {
															borderRadius: '10px',
															objectFit: 'scale-down',
														},
													})}
												>
													<Image fill src={c.image} alt='blog' />
												</Stack>
											</Stack>
										)}
									</>
								)}
							</Stack>
						)
					})}
				</Stack>
			</Wrapper>
		</Container>
	)
}
