import { BRANDS } from './constants'
import { useTranslation } from 'next-i18next'
import { stringAvatar } from '@/utils/avatar'
import Typography from '@mui/material/Typography'
import { Card, Cards, Avatar, Wrapper, Container } from './style'

export const Brands = () => {
	const { t } = useTranslation('common')

	return (
		<Container>
			<Wrapper>
				<Typography
					component='h2'
					variant='title'
					mb={{ xs: '18px', md: '39px' }}
					lineHeight={{ xs: '30px', md: '67px' }}
				>
					{t('companies_using_the_robosell_platform')}
				</Typography>
				<Cards>
					{BRANDS.map((b, i) => (
						<Card key={i} whileHover={{ scale: 0.9 }}>
							<Avatar alt={b.title} src={b?.logo?.src ?? ''} {...stringAvatar(b.title ?? '')} />
							<Typography variant='title80' component='h4'>
								{b.title}
							</Typography>
						</Card>
					))}
				</Cards>
			</Wrapper>
		</Container>
	)
}
