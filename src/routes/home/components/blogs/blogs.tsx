import Button from '@mui/material/Button'
import { Card, Content, Wrapper, Container } from './style'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import { BLOGS } from '@/constants/blog'
import Image from 'next/image'
import { IconArrowRight } from '@/assets/icons/arrow-right'

export const Blogs = () => {
	return (
		<Container>
			<Wrapper>
				<Typography variant='title30' component='h2'>
					Read our blog
				</Typography>
				<Typography mb='54px' variant='text' component='h3' color='colors.GRAY10'>
					Learn new technology
				</Typography>
				<Stack
					gap='20px'
					width='100%'
					display='grid'
					component='ul'
					gridTemplateColumns='1fr 1fr 1fr'
				>
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
				<Stack mt='28px'>
					<Button variant='outlined' endIcon={<IconArrowRight />} sx={{ minWidth: '183px' }}>
						View All
					</Button>
				</Stack>
			</Wrapper>
		</Container>
	)
}
