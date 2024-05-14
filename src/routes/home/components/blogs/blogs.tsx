import Link from 'next/link'
import Stack from '@mui/material/Stack'
import { Blog } from '@/components/blog'
import Button from '@mui/material/Button'
import { ROUTER } from '@/constants/router'
import { Wrapper, Container } from './style'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { IconArrowRight } from '@/assets/icons/arrow-right'

export const Blogs = () => {
	const { t } = useTranslation('common')

	return (
		<Container id='blogs'>
			<Wrapper>
				<Typography variant='title30' component='h2'>
					{t('read_our_blog')}
				</Typography>
				<Typography mb='54px' variant='text' component='h3' color='colors.GRAY10'>
					{t('learn_new_technology')}
				</Typography>
				<Blog />
				<Stack mt='28px'>
					<Button
						component={Link}
						variant='outlined'
						href={ROUTER.BLOGS}
						sx={{ minWidth: '183px' }}
						endIcon={<IconArrowRight />}
					>
						{t('view_all')}
					</Button>
				</Stack>
			</Wrapper>
		</Container>
	)
}
