import { BRANDS } from './constants'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import { useTranslation } from 'next-i18next'
import { stringAvatar } from '@/utils/avatar'
import Typography from '@mui/material/Typography'
import { Wrapper, Container, Card } from './style'

export const Brands = () => {
	const { t } = useTranslation('common')

	return (
		<Container>
			<Wrapper>
				<Typography mb='39px' variant='title' component='h2' lineHeight='67px'>
					{t('companies_using_the_robosell_platform')}
				</Typography>
				<Stack
					width='100%'
					gap='20px'
					component='ul'
					display='grid'
					gridTemplateColumns='repeat(4,1fr)'
				>
					{BRANDS.map((b, i) => (
						<Card key={i} whileHover={{ scale: 0.9 }}>
							<Avatar
								alt={b.title}
								src={b?.logo?.src ?? ''}
								{...stringAvatar(b.title ?? '', {
									width: 60,
									height: 60,
								})}
							/>
							<Typography variant='title80' component='h4'>
								{b.title}
							</Typography>
						</Card>
					))}
				</Stack>
			</Wrapper>
		</Container>
	)
}
