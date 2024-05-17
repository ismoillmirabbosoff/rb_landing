import Link from 'next/link'
import { BLOGS } from '@/constants/blog'
import Button from '@mui/material/Button'
import { ROUTER } from '@/constants/router'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { CardBlog } from '@/components/card-blog'
import { Cards, Wrapper, Container } from './style'
import { IconArrowLeft } from '@/assets/icons/arrow-left'

export const Blogs = () => {
	const { t } = useTranslation('common')

	return (
		<Container>
			<Wrapper>
				<div>
					<Button
						component={Link}
						href={ROUTER.HOME}
						variant='text-gray'
						startIcon={<IconArrowLeft />}
					>
						{t('back')}
					</Button>
				</div>
				<Typography m='3px 0 12px' variant='title120' component='h2'>
					{t('blogs')}
				</Typography>
				<Cards>
					{BLOGS.map((b, i: number) => (
						<CardBlog key={i} {...b} />
					))}
				</Cards>
			</Wrapper>
		</Container>
	)
}
