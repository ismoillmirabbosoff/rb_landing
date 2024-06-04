import { useBrands } from './useBrands'
import { useTranslation } from 'next-i18next'
import { stringAvatar } from '@/utils/avatar'
import { type BrandProps } from './constants'
import Typography from '@mui/material/Typography'
import { Card, Avatar, Slider, Wrapper, Container } from './style'

export const Brands = () => {
	const { t } = useTranslation('common')
	const { up, down, arrayFirstHalf, arraySecondHalf } = useBrands()

	const list = (data: BrandProps[]) => {
		return data.map((b, i) => (
			<Card key={i} className='keen-slider__slide'>
				<Avatar alt={b.title} src={b?.logo?.src ?? ''} {...stringAvatar(b.title ?? '')} />
				<Typography variant='title80' component='h4'>
					{b.title}
				</Typography>
			</Card>
		))
	}

	return (
		<Container>
			<Wrapper>
				<Typography component='h2' variant='title' lineHeight={{ xs: '30px', md: '67px' }}>
					{t('companies_using_the_robosell_platform')}
				</Typography>
				<Slider>
					<div ref={up[0]} className='keen-slider'>
						{list(arrayFirstHalf)}
					</div>
					<div ref={down[0]} className='keen-slider'>
						{list(arraySecondHalf)}
					</div>
				</Slider>
			</Wrapper>
		</Container>
	)
}
