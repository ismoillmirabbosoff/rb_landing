import Link from 'next/link'
import { Blog } from '@/components/blog'
import Button from '@mui/material/Button'
import { ROUTER } from '@/constants/router'
import { Wrapper, Container } from './style'
import Typography from '@mui/material/Typography'
import { IconArrowLeft } from '@/assets/icons/arrow-left'

export const Blogs = () => {
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
						Back
					</Button>
				</div>
				<Typography m='3px 0 12px' variant='title120' component='h2'>
					Blogs
				</Typography>
				<Blog />
			</Wrapper>
		</Container>
	)
}
