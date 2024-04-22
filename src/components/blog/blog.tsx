import Image from 'next/image'
import { Stack } from '@mui/material'
import { Card, Content } from './style'
import { BLOGS } from '@/constants/blog'
import Typography from '@mui/material/Typography'

export const Blog = () => {
	return (
		<Stack gap='20px' width='100%' display='grid' component='ul' gridTemplateColumns='1fr 1fr 1fr'>
			{BLOGS.map((b, i: number) => (
				<Card key={i}>
					<Image fill src={b.photo} alt={b.title} />
					<Content>
						<Typography variant='text100' component='h4'>
							{b.title}
						</Typography>
						<Typography mt='9px' variant='text110' component='h5'>
							{b.date.format('HH:mm; DD:MM:YYYY')}
						</Typography>
					</Content>
				</Card>
			))}
		</Stack>
	)
}
