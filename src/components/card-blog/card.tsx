import Link from 'next/link'
import Image from 'next/image'
import { Card, Content } from './style'
import { ROUTER } from '@/constants/router'
import Typography from '@mui/material/Typography'
import { type BlogProps } from '@/constants/blog'

export const CardBlog = (props: BlogProps) => {
	return (
		<Link href={`${ROUTER.BLOGS}/1`}>
			<Card>
				<Image fill src={props.photo} alt={props.title} />
				<Content>
					<Typography
						component='h4'
						variant='text100'
						sx={{
							maxWidth: '300px',
							overflow: 'hidden',
							WebkitLineClamp: 2,
							display: '-webkit-box',
							textOverflow: 'ellipsis',
							WebkitBoxOrient: 'vertical',
						}}
					>
						{props.title}
					</Typography>
					<Typography mt={{ xs: 0, md: '9px' }} variant='text110' component='h5'>
						{props.date.format('HH:mm; DD:MM:YYYY')}
					</Typography>
				</Content>
			</Card>
		</Link>
	)
}
