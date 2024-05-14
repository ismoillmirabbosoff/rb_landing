import Link from 'next/link'
import { Blog } from '@/components/blog'
import Button from '@mui/material/Button'
import { ROUTER } from '@/constants/router'
import { Wrapper, Container } from './style'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
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
				<Blog />
			</Wrapper>
		</Container>
	)
}
